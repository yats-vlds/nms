import React from "react"
import "./AnimateHorse.css"
import shakhamatyTable from "../assets/chess.svg"
import kon from "../assets/chessHorse.svg"
import kind from "../assets/chessKind.svg"


const AnimateHorse = () => {
    return <div className="animateHorse">
        <object type="image/svg+xml" data={shakhamatyTable} className="table"/>
        <object type="image/svg+xml" data={kon} className="kon"/>
        <object type="image/svg+xml" data={kind} className="kind" />
    </div>
}

export default AnimateHorse