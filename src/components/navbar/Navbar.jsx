import React, { useState } from 'react'
import "./navbar.css"
import { NavLink } from "react-router-dom";
import { AiOutlinePlus, AiFillGithub } from "react-icons/ai";



const Navbar = () => {
  const [know, setKnow] = useState("view");
  return (
    <div className='container_navbar'>
      <div className="navlink">
        <div className='navlinks_left'>
          <div className='btns'>
            <NavLink className='linksU' to=''>
              UIVERSE
            </NavLink>
          </div>
          <div className='navlinks_left_content'>
            <div 
            onClick={() => setKnow("browser")}
            className={`btns ${know === "browser" && "back_end"}`}
            >
              <NavLink className='linksB' to='/brower'>
                BROWSER
              </NavLink>
            </div>
            <div className='btn_challenge'>
              <NavLink className='linksC' to='/challenges'>
                CSS Challenges
                <button className='btn_left'>vote</button>
              </NavLink>
            </div>
            <div className='btns'>
              <NavLink className='linksCr' to='/creators'>
                Creators
              </NavLink>
            </div>
          </div>
        </div>
        <div className='navlinks_right'>
          <NavLink className='linksCre' to=''>
            <button className='btn_right1'>
              <AiOutlinePlus className='faplus' />
              Create
            </button>
          </NavLink>
          <NavLink className='linksS' to=''>
            <button className='btn_right2'>
              <AiFillGithub className='fagithub' />
              Sign in with GitHub
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar