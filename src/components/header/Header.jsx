import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='content_part'>
            <div>
                <h1>Cards</h1>
                <p>Open-Source cards made with HTML and CSS </p>
                <div class="brower_element">
                    <div class="element_left">
                        <p>Frist page</p>
                    </div>

                    <div class="element_right">
                        <div> <h4>Randomized</h4> </div>
                        <div> <h4>Randomized</h4> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header