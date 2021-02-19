import React from "react"
import "./AnimateRocket.css"
import kamen from "../assets/kamenRocket.svg"
import lineRocket from "../assets/lineRocket.svg"
import leftVazhel from "../assets/LeftVazhel.svg"
import rightVazhel from "../assets/rightVazhel.svg"
import rocket from "../assets/rocket.svg"

const AnimateRocket = (props) => {
    return <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "300px"}}>
        <object type="image/svg+xml" data={lineRocket} className="line" />
        <object type="image/svg+xml" data={kamen} className="kamen" />
        <div className={{dispay: "flex"}}>
            <object type="image/svg+xml" data={leftVazhel} className="leftVazhel" />
            <object type="image/svg+xml" data={rightVazhel} className="rightVazhel" />
        </div>
        <object type="image/svg+xml" data={rocket} className="rocket" />
    </div>
}

export default AnimateRocket