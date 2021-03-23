import React from 'react'
import yog from "../assets/yog.svg"
import "./Expert.css"
import AnimateRocket from "./AnimateRocket";
import AnimateHorse from "./AnimateHorse";
import {JsonLd} from "react-schemaorg";


const Expert = () => {
    const ExpertSchema = ({expertDataText}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'ExpertSchema',
                    expertOneRowLeft: expertDataText.expertOneRowLeft,
                    expertOneRowRight: expertDataText.expertOneRowRight,
                    expertTwoRowLeftTitle: expertDataText.expertTwoRowLeftTitle,
                    expertTwoRowLeftText: expertDataText.expertTwoRowLeftText,
                    expertThreeRowRightTitle: expertDataText.expertThreeRowRightTitle,
                    expertThreeRowRightText: expertDataText.expertThreeRowRightText,
                    expertFourRowLeftTitle: expertDataText.expertFourRowLeftTitle,
                    expertFourRowLeftText: expertDataText.expertFourRowLeftText,
                }}
            />
        )
    }

    const expertDataText = {
        expertOneRowLeft: "How to drive your future Product to success with NMS SaaS Development Company?",
        expertOneRowRight: "Your Project Path",
        expertTwoRowLeftTitle: "Ideation and evaluation of your business needs",
        expertTwoRowLeftText: "Share your idea or tell us your needs, desired functionality, business model or strategy - NMS Team will evaluate it and provide you “the best match” tech picture using the latest technologies and that is flexible enough for you to easily adapt down the road map.",
        expertThreeRowRightTitle: "Optimal cost and resources estimation via requirements analysis",
        expertThreeRowRightText: "Once we are on the same page regarding the software it is important to make proper Time and Material Estimates which assures you cost and time optimization. We are a team based on Eastern Europe that makes us very loyal and efficient in the pricing policy keeping the highest standards of deliverables quality.\n" +
            "\n",
        expertFourRowLeftTitle: "Creation of an Effective Action Plan\n",
        expertFourRowLeftText: "A management plan is what is essential at the beginning of your project which goes through several well-established stages: initiation, planning, execution and delivery. For each and every project we assign a dedicated team which goes with you to your goals keeping timelines and operating budget regardless you are a startup or an enterprise.\n" +
            "\n",

    }
    return (
        <div className="expert">
            <div className="container">
                <ExpertSchema expertDataText={expertDataText} />
                <div className="row expert-row expertOneRow">
                    <div className="col-6 expertLeft expertContent">
                        <p className="expertText">
                            {expertDataText.expertOneRowLeft}
                        </p>
                    </div>
                    <div className="col-6 expertRight">
                        <h1 className="expertTitleFirst">
                            {expertDataText.expertOneRowRight}
                        </h1>
                    </div>
                </div>

                <div className="row expert-row expertTwoRow">
                    <div className="col-6 expertLeft expertContent">
                        <h1 className="expertTitle">
                            {expertDataText.expertTwoRowLeftTitle}
                        </h1>
                        <p className="expertText">
                            {expertDataText.expertTwoRowLeftText}
                        </p>
                    </div>
                    <div className="col-6 expertRight">
                        <img src={yog} alt="yog" className="img-fluid img-yog" loading="lazy"/>
                    </div>
                </div>

                <div className="row expert-row expertRocket expertThreeRow">
                    <div className="col-6 expertLeft">
                        <AnimateRocket/>
                    </div>
                    <div className="col-6 expertRight expertContent">
                        <h1 className="expertTitleRight">
                            {expertDataText.expertThreeRowRightTitle}
                        </h1>
                        <p>
                            {expertDataText.expertThreeRowRightText}
                        </p>
                    </div>
                </div>

                <div className="row expert-row expertLastRow">
                    <div className="col-6 expertLeft expertContent">
                        <h1 className="expertTitle">
                            {expertDataText.expertFourRowLeftTitle}
                        </h1>
                        <p className="expertText">
                            {expertDataText.expertFourRowLeftText}
                        </p>
                    </div>
                    <div className="col-6 expertRight">
                        <AnimateHorse/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expert
