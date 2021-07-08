import React from 'react'
import self_img from '../../../asset/img/me_icon_2.jpeg'
import './selfintro.css'


export default function SelfIntro() {
    return (
        <section id="self-area">
            <div className="flexbox noClick " >



                <div className="img-container center ">
                    {/* <img id="self_img" src={self_img} alt="self_img" /> */}
                </div>
                <div className="selfIntro-txt gradientBkgd neumorphy"> 
                    <p className="big-txt">
                        Hi, I am Andy Yeung
                    </p>
                    <p className="small-txt">
                    a Hong Konger who study computer science.
                    </p>
                </div>

            </div>
        </section>
    )
}
