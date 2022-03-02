import './head.css'

import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import self_img from '../../asset/img/sign_icon.svg'
import DDBtn from './ddBtn/ddBtn'





function Head(props) {

    const [checked, setChecked] = useState(false);
    const [navClass, setnavClass] = useState("n-d")
    const [wrapperClass, setwrapperClass] = useState("no-show")


    function onclick() {
        setChecked(!checked)
    }

    useEffect(() => {
        if (checked == 0) {
            // show the dropdown
            setwrapperClass(" no-show ")
            setnavClass(" n-d")
        } else {
            //do not show the drop down
            setwrapperClass(" show")
            setnavClass(" s-d")
        }
    })


    return (
        <section>
            <div id="head-area" className="flexBox">
                <div id="title" >
                    <img id="sign_icon" alt="Andy Yeung" src={self_img}/>                    
                </div>

                <div id="btn-div ">
                    <a className="nav-btn glass" href="#self-area" >
                        About
                    </a>
                    <button className="nav-btn glass">
                        Background
                    </button>
                    <button className="nav-btn glass">
                        Skill
                    </button>
                    <button className="nav-btn glass">
                        Portfolio
                    </button>
                    <button className="nav-btn glass">
                        Contact
                    </button>
                    <button className="icon glass" onClick={onclick}>
                        <FaBars className="icon" />
                    </button>
                </div>

            </div>

            <div id="dropdown_meun"className={wrapperClass}>
                <div className={navClass}>
                    <DDBtn name="About" closeFunc={onclick} to="#self-area"/>
                    <DDBtn name="Background"/>
                    <DDBtn name="Skill"/>
                    <DDBtn name="Porfolio"/>
                    <DDBtn name="Contact"/>

                </div>
            </div>

        </section>
    )
}

export default Head;