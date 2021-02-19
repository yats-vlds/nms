import React from 'react'
import yog from "../assets/yog.svg"
import "./Expert.css"
import AnimateRocket from "./AnimateRocket";
import AnimateHorse from "./AnimateHorse";


const Expert = () => {
    return (
        <div className="expert">
            <div className="container">
                <div className="row expert-row">
                    <div className="col-6 expertLeft">
                        <p>
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

                <div className="row expert-row">
                    <div className="col-6 expertLeft">
                        <h1 className="expertTitle">
                            Your Project Path
                        </h1>
                        <p>
                            No matter what type of your work you do, NMS
                            customized software development will fulfill your needs.
                        </p>
                    </div>
                    <div className="col-6 expertRight">
                            <img src={yog} alt="yog" className="img-fluid" />
                    </div>
                </div>

                <div className="row expert-row">
                    <div className="col-6 expertLeft">
                        <AnimateHorse />
                    </div>
                    <div className="col-6 expertRight">
                        <h1 className="expertTitle">
                            Ideation and evaluation
                                              of your business needs
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
                        <p>
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
