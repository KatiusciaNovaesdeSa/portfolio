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
  CardMenu,
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
          {/*Project1*/}
          <Card shadow={5} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
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
                href="https://github.com/KatiusciaNovaesdeSa/chatapp"
                target="_blank"
              >
                GitHub
              </Button>
              {/*<Button colored>CodePen</Button> */}
              <Button
                colored
                style={{ color: "palevioletred" }}
                href="http://quiet-wildwood-81684.herokuapp.com"
                target="_blank"
              >
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/*<IconButton name='share'/> */}
            </CardMenu>
          </Card>

          {/*Project2*/}
          <Card shadow={5} style={{ width: "500px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "340px",
                background:
                  "url(https://dwglogo.com/wp-content/uploads/2017/09/React_logo_vector.svg) center / cover ",
                
              }}
            ></CardTitle>
            <CardText>
              Realtor Portfolio comming soon!{"\n"}
              <b>Under construction...</b>
            </CardText>
            <CardActions border>
              <Button colored style={{ color: "palevioletred" }}>
                GitHub
              </Button>
              <Button colored style={{ color: "palevioletred" }}>
                LiveDemo
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', backgroundImage: `url(${require("./images/angular.png")})`, resizeMode: "cover",
              }}></CardTitle>
    <CardText> Game Lobby project using Node, Angular and MangooDb. </CardText> <CardActions border> <Button colored style={{ color: "palevioletred" }} href="https://github.com/KatiusciaNovaesdeSa/MEAN" target="_blank" > GitHub </Button> <Button colored style={{ color: "palevioletred" }} href="https://fullstack-proj-katiuscia.herokuapp.com" target="_blank" > LiveDemo </Button> </CardActions> </Card>
      );
    } else if (this.state.activeTab === 2) {
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
    } else if (this.state.activeTab === 3) {
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
          <Tab className={"pinkGB"}>React</Tab>
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
