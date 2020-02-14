import React from 'react';
import DateCopyrightBanner from './DateCopyrightBanner'
/**
* @author
* @function Footer
**/


const Footer = () => {
  return(
    <div className="footerWrapper">
        <div className="column">
            <section>
                <h6 className="footerListsHeading">About Us</h6>
                <ul className="footerLists">
                    <li>Lorem ipsum</li>
                    <li>Dolor sit</li>
                    <li>Ame versuca</li>
                    <li>Ipsum lorem</li>
                    <li>Sit dolor</li>
                    <li>Versuca ame</li>
                </ul>
            </section>
        </div>
        <div className="column">
            <section>
                <h6 className="footerListsHeading">Help</h6>
                <ul className="footerLists">
                    <li>Lorem ipsum</li>
                    <li>Dolor sit</li>
                    <li>Ame versuca</li>
                    <li>Ipsum lorem</li>
                    <li>Sit dolor</li>
                    <li>Versuca ame</li>
                </ul>
            </section>
            
        </div>
        <div className="column">
            <section>
                <h6 className="footerListsHeading">Book</h6>
                <ul className="footerLists">
                    <li>Lorem ipsum</li>
                    <li>Dolor sit</li>
                    <li>Ame versuca</li>
                    <li>Ipsum lorem</li>
                    <li>Sit dolor</li>
                    <li>Versuca ame</li>
                </ul>
            </section>
        </div>
        <DateCopyrightBanner/>
    </div>
   )

 }

export default Footer