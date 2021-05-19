import React from "react"
import HeaderMobile from "../componentsMobile/HeaderMobile";
import WebDevelopment from "../assets/mobile-image/WebDevelopment.svg";
import graphdesign from "../assets/mobile-image/graphic-design.svg";
import seo from "../assets/mobile-image/seo.svg";
import targer from "../assets/mobile-image/target.svg";
import js from "../assets/mobile-image/TECH_JS.svg";
import ts from "../assets/mobile-image/TECH_TS.svg";
import php from "../assets/mobile-image/TECH_PHP.svg";
import css from "../assets/mobile-image/TECH_CSS.svg";
import wordpress from "../assets/mobile-image/wordpress.svg"
import tilda from "../assets/mobile-image/tilda.svg"
import shopify from "../assets/mobile-image/shopify.svg"
import drupal from "../assets/mobile-image/drupal.svg"
import FormMobile from "../componentsMobile/FormMobile";
import FooterMobile from "../componentsMobile/FooterMobile";
import "../pagesMobile/WebDevelopment.css"
import messageForOpenForm from "../assets/mobile-image/messageForOpenForm.svg";

const WebDevelopmentMobile = () => {
    return (
        <>
            <img src={messageForOpenForm} className="messageForOpenForm"/>
            <HeaderMobile/>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center beforeHeader">
                    <div className="col-1">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="col-11">
                        <h1 className="bannerMobile__titleTwo display-3" style={{textAlign: "center"}}>WEB DEVELOPMENT</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <img src={WebDevelopment} className="imgHomeForLinkInMobile"/>
                    </div>
                    <div className="col-12">
                        <h6 className="textForLinkInMobile">
                            Achieve your business goals by applying the right professional web development services. NMS
                            Team helps businesses to make anything from a simple content management system and
                            information landing page to complex custom web apps and ecommerce web development. Our aim
                            is to create simple, user-friendly websites that serve your company as an instrument to win
                            more customers.
                        </h6>
                        <img src={graphdesign} className="smallIconForLinkInMobile"/>
                        <h6 className="textForLinkInMobile">
                            A good web solution with properly selected web technology helps its users find what they are
                            looking for with a single click. An understandable menu, simple navigation, “F-pattern”
                            content layout, good website architecture, breadcrumbs, dropdowns, clickable items - every
                            single detail is one step closer to the web product that users will love.
                        </h6>
                        <img src={seo} className="smallIconForLinkInMobile"/>
                        <h6 className="textForLinkInMobile">
                            And don't forget about search engine results (SEO) which are crucial in new customer
                            acquisition. NMS Team could fully assist you in custom web development that also assures
                            your visibility while being suitable for crawling and indexation.
                        </h6>
                        <img src={targer} className="smallIconForLinkInMobile"/>
                        <h6 className="textForLinkInMobile">
                            We work with all modern browsers and devices implementing the best technologies and
                            practices to make our web solutions device-friendly. NMS Team helps to create real value for
                            your users through the “intuitive navigation” approach supporting you in a full-stack web
                            development journey (frontend web development and backend web development).
                        </h6>
                    </div>
                </div>
            </div>
            <div className="technologiesMobile">
                <div className="container">
                    <h4 className="titleForLinkInMobile">Technologies</h4>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4">
                                    <div className="frontendDiv__element">
                                        <img src={js} className="frontendDiv__img"/>
                                        <h6 className="frontendDiv__elementTitle">JavaScript (ReactJS Web Development)</h6>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="frontendDiv__element">
                                        <img src={ts} className="frontendDiv__img"/>
                                        <h6 className="frontendDiv__elementTitle">TypeScript (AngularJS Web Development)</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="frontendDiv__element">
                                        <img src={php} className="frontendDiv__img"/>
                                        <h6 className="frontendDiv__elementTitle">PHP(Laravel Web Development)</h6>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="frontendDiv__element">
                                        <img src={css} className="frontendDiv__img"/>
                                        <h6 className="frontendDiv__elementTitle">CSS /HTML (Web Development)</h6>
                                    </div>
                                </div>
                            </div>
                            <h5 className="d-flex align-items-center technologiesMobileTitle" style={{fontWeight: "bold"}}>Platforms</h5>
                            <div className="frontendDiv">
                                <div className="frontendDiv__element">
                                    <img src={wordpress} className="frontendDiv__img"/>
                                    <h6 className="frontendDiv__elementTitle">Wordpress</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={tilda} className="frontendDiv__img"/>
                                    <h6 className="frontendDiv__elementTitle">Tilda</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={shopify} className="frontendDiv__img"/>
                                    <h6 className="frontendDiv__elementTitle">Shopify</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={drupal} className="frontendDiv__img"/>
                                    <h6 className="frontendDiv__elementTitle">Drupal</h6>
                                </div>
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
                        <h1 className="bannerMobile__titleTwo display-3 pt-2">See cases <i className="bi bi-youtube"/>
                        </h1>
                    </div>
                </div>
            </div>
            <FormMobile/>
            <FooterMobile/>
        </>
    )
}

export default WebDevelopmentMobile
