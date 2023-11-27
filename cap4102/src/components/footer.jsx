import React from 'react'
import logo from "../images/footer_logo.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

export const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} className="img-footer-logo"></img>
        <p className="footer-body-text">
            500 EAST HEINBERG ST. | PENSACOLA, FL, 32502 | (850) 356-4410
        </p>
        <div className="footer-group">
            <a href="https://www.instagram.com/didafoodtruck" target="_blank" rel="noopener noreferrer">
                <img src={instagram} className="img-social-media"></img>
            </a>
            <a href="https://www.facebook.com/didafoodtruck" target="_blank" rel="noopener noreferrer">
                <img src={facebook} className="img-social-media"></img>
            </a>
        </div>
        <p className="footer-body-title">
            Business Hours
        </p>
        <p className="footer-body-text">
            Sun: 12:00 PM - 8:00 PM
        </p>
        <p className="footer-body-text">
            Mon: CLOSED
        </p>
        <p className="footer-body-text">
            Tues: 11:00 AM - 8:00 PM
        </p>
        <p className="footer-body-text">
            Weds: 11:00 AM - 8:00 PM
        </p>
        <p className="footer-body-text">
            Thurs: 11:00 AM - 8:00 PM
        </p>
        <p className="footer-body-text">
            Fri: 11:00 AM - 8:00 PM
        </p>
        <p className="footer-body-text">
            Sat: 11:00 AM - 8:00 PM
        </p>
    </div>
  )
}
