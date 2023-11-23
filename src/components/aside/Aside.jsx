import React, { useState } from "react";
import "./aside.css"
import { NavLink } from 'react-router-dom'
import { BsBookmark } from "react-icons/bs";


const Aside = () => {
  const [show, setShow] = useState("affiche");

  return (
    <div className='aside_container'>
      <div className="aside_content"  
       
      >
        <button 
        onClick={() => setShow("All")}
        className={`btn ${show === "All" && "back"}`}
        >
          <NavLink className='linkAll' to='/all'>
            All
          </NavLink>
        </button>
        <button 
         onClick={() => setShow("Buttons")}
         className={`btn ${show === "Buttons" && "back"}`}
        >
          <NavLink className='linkBtn' to='/button'>
            Buttons
          </NavLink>
        </button>
        <button 
        onClick={() => setShow("Checkboxes")}
        className={`btn ${show === "Checkboxes" && "back"}`}
        >
          <NavLink className='linkCheck' to='/checkboxes'>
            Checkboxes
          </NavLink>
        </button>
        <button 
         onClick={() => setShow("Toggle")}
         className={`btn ${show === "Toggle" && "back"}`}
        >
          <NavLink className='linkToggle' to='/toggle'>
            Toggle switches
          </NavLink>
        </button>
        <button 
         onClick={() => setShow("Cards")}
         className={`btn ${show === "Cards" && "back"}`}
        >
          <NavLink className='linkCard' to='/cards'>
            Cards
          </NavLink>
        </button>
        <button 
        onClick={() => setShow("Loaders")}
        className={`btn ${show === "Loaders" && "back"}`}
        >
          <NavLink className='linkLoader' to='/loaders'>
            Loaders
          </NavLink>
        </button>
        <button 
        onClick={() => setShow("Inputs")}
        className={`btn ${show === "Inputs" && "back"}`}
        >
          <NavLink className='linkInput' to='/inputs'>
            Inputs
          </NavLink>
        </button>
        <button 
        onClick={() => setShow("Radio")}
        className={`btn ${show === "Radio" && "back"}`}
        >
          <NavLink className='linkRadio' to='/radio'>
            Radio buttons
          </NavLink>
        </button>
        <button 
        onClick={() => setShow("Froms")}
        className={`btn ${show === "Froms" && "back"}`}
        >
          <NavLink className='linkFrom' to='/froms'>
            Froms
          </NavLink>
        </button>
        <button 
         onClick={() => setShow("Favorites")}
         className={`btn ${show === "Favorites" && "back"}`}
        >
          <NavLink className='linkFavorite' to='/favorites'>
            <BsBookmark />
            My Favorites
          </NavLink>
        </button>

      </div>

    </div>

    
  )
}

export default Aside