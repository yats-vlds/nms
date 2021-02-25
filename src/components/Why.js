import React from 'react'
import "./WhyMe.css"
import background from "../assets/back.svg"
import karher from "../assets/karher.svg"
import lactel from "../assets/lactel.png"
import danfos from "../assets/danfos.svg"
import goprint from "../assets/goprint.png"
import ukrtelecom from "../assets/ukrtelecom.png"
import karcher from "../assets/karher.svg";
import danfoss from "../assets/logo/danfoss.svg";
import ct from "../assets/logo/CT.svg";
import goPrint from "../assets/logo/go_print.svg";
import inMore from "../assets/logo/InMore.svg";
import listery from "../assets/logo/Listery.svg";
import ukt from "../assets/logo/UKT.svg";
import total from "../assets/logo/Total.svg";
import lactalis from "../assets/logo/lactalis.svg";


const Why = ({id}) => {
    return (
        <div className="why__me" id={id}>
            <div className="why__meSloy">
                <div className="row why_meContent">
                    <div className="col-6 why__meContentLeft">
                        <div className="clip-path">
                            <div className="logo__container">
                                <img src={danfoss} className="logo__style danfoss"/>
                                <img src={ct} className="logo__style ct"/>
                                <img src={ukt} className="logo__style ukt"/>
                                <img src={lactalis} className="logo__style lactalis"/>
                                <img src={goPrint} className="logo__style goprint"/>
                                <img src={inMore} className="logo__style inmore"/>
                                <img src={listery} className="logo__style listery"/>
                                <img src={total} className="logo__style total"/>
                            </div>
                        </div>
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
                <img src={background} alt="" className="why__meImageBack" loading="lazy"/>
            </div>
        </div>
    )
}

export default Why
