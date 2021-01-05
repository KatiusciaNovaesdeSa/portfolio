import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from'./education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src= {require("./images/black&white.png")}
              alt='avatar'
              style={{height:'200px'}}
              />
            </div>

            <h3 style={{paddingTop: '2em'}}>Katiuscia Novaes de Sa</h3>
            <h4 style={{color:'grey'}}>Full-Stack Developer| Web Designer | E-commerce Coordinator</h4>
            <hr style= {{borderTop: '3px solid #f73378', width: '50%'}}/>
            <p> Looking for new challenges in the design, development, and testing of computing systems and software products.</p>
            <hr style= {{borderTop: '3px solid #f73378', width: '50%'}}/>
            <h5>Address</h5>
            <p>105 The Queensway</p>
            <h5>Phone</h5>
            <p>(647)720-6662</p>
            <h5>Email</h5>
            <p>katiuscianovaes@gmail.com</p>
          </Cell>

          <Cell className= "resume-right-col" col={8}>
           <h3>Education</h3>

           <Education
            startYear={2020}
            endYear={2021}
            schoolName="Fanshawe College"
            schoolDescription= "Post-graduate in Information Security Management"
           /> 

          <Education
            startYear={2017}
            endYear={2020}
            schoolName="George Brown College"
            schoolDescription= "Advanced Diploma in Computer Programmer Analyst"
           />

          <Education
            startYear={2015}
            endYear={2016}
            schoolName="George Brown College"
            schoolDescription= "Diploma in Hotel Management"
           />
           <hr style={{borderTop: '3px solid #f73378'}}/>

          <h3>Experience</h3> 

          <Experience
            startYear={2020}
            endYear={2021}
            jobName= "E-Commerce Coordinator - Mosaic North America - Toronto, ON"
            jobDescription=  " Working closely with business owners from the concept through to launching their site, as well as assisting with the site marketing and promotion. Selecting and implementing an e-commerce platform, incorporating business branding and logos, providing support during the website launch, training on website maintenance and order fulfillment." 
            />

            <Experience
            startYear={2020}
            endYear={2020}
            jobName= "Web Developer - Pilot Interactive -Toronto, ON"
            jobDescription=  " Assist in writing well designed, testable, efficient code in the development of an online music festival website using best practices.Technologies used: ReactJS, NextJS, StoryBlok,Typescript, SASS."
            />  

          <Experience
            startYear={2017}
            endYear={2017}
            jobName= "Education Consultant SILA Intercambio -Toronto, ON"
            jobDescription=  ' Provided outstanding customer service to clients. Generated leads and fomented sales'
            />  
          

          <Experience
            startYear={2016}
            endYear={2017}
            jobName= "Server Rio 40 Restaurant – Toronto, ON"
            jobDescription= " Commended for multi-task abilities. Cited for excellence in interpersonal communications,teamwork, and reliability"
          />  

          <Experience
            startYear={2010}
            endYear={2014}
            jobName= "Manager WS- Exchange Student - Recife, Brazil"
            jobDescription= " Coordinated, planned and organize company operations. Resolved problems to meet quality standard and deadlines  Created strategic plans for advertising. Operated financial accounts, balance sheet of technical analysis"
          />  
           <hr style={{borderTop: '3px solid #f73378'}}/>

          <h3>Skills</h3> 
          <Skills
            skill= 'HTML/CSS'
            progress={95}

          />
          <Skills
            skill= 'React'
            progress={95}

          />
          <Skills
              skill= 'JavaScript'
              progress={90}

          />
          <Skills
              skill= 'Java'
              progress={80}

          />
          <Skills
              skill= 'Angular'
              progress={80}

          />
          <Skills
              skill= 'NodeJS'
              progress={80}

          />
          <Skills
              skill= 'Python'
              progress={90}

          />
          <Skills
              skill= 'PHP'
              progress={30}

          />
           <Skills
              skill= 'Boostrap'
              progress={100}

          />
           <Skills
              skill= 'MongoDB'
              progress={100}

          />
          </Cell> 
        </Grid>
      </div>
    );
  }
}

export default Resume;