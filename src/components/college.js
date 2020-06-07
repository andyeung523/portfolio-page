import React, { Component } from 'react';

class College extends Component {
    render() {
        return (
            <div id="college" class="container-fluid text-center" >
                <h1>Where I learn</h1> <br />
                <div class="row text-center">
                    <div class="col-sm-4">
                        <div class="thumbnail">
                            MFS<br />
                            <img height="50px" width="50px" src="http://www.mfs1.edu.hk/image/badge_large.png" alt="MFS" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="thumbnail">
                            HKCC
            <img height="50px" width="50px"
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/PolyU_HKCC.svg/1024px-PolyU_HKCC.svg.png" alt="HKCC" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="thumbnail">
                            UST
            <img height="50px" width="50px"
                                src="https://github.com/andyeung523/portfolio-page/blob/51e37012f791ab3176ef9bf064fb136d114f771b/src/img/hkust.png" alt="UST" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default College;