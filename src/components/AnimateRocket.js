import React from "react"
import "./AnimateRocket.css"
import kamen from "../assets/kamenRocket.svg"
import lineRocket from "../assets/lineRocket.svg"
import leftVazhel from "../assets/LeftVazhel.svg"
import rightVazhel from "../assets/rightVazhel.svg"
import rocket from "../assets/rocket.svg"
import stoneRocket from "../assets/stoneRocket.svg"
import scalesRocket from "../assets/scalesRocket.svg"
import scalesRocketRight from "../assets/scalesRocketRight.svg"

const AnimateRocket = (props) => {
    return <div className="animateRocket justify-content-center">
        <div className="scales">
            <object type="image/svg+xml" data={scalesRocket} className="scalesRocket" />
            <object type="image/svg+xml" data={scalesRocketRight} className="scalesRocketRight" />
            <object type="image/svg+xml" data={rocket} className="rocket" />
        </div>
        <object type="image/svg+xml" data={stoneRocket} className="stone" />
        <object type="image/svg+xml" data={lineRocket} className="line" />
    </div>
}

export default AnimateRocket