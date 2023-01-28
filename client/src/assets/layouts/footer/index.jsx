import React from 'react'
import Logo from "../../images/divider2.png"
import SwanLogo from "../../images/logo.png"
import "./index.scss"

const FooterPage = () => {
  return (
    <div id='footer'>
        <div className="footers">
            <div className="top-footer">
                <h6 className='footer-h6'>Creative Unbounce Landing Page</h6>
                <h1 className='footer-h1'>GET A FREE QUOTE TODAY</h1>
                <img src={Logo} alt="" className='footer-img'/>
                <p className='footer-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button className='footer-btn'>CLICK HERE</button>
            </div>
            <div className="bottom-footer">
            <div className="top-sec">
          <div className="logo">
            <img src={SwanLogo} alt="" className='logo-img'/>
          </div>
          <div className="contact">
            <div className="text">
              <p className='contact-p'>Contact Us</p>
              <span className='contact-span'>Mail@Example.com</span>
            </div>
            <div className="icon">
            <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <p className='contact-p'>Call Us :</p>
              <span className='contact-span'>+201093515252</span>
            </div>
            <div className="icon">
            <i className="fa-solid fa-phone"></i>
            </div>
          </div>
        </div>
            </div>
        </div>


    </div>
  )
}

export default FooterPage