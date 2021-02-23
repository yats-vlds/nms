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
            <object type="image/svg+xml" data={scalesRocket} className="scalesRocket" loading="lazy" />
            <object type="image/svg+xml" data={scalesRocketRight} className="scalesRocketRight" loading="lazy" />
            <object type="image/svg+xml" data={rocket} className="rocket" loading="lazy" />
        </div>
        <object type="image/svg+xml" data={stoneRocket} className="stone" loading="lazy" />
        <object type="image/svg+xml" data={lineRocket} className="line" loading="lazy" />
    </div>
}

export default AnimateRocket