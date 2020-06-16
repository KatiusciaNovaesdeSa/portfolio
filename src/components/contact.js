import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Emoji from "react-emoji-render";
import App from './form'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3>Katiuscia Novaes de Sa</h3>
            <img
              src={require("./images/myAvatar.png")}
              alt="avatar"
              style={{
                height: "250px",
                border: "5px solid black",
                borderRadius: "25px",
              }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              {/* Software Developer*/}
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "15px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-telegram" aria-hidden="true" />
                      @kati_novaes
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "15px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      katiuscianovaes@gmail.com
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </p>
          </Cell>
          <Cell col={6}>
            <h3 style={{ fontFamily: "Anton" }}>
              <Emoji text="Contact Me!! 🙂" />
            </h3>
            <hr style={{borderTop: '1px dotted pink'}}/>
            <div style={{paddingTop:'3em'}}>
              <App/>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
