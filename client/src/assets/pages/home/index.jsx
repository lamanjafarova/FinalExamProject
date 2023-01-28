import React from 'react'
import Logo from "../../images/logo.png"
import swanLogo from "../../images/divider2.png"
import "./index.scss"
import Cards from '../../components/cards'
import {Helmet} from "react-helmet";
import Arrow from "../../images/arrow.png"
const HomePage = ({wishList, setWishList}) => {
  return (
    <div id='home'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swan Lake</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="homepage">
        <div className="top-section">
        <div className="container">
       <div className="top-sec">
          <div className="logo">
            <img src={Logo} alt="" className='logo-img'/>
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
        <div className="bottom-sec">
         <div className="left-side">
         <h4 className='left-h4'>Creative Landing Page Template</h4>
          <h2 className='left-h2'>LET’S GET STARTED <br /> <span className='h2-span'> WITH SWAN LAKE TEMPLATE</span></h2>
          <button className='left-btn'>Explore More</button>
          <img src={Arrow} alt="" className='arrow'/>
         </div>
         <div className="right-side">
          <form action="" className='form'>
            <h1 className='right-h1'>Register Now</h1>
            <span className='right-span'>Take your free trial</span>
            <input type="text" placeholder='Your Name' className='input'/>
            <input type="text" placeholder='Your Email' className='input'/>
            <input type="text" placeholder='Phone Number' className='input'/>
            <button className='form-btn'>GET A QUOTE</button>
          </form>
         </div>
        </div>



        <div className="about-swan">
          <div className="container">
            <div className="about-swan-lake">
              <h1 className='text-h1'><span className='text-span'>ABOUT</span> SWAN LAKE</h1>
              <p className='text-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <div className="swan-cards">
                <div className="swan-card">
                  <span className='swan-span'>01.</span>
                  <h4 className='swan-h4'>THE COMPANY</h4>
                  <p className='swan-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</p>
                  <button className='swan-btn'>Read More</button>
                </div>
                <div className="swan-card">
                  <span className='swan-span'>02.</span>
                  <h4 className='swan-h4'>OUR VISION</h4>
                  <p className='swan-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</p>
                  <button className='swan-btn'>Read More</button>
                </div>
                <div className="swan-card">
                  <span className='swan-span'>03.</span>
                  <h4 className='swan-h4'>OUR MISSION</h4>
                  <p className='swan-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</p>
                  <button className='swan-btn'>Read More</button>
                </div>
                <div className="swan-card">
                  <span className='swan-span'>04.</span>
                  <h4 className='swan-h4'>OUR PROCESS</h4>
                  <p className='swan-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indust...</p>
                  <button className='swan-btn'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="our-service">
          <div className="container">
            <div className="service">
              <div className="left-side-service">
              </div>
              <div className="right-side-service">
                <h4 className='service-h4'><span className='service-span'>OUR GREAT</span> SERVICES</h4>
                <img src={swanLogo} alt="" className='service-img'/>
                <p className='service-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been standard. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <h5 className='service-h5'><i className="fa-solid fa-caret-right"></i> Responsive Design</h5>
                <h5 className='service-h5'><i className="fa-solid fa-caret-right"></i> Great Support</h5>
                <h5 className='service-h5'><i className="fa-solid fa-caret-right"></i> Look great on any devices</h5>
                <h5 className='service-h5'><i className="fa-solid fa-caret-right"></i> Highest Speed</h5>
                <h5 className='service-h5'><i className="fa-solid fa-caret-right"></i> Fresh Design</h5>
                <h5 className='service-h5'><i className="fa-solid fa-caret-right"></i> Useful and Intuitive Interface</h5>
              </div>
            </div>
          </div>
        </div>




        <div className="cards">
          <Cards wishList={wishList} setWishList={setWishList}/>
        </div>
      </div>



    </div>
  )
}

export default HomePage