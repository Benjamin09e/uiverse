import React from 'react'
import "./brower.css"
import Navbar from "../../components/navbar/Navbar"
import Aside from "../../components/aside/Aside"
import Cards from '../../components/cards/Cards'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'


const Brower = () => {
  return (
    <div className='brower_container'>
      <Navbar />
      <div className='main_content'>
        <Aside />
        <div className="brower_content">
          <Header />
          <div className='card_element'>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Brower