import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import love from './assets/love.jpg';

/**
* @author
* @function Bookings
**/

const Styles = styled.div`
// .bookingJumbo {
//    background: url(${love}) no-repeat fixed bottom;
//   // filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 3.5+ */
//   // filter: gray; /* IE6-9 */
//   // -webkit-filter: grayscale(100%); /* Chrome 19+ & Safari 6+ */
//   background-size: cover;
//   color: #333;
//   width: 100%;
//   position: relative;
//   z-index: -2;
//   display: flex;
//   flex-direction: column;
//   min-height: 40vh;
//   flex-flow: column;
// }

// .bookingOverlay {
//   background-color:rgba( 255, 255,255, 0.6);
//   position: absolute;
//   top:0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: -1;
// }
// .purple{
//   background-color: #8B7BA0;
//   color: white;
//   opacity:100%;
//   border: none;
}
`;


const Bookings = (props) => {
  return(
    

<div>
<Jumbotron/>
<Styles>
<div className="afterJumbo">
    <p>
    It is a long established fact that a reader will be 
  distracted by the readable content of a page when
  looking at its layout. The point of using Lorem Ipsum 
  is that it has a more-or-less normal distribution of letters,
    as opposed to using 'Content here, content here', 
    making it look like readable English. Many desktop 
    publishing packages and web page editors now use Lorem Ipsum as 
    their default model text, and a search for 'lorem ipsum' 
    will uncover many web sites still in their infancy. Various 
    versions have evolved over the years, sometimes by accident,
    sometimes on purpose (injected humour and the like).
    </p>
  </div>
</Styles>
</div>
   )

 }

export default Bookings