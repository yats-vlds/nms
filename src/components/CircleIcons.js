import React from "react"
import "./CircleIcons.css"
import circleIcons1 from "../assets/vectorImg/vectorSmart1.svg"
import circleIcons2 from "../assets/vectorImg/vectorSmart2.svg"
import circleIcons3 from "../assets/vectorImg/vectorSmart3.svg"
import circleIcons4 from "../assets/vectorImg/vectorSmart4.svg"
import circleIcons5 from "../assets/vectorImg/vectorSmart5.svg"
import circleIcons6 from "../assets/vectorImg/vectorSmart6.svg"
import circleIcons7 from "../assets/vectorImg/vectorSmart7.svg"
import circleIcons8 from "../assets/vectorImg/vectorSmart8.svg"
import circleIcons9 from "../assets/vectorImg/vectorSmart9.svg"
import circleIcons10 from "../assets/vectorImg/vectorSmart10.svg"

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