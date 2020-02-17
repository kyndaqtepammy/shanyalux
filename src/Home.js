import React from 'react';
import { Jumbotron } from './components/Jumbotron';
import styled from 'styled-components';
import Cards from './components/Cards';
import { Container, Row, Col } from 'react-bootstrap';
import card1 from './assets/img/card1.jpg';
import card2 from './assets/img/card2.jpg';
import Footer from './components/Footer';
import CardsRoutes from './components/CardsRoutes';
import backgroundImg from './assets/img/bus.jpg';


const sleeplinerTitle = "LuxLiner";
const charterTitle = "Charter Hire"
const sleeplinerText = "Our exclusive Sleepliner Service offers passengers premium class luxury at affordable prices.";
const charterText = "We offer a superior Charter service to international and local tour operators, corporations, and private groups.";
const ref = '/bookings';

const Styles = styled.div`
.afterJumbo {
    padding: 5%;
    top:50%;
}`


/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div>
     <Jumbotron headline = "Welcome" 
                tagline="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                backgroundImage={backgroundImg}/>
     <Styles>
      <Container>
          <h1  style={{marginTop: "25%", textAlign:"center"}}>Our Bus Routes</h1>
          <Row>
            <Col>
              <CardsRoutes route={"Gaborone to Johanesburg"}/>
            </Col>
            <Col>
            <CardsRoutes route={"Johanesburg to Gaborone"}/>
            </Col>
          </Row>
        </Container>

        <Container>
          <h1  style={{margin: "15% 15%", textAlign: "center"}}>Our Services</h1>
          <Row>
            <Col>
              <Cards subtitle = {sleeplinerText}  title = {sleeplinerTitle} imagesrc={card1}/>
            </Col>
            <Col>
              <Cards subtitle = {charterText} title = {charterTitle} imagesrc={card2}/>
            </Col>
          </Row>
        </Container>
     </Styles>
     <Footer/>
    </div>
   )

 }

export default Home