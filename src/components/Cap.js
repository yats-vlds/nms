import React from 'react'
import nms from "../assets/nmsdev.svg"
import "./Cap.css"

const Cap = () => {
    return (
        <div className="cap">
            <div className="container">
                <div className="row cap__row">
                    <div className="col-7">
                        <h1 className="display-1 cap__leftTitle">THE GUIDE TO DIGITAL</h1>
                    </div>
                    <div className="col-5">
                        <img src={nms} alt="" className="cap__image img-fluid"/>
                    </div>
                    <div className="col">
                        <h1 className="display-1 cap__leftTitle">TRANSFORMATION</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cap