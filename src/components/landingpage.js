import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Emoji from "react-emoji-render";


class Landing extends Component {
  render() {
    return (
      <div style={{width:'80%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={8}> 
            <img 
            src = {require("./images/undraw_dev_focus_b9xo.svg")}
            alt="avatar"
            className="avatar-img2"
            />
            <h3 style={{color :'#f73378', fontFamily:'Euphoria Script', textAlign:'center'}}>Full Stack Developer</h3>

            </Cell>

         <Cell col={4}>
              <h4 style={{color:'black',marginTop:'10em', marginRight:'3em', fontFamily:'Over the Rainbow'}}>Hi! I'm Katiuscia. I'm a Software Developer, tech lover, lifetime learner, and mom. 
              <Emoji text="😏"/><Emoji text="💟"/></h4>
         </Cell>



            <div className="banner-text">
            <p> HTML/CSS | Boostrap | JavaScript | React | NodeJS | Angular | Swift | MongoDB | PHP </p>  
            <hr/>

            <div className="social-links">

              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/katiuscianovaesdesa" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square"  area-hidden="true" />
              </a>

               {/* Github */}
               <a href="https://github.com/KatiusciaNovaesdeSa" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square"  area-hidden="true" />
              </a>

               {/* Twitter */}
               <a href="https://twitter.com/KatiNovaes" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter"  area-hidden="true" />
               </a> 

               {/* Dribbble */}
               <a href="https://dribbble.com/kati_novaes" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-dribbble"  area-hidden="true" />
              </a>

            </div>
          </div>
          
        </Grid>
        
      </div>
    );
  }
}

export default Landing;