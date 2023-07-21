import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <nav id="footer-nav">
        <div className='footer-content'>
            {/* <div><img className="faded-logo" src="https://i.imgur.com/UF0J4XH.png"></img></div>
            <div className='vert-line'></div> */}
            <div className='name-div'>Created by: Christy Fury<br/>
                BottomsUp 2023
            </div>
            <div className='contact-div'>Contact: <br/>
            <span className = "email" onClick={() => window.location = 'mailto:christy.fury@gmail.com'}> 
                <span className="contact"><i alt="email link"  class="fa-regular fa-envelope medium contact-icon"></i></span>
                </span>
                <a href="https://www.linkedin.com/in/christy-fury/" target="_" className="icon">
                <span className="contact"> <i alt="linkedin link"  className="fa-brands fa-linkedin medium contact-icon"></i> </span>
                </a>
                <a href="https://github.com/ChristyFury10" target="_" className="icon">
                <span className="contact"> <i alt="github link" class="fa-brands fa-github medium contact-icon"></i> </span>
                </a>
                <a href="https://christy-portfolio-ga.onrender.com/" target="_" className="icon">
                <span className="contact"> <i class="fa-regular fa-clipboard medium contact-icon"></i> </span>
                </a>

                
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Footer
