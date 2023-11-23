import React from 'react'
import "./all.css"
import Navbar from '../../components/navbar/Navbar'
import Aside from '../../components/aside/Aside'
import Footer from '../../components/footer/Footer'
import Cards from '../../components/cards/Cards'
import Header from '../../components/header/Header'

const All = () => {

  
  return (
    <div>
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
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default All