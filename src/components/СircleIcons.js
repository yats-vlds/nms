import React from "react"
import "./CircleIcons.css"
import circleIcons1 from "../assets/iconVector1.svg"
import circleIcons2 from "../assets/iconVector2.svg"
import circleIcons3 from "../assets/iconVector3.svg"
import circleIcons4 from "../assets/iconVector4.svg"
import circleIcons5 from "../assets/iconVector5.svg"
import circleIcons6 from "../assets/iconVector-6.svg"
import circleIcons7 from "../assets/iconVector-7.svg"
import circleIcons8 from "../assets/iconVector-8.svg"
import circleIcons9 from "../assets/iconVector9.svg"
import circleIcons10 from "../assets/iconVector10.svg"

const CircleIcons = () => {
    return (
        <div className="circle-icons">
            <img src={circleIcons1} className="iconVectors message" />
            <img src={circleIcons2} className="iconVectors back" />
            <img src={circleIcons3} className="iconVectors wifi" />
            <img src={circleIcons4} className="iconVectors contact" />
            <img src={circleIcons5} className="iconVectors camera" />
            <img src={circleIcons6} className="iconVectors home" />
            <img src={circleIcons7} className="iconVectors call" />
            <img src={circleIcons8} className="iconVectors settings" />
            <img src={circleIcons9} className="iconVectors message2" />
            <img src={circleIcons10} className="iconVectors browser" />
        </div>
    )
}

export default CircleIcons