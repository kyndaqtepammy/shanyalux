import React from 'react';
import { Card, Button } from 'react-bootstrap';
/**
* @author
* @function CardsRoutes
**/

const CardsRoutes = (props) => {
  return(
    <div className="pageWrapper">
        <Card style={{margin:"auto", textAlign: "center"}}>
            <Card.Body>
                <Card.Title>{props.route}</Card.Title>
                <Button className="purpleButton" href={'./bookings'}>Book Now</Button>
            </Card.Body>
        </Card>
    </div>
   )

 }

export default CardsRoutes;