import React from 'react'
import './bkgd.css'
import ust_badge from '../../../asset/img/UST_L3.svg'

export default function Bkgd() {
    return (
        <section id="bkgd" class="ele">
            <div className="center glass " id="bkgd-con" >
                <div id="#bkgd-content ">
                    <div class="d-flex justify-content-between">
                        <div class="container ">
                            <div class="row">
                                <div class="col-sm p-3">
                                    <div class="row">
                                        <img id="ust_badge" alt="HKUSR" src={ust_badge} />

                                    </div>

                                </div>
                                <div class="col-sm p-3">
                                    <div class="row ">
                                        - BEng in Computer Science,
                                    </div>
                                    <div class="row">
                                        -  Minor in Big Data Technology
                                    </div>
                                    <div class="row">
                                        - 2021 Graduate
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function BackgroundBox() {
    return (
        <div className="center glass">
            <div>
                gi
            </div>

        </div>
    )
}

