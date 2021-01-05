import React, { Component } from "react";
import Others from "./others";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  //CardMenu,
  Button,
} from "react-mdl";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*Bella*/}
          <Card
            shadow={5}
            style={{ width: "500px", marginLeft: "20px", padding: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage: `url(${require("./images/bella.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                resizeMode: "cover",
              }}
            ></CardTitle>
            <CardText>Food &amp; Beverage Stores.</CardText>
            <CardActions border>
              <Button
                colored
                style={{ color: "palevioletred" }}
                href="https://www.bellaacaciacatering.com/"
                target="_blank"
              >
                Live Website
              </Button>
            </CardActions>
          </Card>

          {/*Bull Dog Cafe*/}
          <Card
            shadow={5}
            style={{ width: "500px", marginLeft: "20px", padding: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage: `url(${require("./images/bulldog.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                resizeMode: "cover",
              }}
            ></CardTitle>
            <CardText>Food &amp; Beverage Stores.</CardText>
            <CardActions border>
              <Button
                colored
                style={{ color: "palevioletred" }}
                href="https://bulldogcoffee.square.site"
                target="_blank"
              >
                Live Website
              </Button>
            </CardActions>
          </Card>

          {/*Bull Best Cakes*/}
          <Card
            shadow={5}
            style={{ width: "500px", marginLeft: "20px", padding: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage: `url(${require("./images/best.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                resizeMode: "cover",
              }}
            ></CardTitle>
            <CardText>Food &amp; Beverage Stores.</CardText>
            <CardActions border>
              <Button
                colored
                style={{ color: "palevioletred" }}
                href="https://bestcakes.ca"
                target="_blank"
              >
                Live Website
              </Button>
            </CardActions>
          </Card>
        </div>
      );
  
    } else if (this.state.activeTab === 1) {
      return (
      
        <div className="projects-grid">
          {/*Hazzy*/}
          <Card
            shadow={5}
            style={{ width: "500px", marginLeft: "20px", padding: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage: `url(${require("./images/hazy.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                resizeMode: "cover",
              }}
            ></CardTitle>
            <CardText>Card Store.</CardText>
            <CardActions border>
              <Button
                colored
                style={{ color: "palevioletred" }}
                href="https://hazyjean.ca"
                target="_blank"
              >
                Live Website
              </Button>
            </CardActions>
          </Card>

          {/*Easy*/}
          <Card
            shadow={5}
            style={{ width: "500px", marginLeft: "20px", padding: "10px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage: `url(${require("./images/easyg.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                resizeMode: "cover",
              }}
            ></CardTitle>
            <CardText>Beauty Store.</CardText>
            <CardActions border>
              <Button
                colored
                style={{ color: "palevioletred" }}
                href="https://easy-extensions.myshopify.com"
                target="_blank"
              >
                Live Website
              </Button>
            </CardActions>
          </Card>

        <Card shadow={5} style={{ width: "500px", marginLeft: "20px", padding: "10px" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "340px",
              backgroundImage: `url(${require("./images/sooncard.png")})`,
            }}
          ></CardTitle>
          <CardText> 
             Travel Agency, Handmade items, Carpentery &amp; many more!{"\n"}
              <b>Under construction...</b>
          </CardText>
          <CardActions border>
            <Button
              colored
              style={{ color: "palevioletred" }} >
              Live DemoCheck back soon!
            </Button>
          </CardActions>
        </Card>

    </div> 
      );
    } 
    else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ width: "500px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "500px",
              backgroundImage: `url(${require("./images/main1.jpeg")})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              resizeMode: "cover",
            }}
          ></CardTitle>
          <CardText> 
            This is a realtime chat application where multple users can chat
              oline simultaneously. Chat application uses Socket.io, MongoDB and
              NodeJs along with React.
          </CardText>
          <CardActions border>
            <Button
              colored
              style={{ color: "palevioletred" }}
              href= "http://quiet-wildwood-81684.herokuapp.com"
              target="_blank"
            >
              Live Demo
            </Button>
          </CardActions>
        </Card>
     
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', backgroundImage: `url(${require("./images/angular.png")})`, resizeMode: "cover",
              }}></CardTitle>
    <CardText> Game Lobby project using Node, Angular and MangooDb. </CardText> <CardActions border> <Button colored style={{ color: "palevioletred" }} href="https://github.com/KatiusciaNovaesdeSa/MEAN" target="_blank" > GitHub </Button> <Button colored style={{ color: "palevioletred" }} href="https://fullstack-proj-katiuscia.herokuapp.com" target="_blank" > LiveDemo </Button> </CardActions> </Card>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <Card shadow={5} style={{ width: "500px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "500px",
              backgroundImage: `url(${require("./images/swift.jpeg")})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              resizeMode: "cover",
            }}
          ></CardTitle>
          <CardText>
            This is an quiz app for iOS, it presents 10 questions from a
            category of the user's choosing, presents a list of possible
            answers, and prints a score at the end.
          </CardText>
          <CardActions border>
            <Button
              colored
              style={{ color: "palevioletred" }}
              href="https://github.com/KatiusciaNovaesdeSa/QuizzApp"
              target="_blank"
            >
              GitHub
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <Others/>
        
      );
    
    }
  }


  
  render() {
    return (
      <div className="demo-tabs">
        <Tabs 
          activeTab={this.state.activeTab} 
          onChange={(tabId) => this.setState({ activeTab: tabId }) }
          ripple
        >
          <Tab className={"pinkGB"}>Food &amp; Beverage Stores</Tab>
          <Tab className={"pinkGB"}>E-commerce Stores</Tab>
          <Tab className={"pinkGB"}>React &amp; Frameworks</Tab>
          <Tab className={'pinkGB'}>Angular</Tab>
          <Tab className={'pinkGB'}>Swift</Tab>
          <Tab className={'pinkGB'}>Others</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content"> {this.toggleCategories()} </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
