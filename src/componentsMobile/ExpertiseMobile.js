import React from "react"
import "./ExpertiseMobile.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ExpertiseMobile = () => {
    return (
        <div className="expertise">
            <div className="container">
                <h1 className="expertise__titleOne display-4">Expertise</h1>
                <h4 className="expertise__titleTwo"><i className="bi bi-caret-right-fill text-white"/>Custom Software
                    Development <i className="bi bi-caret-down-square-fill text-white" /></h4>
                <h4 className="expertise__titleTwo"><i className="bi bi-caret-right-fill text-white"/>
                    Web Development <i className="bi bi-caret-down-square-fill text-white" /></h4>
                <h4 className="expertise__titleTwo"><i className="bi bi-caret-right-fill text-white"/>UI/UX Design
                    Services <i className="bi bi-caret-down-square-fill text-white" /></h4>
            </div>
        </div>
    )
}

export default ExpertiseMobile
