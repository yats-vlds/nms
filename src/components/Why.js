import React from 'react'
import "./WhyMe.css"
import background from "../assets/back.svg"
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
                                <img src={danfoss} className="logo__style danfoss" loading="lazy"/>
                                <img src={ct} className="logo__style ct" loading="lazy" />
                                <img src={ukt} className="logo__style ukt" loading="lazy" />
                                <img src={lactalis} className="logo__style lactalis" loading="lazy" />
                                <img src={goPrint} className="logo__style goprint" loading="lazy" />
                                <img src={inMore} className="logo__style inmore" loading="lazy" />
                                <img src={listery} className="logo__style listery" loading="lazy" />
                                <img src={total} className="logo__style total" loading="lazy" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 why__meContentRight">
                        <h1 className="whyme__titleFirst">Because they trust</h1>
                        <h2 className="whyme__title">Cost-efficient</h2>
                        <p className="whyme__text">Talented Team based in the Eastern Europe</p>
                        <h2 className="whyme__title">Solution orriented</h2>
                        <p className="whyme__text">Mathing your  business needs</p>
                        <h2 className="whyme__title">Professional</h2>
                        <p className="whyme__text"> Skilful developers working with a wide range of technologies</p>
                    </div>
                </div>
                <img src={background} alt="" className="why__meImageBack" loading="lazy"/>
            </div>
        </div>
    )
}

export default Why
