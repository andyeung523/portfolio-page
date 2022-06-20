import React from 'react'
import self_img from '../../../asset/img/me_icon_2.jpeg'
import bkgd_img from '../../../asset/img/me_icon.jpeg'

import './selfintro.css'


export default function SelfIntro() {
    return (
        <section id="self-area" >
            <div className="center">
                <div className="flexbox noClick glass " id="self-con">
                    {/* <div className="img-con">
                        <img src={self_img} id="self-img" />
                    </div> */}
                    <div className="selfIntro-txt  ">
                        <p className="big-txt">
                            Hi, I am Andy Yeung
                        </p>
                        <p className="small-txt">
                            Born in 1998, Hong Kong.
                        </p>
                        <p className="small-txt">
                            I love sport.
                        </p>
                        <p className="small-txt">
                            I love sci-fiction movies.
                        </p>
                        <p className="small-txt">
                            And I love your visit. 
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
