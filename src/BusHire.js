import React from 'react'
import  CarouselPage  from './components/Carousel';
import Footer from './components/Footer';

var text = 'Shanya Lux is the best way to travel and tour your destination, because we offer a superior Charter bus hire service to international and local tour operators, travel agents, corporations, schools and private groups. Our commitment to providing a safe, entertaining, comfortable and dependable service will guarantee that your charter is a success. The Shanya Lux Charter fleet offers a wide range of luxury vehicles, ranging from 22 to 48-seater luxury coaches. These modern coaches surpass world–class standards in passenger comfort, entertainment and safety. All coaches are equipped with the latest technology, including specialized safety equipment, heating and air conditioning, headrest touchscreens for video and audio entertainment, on-board fridge and restroom facilities, super-soft reclining seats fitted with individual safety belts, and individual arm rests and reading lights.'
/**
* @author
* @function BusHire
**/

const BusHire = (props) => {
  return(
    <div>
      <CarouselPage/>
      <div className="contentWrapper">
      <p  style={{padding: "1% 15%"}}>{text}</p>
      </div>
      <Footer/>
    </div>
   )

 }

export default BusHire;