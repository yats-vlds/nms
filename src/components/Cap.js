import React from 'react'
import nms from "../assets/nmsdev.svg"
import "./Cap.css"
import LazyLoad from "react-lazy-load"
import {JsonLd} from "react-schemaorg";

const Cap = () => {
    const CapSchema = ({cap}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'CapSchema',
                    title: cap.title,
                    titleTwo: cap.titleTwo
                }}
            />
        )
    }
    const cap = {title: "THE GUIDE TO DIGITAL", titleTwo: "TRANSFORMATION"}
    return (
        <>
            <div className="cap">
                <div className="container">
                    <div className="row cap__row">
                        <div className="col-7">
                            <CapSchema cap={cap}/>
                            <h1 className="display-1 cap__leftTitle">{cap.title}</h1>
                        </div>
                        <div className="col-5">
                            <LazyLoad offsetVertical={300}>
                                <img src={nms} alt="" className="cap__image img-fluid" loading="lazy"/>
                            </LazyLoad>
                        </div>
                        <div className="col">
                            <h1 className="display-1 cap__leftTitle">{cap.titleTwo}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cap
