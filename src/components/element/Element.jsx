import React from 'react'
import './element.css'
import universe from '../../assets/images/universe.jpeg'

const Element = () => {
    return (
        <div className='element_container'>
            <div className="element_content">
                <div className="element_left">
                    element
                </div>
                <div className="element_right">
                    <img src={universe} alt="" srcset="" width='100%' className='element_image'/>
                </div>
            </div>
        </div>
    )
}

export default Element