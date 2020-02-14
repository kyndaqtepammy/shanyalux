import React from 'react';
import styled from 'styled-components';
import { Form, Col, Button } from 'react-bootstrap';



const Styles = styled.div`
.bookingWidget {
    background-color: #fff;
    padding: 50px;
    top:10%;
    border: solid grey 1px;
}
`;

const formContainer = {
    margin: '300px 40px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: "5% 10%",
    opacity: "100%",
    zIndex: "-200",
    boxShadow:' 0 2px 4px 2px rgba(0,0,0,.2)',
  };
  


const BookingWidget = () => (
   <Styles>
        <div style={formContainer}>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="From" />
                </Col>
                <Col>
                < Form.Control placeholder="To" />
                </Col>
                <Col>
                < Form.Control placeholder="Departure date" />
                </Col>
                <Col>
                    <Button as="input" type="submit" value="Submit" className="purpleButton" />
                </Col>
            </Form.Row>
        </Form>
        </div>
   </Styles>
)

export default BookingWidget;