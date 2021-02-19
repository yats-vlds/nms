import React from 'react'
import nms from "../assets/nmsdev.svg"
import "./Cap.css"

const Cap = () => {
    return (
        <div className="cap">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <h1 className="display-1 cap__title">THE GUIDE TO DIGITAL TRANSFORMATION</h1>
                    </div>
                    <div className="col-5">
                        <img src={nms} alt="" className="cap__image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cap
// {/*<div className="cap">*/}
// {/*    <div className="cap__left">*/}
// {/*        <p className="cap__leftTitle">*/}
// {/*            THE GUIDE TO DIGITAL*/}
// {/*        </p>*/}
// {/*    </div>*/}
// {/*    <div className="cap__right">*/}
// {/*        <img src={nms} className="cap__rightImage"/>*/}
// {/*    </div>*/}
// {/*</div>*/}
// {/*<div className="cap_two">*/}
// {/*    <p className="cap__leftTitle">*/}
// {/*        TRANSFORMATION*/}
// {/*    </p>*/}
// {/*</div>*/}