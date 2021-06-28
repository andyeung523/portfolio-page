import './head.css'

import React,{ useState } from 'react'
import { FaBars } from 'react-icons/fa';




function Head() {
    const [checked, setChecked] = useState(false);
    var dropDownList;
    function onclick () {
        console.log(checked);
       setChecked(!checked)
    }

    if(checked==0){
        dropDownList =<div className="dropDown">dropdown</div>;
    }else{
        dropDownList=<div className="dropDown"></div>;
    }


    return (
        <section>
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
                    <button className="icon neumorphy" onClick={onclick}>
                        <FaBars className="icon" />
                    </button>
                </div>

            </div>

            {dropDownList}

        </section>
    )
}

export default Head;