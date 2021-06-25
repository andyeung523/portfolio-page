import './head.css'

import React from 'react'
import { FaBars } from 'react-icons/fa';


function Head() {
    return (
        <div id="head-area" className="flexBox">
            <div id="title">
                Andy Yeung
            </div>

            <div id="btn-div ">
                <button className="nav-btn">
                    About
                </button>
                <button className="nav-btn">
                    Background
                </button>
                <button className="nav-btn">
                    Skill
                </button>
                <button className="nav-btn">
                    Portfolio
                </button>
                <button className="nav-btn">
                    Contact
                </button>
                <button className="icon neumorphy" onclick="myFunction()">
                    <FaBars className="icon"/>
                </button>
            </div>



        </div>
    )
}

export default Head;