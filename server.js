var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
const creds = require("./config");
const path = require('path');

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "968e7ef87e15fd",
    pass: "f8fe082ef15df7"
  }
});

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: "katiuscia.novaesdesa@georgebrown.ca", // Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      })

      transporter.sendMail(
        {
          from: "katiuscia.novaesdesa@georgebrown.ca",
          to: email,
          subject: "Submission was successful",
          text: `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT || 3002);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
