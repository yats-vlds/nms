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
import head from "../assets/Head.svg"
import agri from "../assets/logo/AGRII.svg"
import {JsonLd} from "react-schemaorg";



const Why = ({id}) => {
    const WhySchema = ({whyDataText}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'WhySchema',
                    titleOne:  whyDataText.titleOne,
                    titleTwoTitle: whyDataText.titleTwoTitle,
                    titleTwoText: whyDataText.titleTwoText,
                    titleThreeTitle: whyDataText.titleThreeTitle,
                    titleThreeText: whyDataText.titleThreeText,
                    titleFourTitle: whyDataText.titleFourTitle,
                    titleFourText: whyDataText.titleFourText
                }}
            />
        )
    }
    const whyDataText = {
        titleOne: "Because they trust",
        titleTwoTitle: "Cost-efficient",
        titleTwoText: "Talented Team based in the Eastern Europe",
        titleThreeTitle: "Solution orriented",
        titleThreeText: "Mathing your business needs",
        titleFourTitle: "Professional",
        titleFourText: "Skilful developers working with a wide range of technologies"
    }
    return (
        <div className="why__me" id={id}>
            <div className="why__meSloy">
                <div className="why__Row">
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
                                    <img src={head} className="logo__style head" loading="lazy" />
                                    <img src={agri} className="logo__style agri" loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 why__meContentRight">
                            <WhySchema whyDataText={whyDataText} />
                            <h1 className="whyme__titleFirst">{whyDataText.titleOne}</h1>
                            <h2 className="whyme__title">{whyDataText.titleTwoTitle}</h2>
                            <p className="whyme__text">{whyDataText.titleTwoText}</p>
                            <h2 className="whyme__title">{whyDataText.titleThreeTitle}</h2>
                            <p className="whyme__text">{whyDataText.titleThreeText}</p>
                            <h2 className="whyme__title">{whyDataText.titleFourTitle}</h2>
                            <p className="whyme__text">{whyDataText.titleFourText}</p>
                        </div>
                    </div>
                </div>
                <img src={background} alt="" className="why__meImageBack" loading="lazy"/>
            </div>
        </div>
    )
}

export default Why
