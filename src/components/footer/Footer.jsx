import React from 'react'
import "./footer.css"
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";



const Footer = () => {
  return (
    <div className='footer_element'>
      <div className="footer_container">
        <div className="footer_left">
          <h1>uiverse</h1>
          <div className='footer_link'>
            <div>
              <p>Universe of UI; Hundreds of Open</p>
              <p>Source UI elements</p>
            </div>

          </div>
          <div className='footer_link'>
            <div>
              <h3>MIT License</h3>
              <p>All content (UI elements) on this site are</p>
              <p>published under the <NavLink>MIT License.</NavLink> </p>
            </div>

          </div>
          <div className='footer_link'>
            <div>
              <AiFillInstagram />
              <BsTwitter />
              <BsDiscord />
            </div>
          </div>
          <div className='footer_link'>
            <p>© 2023. Uiverse.io - All rights reserved.</p>
          </div>
        </div>
        <div className="footer_right">
          <div className='left_footer'>
            <h3>Information</h3>
            <NavLink to='' className='footer_link'>Post guidelines</NavLink>
          </div>
          <div className='right_footer'>
            <h3>Legal</h3>
            <div className='footer_link'>
              <div className="link_element">
                <NavLink to='' >Terms and Conditions</NavLink>
                <NavLink to='' className='footer_link'>Privacy policy</NavLink>
                <NavLink to='' className='footer_link'>Cookie policy</NavLink>
              </div>
            </div>





          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer