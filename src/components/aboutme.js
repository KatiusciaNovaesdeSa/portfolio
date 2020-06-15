import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center', paddingTop: '2em'}}>
              <img src= {require("./images/2.png")}
              alt='avatar'
              style={{height:'200px'}}
              />
            </div>
      
      </Cell>
      
      <Cell col={6}>
      <div className='par_fon'>
        <h3 style={{paddingTop: '1em', fontFamily: 'Karan'}}>All about me ....</h3>
        <hr></hr>
        <p> My name is Katiuscia Novaes and I was born and raised in Brazil. In the year 2000, I came to Canada on my first 
          international trip  and I fell in love with Toronto. A few years later, I graduated from University in Brazil and
           I decided to move to Toronto. In 2010, I went back to Brazil and started my own business, a Student Exchange 
           franchise.  I was very successful, however my mind was still in Toronto. Thus, in 2015, I sold my business and moved
            back to Canada. Since I had to start over again, why not start a new career that  I always had passion in?
             That is when I enrolled myself into Computer Programming at George Brown College.   </p>
           <p>
           I am enthusiastic about web development & design. I love programming, travelling, paddleboarding, and coffee. 
           I am a passionate Software Developer having experience in building Web and Mobile applications with 
           Javascript/ ReactJS/ NodeJS and some other interesting libraries and frameworks.  I tend to make use of modern web 
           technologies to build websites that look attractive, creative, unique, trendy and function correctly in 
           all platforms. I am especially focusing on Reactjs.</p>

           <p>If you think I might be a good fit, I would love to hear from you!</p>

           <p>Feel free to to contact me via  <a href="https://www.linkedin.com/in/katiuscianovaesdesa" rel="noopener noreferrer" target="_blank" style={{color: "palevioletred"}}>Linkedin!</a></p>
           
           

        <div style={{paddingTop:'6em'}}>
        <hr></hr>
        <h3 style={{fontFamily:'Euphoria Script', textAlign:'center', color: 'palevioletred'}}>"You can't use up creativity. The more you use the more you have"</h3>
        <h5 style={{textAlign:'center'}}>Maya Angelou</h5>   
        <hr></hr>
        </div>
      </div>

      </Cell>
      </Grid>
      </div>
    );
  }
}

export default About;