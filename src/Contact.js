import React from 'react';
import SimpleMap from './components/Maps';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

/**
* @author
* @function Contact
**/

const Contact = (props) => {
  return(
    <div>
      <div style={{padding: "0 15%"}}>
        <SimpleMap style={{marginTop: "5%"}}/>
        <h1  style={{marginTop: "15%", textAlign:"center"}}>Send us a message!</h1>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
   )

 }

export default Contact