import React from "react"
import "./ExpertiseMobile.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

const ExpertiseMobile = () => {
    return (
        <div className="expertise" id="expertiseMobile">
            <div className="container">
                <h1 className="expertise__titleOne display-4">Expertise</h1>
                <Link className="linkInExpertise" to="/custom">
                    <h4 className="expertise__titleTwo"><i className="bi bi-caret-right-fill text-white"/>Custom
                        Software
                        Development <i className="bi bi-caret-down-square-fill text-white"/></h4>
                </Link>
                <Link className="linkInExpertise" to="/mobile-and-web"><h4 className="expertise__titleTwo" id="projectPath"><i
                    className="bi bi-caret-right-fill text-white"/>
                    Web Development <i className="bi bi-caret-down-square-fill text-white"/></h4>
                </Link>
                <Link className="linkInExpertise" to="/ui-ux"><h4 className="expertise__titleTwo pb-3"><i
                    className="bi bi-caret-right-fill text-white"/>UI/UX
                    Design
                    Services <i className="bi bi-caret-down-square-fill text-white"/></h4>
                </Link>
            </div>
        </div>
    )
}

export default ExpertiseMobile
