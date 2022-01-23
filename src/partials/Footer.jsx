import React from 'react'
import logo from '../images/medbond-logo.png'

const Footer = () => {
    return (
        <div className='footer' data-aos="fade-up">
            <div className="footer-up">
                <div className="footer-up-left">
                     <img src={logo} alt="" className='foot-logo'/>
                </div>
                <div className="footer-up-right">
                     <a href="/" className="termNc">
                         Terms and conditions
                     </a>
                     <a href="/" className="cnc">
                         Code of conduct
                     </a>
                     <button className="get-started">
                         Join Our Telegram
                     </button>
                </div>
            </div>
            <div className="hr">

            </div>
            <div className="foot-bottom">
               <h4 className="foot-bottom-left">
                   ©2022 MEDBOND | All rights reserved
               </h4>
              <div className="foot-bottom-right">
                <i class="fab fa-twitter socialm"></i>
                <i class="fab fa-linkedin socialm"></i>
                <i class="fab fa-instagram socialm"></i>
                <i class="fab fa-discord socialm"></i>
                <i class="fab fa-youtube socialm"></i>
              </div>
            </div>
        </div>
    )
}

export default Footer