import React from 'react'
import yog from "../assets/yog.svg"
import "./Expert.css"
import AnimateRocket from "./AnimateRocket";
import AnimateHorse from "./AnimateHorse";


const Expert = () => {
    return (
        <div className="expert">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p>
                            No matter what type of your work you do, NMS
                            customized software development will fulfill your needs.
                        </p>
                    </div>
                    <div className="col-6">
                        <h1>
                            Your Project Path
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <h1>
                            Your Project Path
                        </h1>
                        <p>
                            No matter what type of your work you do, NMS
                            customized software development will fulfill your needs.
                        </p>
                    </div>
                    <div className="col-6 sectionImg">
                            <img src={yog} alt="yog" className="img-fluid" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 sectionImg">
                        <AnimateRocket />
                    </div>
                    <div className="col-6">
                        <h1>
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

                <div className="row">
                    <div className="col-6">
                        <h1>
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
                    <div className="col-6 sectionImg">
                       {/*<AnimateHorse />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expert
