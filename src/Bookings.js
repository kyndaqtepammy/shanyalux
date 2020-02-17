import React from 'react';
import { Jumbotron } from './components/Jumbotron';
import styled from 'styled-components';
import backgroundImg from './assets/img/_AAD6732.jpg';
import Footer from './components/Footer';
/**
* @author
* @function Bookings
**/

const Styles = styled.div`
{}
`;


const Bookings = (props) => {
  return(
    

<div style={{marginTop: "6%"}}>
  <Jumbotron headline="Book Now!" 
             tagline="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " 
             backgroundImage={backgroundImg}/>
    <div className="pageWrapper" style={{padding: "30px"}}></div>         
  <Footer/>           
</div>
   )

 }

export default Bookings