import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';

class Others extends Component {
    render(){
        return(
            <CardDeck>
  <Card>
    
    <Card.Body>
      <Card.Title>Book Club</Card.Title>
      <Card.Text>
       Book Club project usig Java.
      </Card.Text>
      <Button variant="link" href="https://github.com/KatiusciaNovaesdeSa/BookClub" target="_blank" style={{ color: "palevioletred" }}>GITHUB</Button>
    </Card.Body>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Airline System</Card.Title>
      <Card.Text>
        Booking system for airline company using C#. Add/delete flights, add/delete customers, create bookings. 
      </Card.Text>
      <Button variant="link" href="https://github.com/KatiusciaNovaesdeSa/AirlineProject" target="_blank" style={{ color: "palevioletred" }}>GITHUB</Button>
    </Card.Body>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Weapon Shop</Card.Title>
      <Card.Text>
       Data Structure project Weapons Shop using a Binary Search Tree.
      </Card.Text>
      <Button variant="link" href="https://github.com/KatiusciaNovaesdeSa/WeaponShop" target="_blank" style={{ color: "palevioletred" }}>GITHUB</Button>
    </Card.Body>
  </Card>

<Card>
  <Card.Body>
      <Card.Title>Personal Dictionary</Card.Title>
      <Card.Text>
        Personal Dictionary project using C#.
      </Card.Text>
      <Button variant="link" href="https://github.com/KatiusciaNovaesdeSa/PersonalDictionary" target="_blank" style={{ color: "palevioletred" }}>GITHUB</Button>
    </Card.Body>
  </Card>
            
 <Card>
  <Card.Body>
      <Card.Title>Userfeel Tester Certified</Card.Title>
      <Card.Text>
         Userfeel Tester Certified.
      </Card.Text>
       <a href="https://app.userfeel.com/t/2f67b25c" target="_blank" rel="noopener noreferrer"> <img src="https://app.userfeel.com/tester/410092/image?.png" alt="userfeel logo"  width="220" class="no-b-lazy" ></img></a>
    </Card.Body>
  </Card>

  

  
</CardDeck>


        )
        
    }
}    


export default Others;
