import React from 'react'
import './content.css'
import self_img from '../../asset/img/me_icon_3.png'

export default function SelfIntro() {
    return (
        <div className="flexbox " id="self-area"> 

            <div className="self-intro-text ">
                <p id="self-text">
                    Hi, I am Andy Yeung. <br/>
                    Welcome to my website

                </p>
            </div>

            <div className="img-container center ">
                <img id="self_img" src={self_img} alt="self_img" />
            </div>

        </div>
    )
}
