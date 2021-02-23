import React from 'react'
import yog from "../assets/yog.svg"
import "./Expert.css"
import AnimateRocket from "./AnimateRocket";
import AnimateHorse from "./AnimateHorse";


const Expert = () => {
    return (
        <div className="expert">
            <div className="container">
                <div className="row expert-row expertOneRow">
                    <div className="col-6 expertLeft">
                        <p className="expertText">
                            No matter what type of your work you do, NMS
                            customized software development will fulfill your needs.
                        </p>
                    </div>
                    <div className="col-6 expertRight">
                        <h1 className="expertTitleFirst">
                            Your Project Path
                        </h1>
                    </div>
                </div>

                <div className="row expert-row expertTwoRow">
                    <div className="col-6 expertLeft">
                        <h1 className="expertTitle">
                            Ideation and evaluation
                            of your business needs
                        </h1>
                        <p className="expertText">
                            No matter what type of your work you do, NMS customized
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needs.
                        </p>
                    </div>
                    <div className="col-6 expertRight">
                        <img src={yog} alt="yog" className="img-fluid img-yog" loading="lazy"/>
                    </div>
                </div>

                <div className="row expert-row expertRocket expertThreeRow">
                    <div className="col-6 expertLeft">
                            <AnimateRocket />
                    </div>
                    <div className="col-6 expertRight">
                        <h1 className="expertTitleRight">
                            Optimal cost and resources
                            estimation vis requirements
                            analysis
                        </h1>
                        <p>
                            No matter what type of your work you do, NMS customized
                                             software development will fulfill your needs. No matter
                                            what type of your work you do, NMS customized software
                                      development will fulfill your needs.
                        </p>
                    </div>
                </div>

                <div className="row expert-row expertLastRow">
                    <div className="col-6 expertLeft">
                        <h1 className="expertTitle">
                            Creation of an
                                    Effective Action Plan
                        </h1>
                        <p className="expertText">
                            No matter what type of your work you do, NMS customized
                            software development will fulfill your needs. No matter
                            what type of your work you do, NMS customized software
                            development will fulfill your needs.
                        </p>
                    </div>
                    <div className="col-6 expertRight">
                       <AnimateHorse />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expert
