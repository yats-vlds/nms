import React from "react"
import "./AnimateHorse.css"
import shakhamatyTable from "../assets/chess.svg"
import kon from "../assets/chessHorse.svg"
import kind from "../assets/chessKind.svg"


const AnimateHorse = () => {
    return <div className="animateHorse">
        <object type="image/svg+xml" data={shakhamatyTable} className="table" loading="lazy"/>
        <object type="image/svg+xml" data={kon} className="kon" loading="lazy"/>
        <object type="image/svg+xml" data={kind} className="kind" loading="lazy" />
    </div>
}

export default AnimateHorse