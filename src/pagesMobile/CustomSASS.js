import React from "react"
import HeaderMobile from "../componentsMobile/HeaderMobile";
import CustomSaASSImage from "../assets/mobile-image/customsass.svg"
import handSnake from "../assets/mobile-image/handSnake.svg"
import rocketCustom from "../assets/mobile-image/rocketCustom.svg"
import house from "../assets/mobile-image/house.svg"
import "./CustomSASS.css"

const CustomSASS = () => {
    return (
        <>
            <HeaderMobile/>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-2">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="col-10">
                        <h1 className="bannerMobile__titleTwo display-3">CUSTOM SAAS</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <img src={CustomSaASSImage} className="imgHomeForLinkInMobile"/>
                    </div>
                    <div className="col-12">
                        <h4 className="titleForLinkInMobile">SaaS Software Development</h4>
                        <h6 className="textForLinkInMobile">
                            Software as a service (SaaS) dramatically has changed the way that many companies achieve
                            their strategic goals. With SaaS development services, NMS Team helps businesses to be
                            noticeable in comparison with their competitors and to create unique, secure, and scalable
                            solutions that fulfil all end-users’ demands and your business strategy priorities. We work
                            with the latest technologies and modern SaaS product development approaches both customizing
                            and maintaining existing SaaS products as well as developing software from scratch.
                        </h6>
                        <img src={rocketCustom} className="smallIconForLinkInMobile"/>
                        <h4 className="titleForLinkInMobile">Startups</h4>
                        <h6 className="textForLinkInMobile">
                            Whether you need to design a prototype, build a new SaaS Minimum Viable Product (MVP) or
                            improve an existing one, you need to be fast-moving. And we are here to become your trusted
                            partner! Launch your product and test hypothesis right away being within the budget
                            frameworks with our efficient SaaS development services.
                        </h6>
                        <img src={handSnake} className="smallIconForLinkInMobile"/>
                        <h4 className="titleForLinkInMobile">Small and Medium Businesses</h4>
                        <h6 className="textForLinkInMobile">
                            Being a SaaS software company we help businesses to be more efficient on a market building
                            secure and scalable SaaS products that save regular hardware spendings. We are also happy to
                            maintain, improve and integrate your current SaaS business intelligence software.
                        </h6>
                        <img src={house} className="smallIconForLinkInMobile"/>
                        <h4 className="titleForLinkInMobile">Enterprises</h4>
                        <h6 className="textForLinkInMobile">
                            Looking for digital transformation and building your SaaS enterprise software? NMS Team is
                            your expert guide to digital world. As an experienced SaaS development company, we deeply
                            understand your everyday challenges, and we know how to automate business processes and save
                            you costs via creation of the custom SaaS product crafted specifically for your company’s
                            needs:.
                        </h6>
                        <ul>
                            <li>
                                SaaS Finance Software (FinTech)
                            </li>
                            <li>
                                SaaS Human Resources (HR) Software
                            </li>
                            <li>
                                SaaS Customer Relationship Management (CRM) Software
                            </li>
                            <li>
                                Accounting SaaS
                            </li>
                            <li>
                                Project Management SaaS
                            </li>
                        </ul>
                        <h6 className="textForLinkInMobile">
                            Whether you need a custom SaaS Application Development or SaaS Web Development, Prоgressive
                            Web App or a Chatbot, we are here to be with you during this journey and optimize your SaaS
                            development costs!
                        </h6>
                    </div>
                </div>
                <div className="technologiesMobile">
                    <h4 className="titleForLinkInMobile">Technologies</h4>
                    <h5 className="d-flex align-items-center"><i className="bi bi-circle-fill technologiesMobileSubTitle"></i>&nbsp;&nbsp;Front End</h5>
                </div>
            </div>
        </>
    )
}

export default CustomSASS
