import React from 'react'
import "./cards.css"
import { BsBookmark } from 'react-icons/bs'

const Cards = () => {
    return (
        <div className='card_elements'>
            <div className='card_container'>
                <div class="card">
                    Click me
                </div>
            </div>
            <div className="card_part">
                <div className="element_left">
                    <p>Benj@.</p>
                </div>
                <div className="element_right">
                    <div className="part_left">
                        <p>234K views</p>
                    </div>
                    <div className="part_right">
                        <BsBookmark />
                        <p> 108 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards