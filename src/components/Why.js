import React from 'react'
import "./WhyMe.css"
import background from "../assets/back.svg"
import karher from "../assets/karher.svg"
import lactel from "../assets/lactel.png"
import danfos from "../assets/danfos.svg"
import goprint from "../assets/goprint.png"
import ukrtelecom from "../assets/ukrtelecom.png"


const Why = ({id}) => {
    return (
        <div className="why__me" id={id}>
            <div className="why__meSloy">
                    <div className="row why_meContent">
                        <div className="col-6 why__meContentLeft">
                            {/*<img src={karher} className="why__meImg karcher"/>*/}
                            {/*<img src={lactel} className="why__meImg lactel"/>*/}
                            {/*<img src={danfos} className="why__meImg danfos"/>*/}
                            {/*<img src={goprint} className="why__meImg goprint"/>*/}
                            {/*<img src={ukrtelecom} className="why__meImg ukrtelecom"/>*/}
                        </div>
                        <div className="col-6 why__meContentRight">
                            <h1 className="whyme__titleFirst">Because they trust</h1>
                            <h2 className="whyme__title">Cost efficient</h2>
                            <p className="whyme__text">Talented Team based in Eastern Europe</p>
                            <h2 className="whyme__title">Solution orriented</h2>
                            <p className="whyme__text">Optimal smart to the business needs</p>
                            <h2 className="whyme__title">Professional</h2>
                            <p className="whyme__text"> Height quality developers working with
                                a wide range of technologies</p>
                        </div>
                    </div>
                    <img src={background} alt="" className="why__meImageBack"/>
            </div>
        </div>
    )
}

export default Why
