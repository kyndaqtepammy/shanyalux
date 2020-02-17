import React from 'react';
import {Card, Button} from 'react-bootstrap';

/**
* @author
* @function Cards
**/

const Cards = (props) => {
  return(
    <div>
      <Card style={{ 
          width: '100%',  
          padding: "10px",
          boxShadow: "5px 10px 18px #888888"
         }}>
        <Card.Img variant="top" src={props.imagesrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
            {props.subtitle}
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
   )

 }

export default Cards;