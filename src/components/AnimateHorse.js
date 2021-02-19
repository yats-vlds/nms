import React from "react"
import "./AnimateHorse.css"
import shakhamatyTable from "../assets/шахматы (1).svg"
import kon from "../assets/chessHorse.svg"
import kind from "../assets/chessKind.svg"


const AnimateHorse = (props) => {
    return <div style={{display: "flex"}}>
        <object type="image/svg+xml" data={shakhamatyTable} className="table"/>
        <object type="image/svg+xml" data={kon} className="kon"/>
        <object type="image/svg+xml" data={kind} className="kind" />
    </div>
}

export default AnimateHorse