import React from 'react'
import self_img from '../../../asset/img/me_icon_2.jpeg'
import './selfintro.css'


export default function SelfIntro() {
    return (
        <section>
            <div className="flexbox gradientBkgd neumorphy" id="self-area">



                <div className="img-container center ">
                    <img id="self_img" src={self_img} alt="self_img" />
                </div>
                <div className="selfIntro-txt">
                    <p>
                        Hi, I am Andy Yeung, a Hong Konger who study computer science.
                    </p>
                </div>

            </div>
        </section>
    )
}
