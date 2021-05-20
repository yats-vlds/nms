import React from "react"
import HeaderMobile from "../componentsMobile/HeaderMobile";
import UIUXlogo from "../assets/mobile-image/UIUXLOGO.svg"
import ui from "../assets/mobile-image/ui.svg"
import uiFinger from "../assets/mobile-image/uiFinger.svg"
import uxdesign from "../assets/mobile-image/ux-design.svg"
import figma from "../assets/mobile-image/fig.svg"
import sketch from "../assets/mobile-image/sketch.svg"
import invision from "../assets/mobile-image/invision.svg"
import wireframe from "../assets/mobile-image/wireframecc.svg"
import ps from "../assets/mobile-image/photoshop-cc.svg"
import ilustrator from "../assets/mobile-image/adobe-illustrator-cs6.svg"
import id from "../assets/mobile-image/indesign-cc.svg"
import ae from "../assets/mobile-image/after-effects-2019.svg"
import adobePremiere from "../assets/mobile-image/premiere-cc.svg"
import webflow from "../assets/mobile-image/Webflow.svg"
import FormMobile from "../componentsMobile/FormMobile";
import FooterMobile from "../componentsMobile/FooterMobile";
import messageForOpenForm from "../assets/mobile-image/messageForOpenForm.svg";
import {Link} from "react-router-dom";

const UIUXMobile = () => {
    return (
        <>
            <img src={messageForOpenForm} className="messageForOpenForm"/>
            <HeaderMobile/>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center beforeHeader">
                    <div className="col-1">
                        <Link to="/" className="linkInExpertise">
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="col-11">
                        <h1 className="bannerMobile__titleTwo display-3 text-center">UI/UX DESIGN SERVICES</h1>
                    </div>
                </div>
            </div>
            <img src={UIUXlogo} className="imgHomeForLinkInMobileUIUX"/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="textForLinkInMobile">
                            You never have a second chance to make a first impression! We design products and services
                            that people really enjoy and are truly happy to pay for. NMS designers and engineers help
                            you to improve your users experience and to generate growth for your business following the
                            recent development trends.
                        </h6>
                        <img src={ui} className="smallIconForLinkInMobile"/>
                        <h6 className="textForLinkInMobile">
                            The high quality user interface design builds strong emotional bonds between businesses and
                            customers through appealing visual designs and memorable brand experiences around software
                            solutions. An accessible and impressive design is a powerful tool for fast company growth
                            touching emotions and ultra-personalize the customer`s behavior.
                        </h6>
                        <img src={uiFinger} className="smallIconForLinkInMobile"/>
                        <h6 className="textForLinkInMobile">
                            User experience design covers how end-users interact with a software. All include how they
                            ‘feel’ and how this relates to using a service or buying a product. The entire interactive
                            environment helps the end-users to respond to the product elements and features, including
                            written and visual content, building a successful customer experience model.
                        </h6>
                        <img src={uxdesign} className="smallIconForLinkInMobile"/>
                        <h6 className="textForLinkInMobile">
                            NMS Team applies a full range of UI/UX design services to assist you in efficient customer
                            acquisition and retention strategies helping brands to create genuine and memorable
                            identities that engage, excite, and build trust with your company or product. Showcase your
                            brand and exceed user expectations with our UI/UX design and creative services:
                        </h6>
                        <ul>
                            <h4>What we do:</h4>
                            <li>
                                Graphic Design
                            </li>
                            <li>
                                Brand/Logo Design
                            </li>
                            <li>
                                UX/UI Audit
                            </li>
                            <li>
                                UX/UI Design
                            </li>
                            <li>
                                Research & Prototyping
                            </li>
                            <li>
                                Interaction Design
                            </li>
                            <li>
                                Page Layouts and Wireframing
                            </li>
                            <li>
                                Mobile Ui/UX Design
                            </li>
                            <li>
                                UI/UX Web Design
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="technologiesMobile">
                <div className="container">
                    <h4 className="titleForLinkInMobile">Instruments</h4>
                    <div className="row">
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={figma} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">Figma</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={sketch} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">Sketch</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={invision} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">Invision Studio</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={webflow} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">Webflow</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={wireframe} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">Wireframe</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={ps} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">PS</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={ilustrator} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">Illustrator</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={id} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">ID</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={ae} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">After Effects</h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="frontendDiv__element">
                                <img src={adobePremiere} className="frontendDiv__img"/>
                                <h6 className="frontendDiv__elementTitle">Adobe Premiere</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-2">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="col-10">
                        <h1 className="bannerMobile__titleTwo display-3 pt-2">
                            <Link to="/works" className="linkInExpertise">
                                See cases <i
                                className="bi bi-youtube"/>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
            <FormMobile/>
            <FooterMobile/>
        </>
    )
}

export default UIUXMobile
