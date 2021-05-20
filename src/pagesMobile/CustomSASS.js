import React, {useState} from "react"
import HeaderMobile from "../componentsMobile/HeaderMobile";
import CustomSaASSImage from "../assets/mobile-image/customsass.svg"
import handSnake from "../assets/mobile-image/handSnake.svg"
import rocketCustom from "../assets/mobile-image/rocketCustom.svg"
import house from "../assets/mobile-image/house.svg"
import react from "../assets/mobile-image/TECH_REACT.svg"
import rn from "../assets/mobile-image/TECH_RN.svg"
import ts from "../assets/mobile-image/TECH_TS.svg"
import node from "../assets/mobile-image/TECH_NODE.svg"
import express from "../assets/mobile-image/TECH_EXPRESS.svg"
import sql from "../assets/mobile-image/TECH_SQL.svg"
import postgres from "../assets/mobile-image/TECH_POSTGRES.svg"
import mongo from "../assets/mobile-image/TECH_MONGO.svg"
import php from "../assets/mobile-image/TECH_PHP.svg"
import python from "../assets/mobile-image/TECH_PYTHON.svg"
import nextjs from "../assets/mobile-image/TECH_Next.svg"
import "./CustomSASS.css"
import FormMobile from "../componentsMobile/FormMobile";
import FooterMobile from "../componentsMobile/FooterMobile";
import messageForOpenForm from "../assets/mobile-image/messageForOpenForm.svg";
import {Link} from "react-router-dom";
import Popup from "../componentsMobile/Popup";
import skrepka from "../assets/skrepka.svg";
import button from "../assets/mobile-image/button.svg";
import {toast} from "react-toastify";
import emailjs from "emailjs-com";

const CustomSASS = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [textarea, setTextarea] = useState('');

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    let sendEmail = (e) => {
        e.preventDefault()
        if (name === '' || email === '' || textarea === '') {
            return toast.error('😉All fields must be fill', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        emailjs.sendForm('service_zkzewgm', 'template_9iytv3u', e.target, 'user_TbiCItkUAWqX6cvRx50Bn')
            .then((result) => {
                setName('')
                setEmail('')
                setTextarea('')
                toast.success('😉Thank you mister a good job', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                togglePopup()

            }, (error) => {
                toast.error('Network error', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }
    return (
        <>
            <img src={messageForOpenForm} className="messageForOpenForm" onClick={togglePopup}/>
            <HeaderMobile/>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center beforeHeader">
                    <div className="col-1">
                        <Link to="/" className="linkInExpertise">
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="col-11">
                        <h1 className="bannerMobile__titleTwo display-3 text-center">CUSTOM SAAS</h1>
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
            </div>
            <div className="technologiesMobile">
                <div className="container">
                    <h4 className="titleForLinkInMobile">Technologies</h4>
                    <div className="row">
                        <div className="col-12">
                            <h5 className="d-flex align-items-center technologiesMobileTitle"><i
                                className="bi bi-circle-fill technologiesMobileSubTitle"></i>&nbsp;&nbsp;Front End:</h5>
                            <div className="frontendDiv">
                                <div className="frontendDiv__element">
                                    <img src={react} className="frontendDiv__img"/>
                                    <h6>React.js</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={rn} className="frontendDiv__img"/>
                                    <h6>React Native</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={nextjs} className="frontendDiv__img"/>
                                    <h6>Next.js</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={ts} className="frontendDiv__img"/>
                                    <h6>TypeScript</h6>
                                </div>
                            </div>
                            <h5 className="d-flex align-items-center technologiesMobileTitle"><i
                                className="bi bi-circle-fill technologiesMobileSubTitle"></i>&nbsp;&nbsp;Back End:</h5>
                            <div className="frontendDiv">
                                <div className="frontendDiv__element">
                                    <img src={node} className="frontendDiv__img"/>
                                    <h6>Node.js</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={express} className="frontendDiv__img"/>
                                    <h6>Express</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={php} className="frontendDiv__img"/>
                                    <h6>PHP</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={python} className="frontendDiv__img"/>
                                    <h6>Python</h6>
                                </div>
                            </div>
                            <h5 className="d-flex align-items-center technologiesMobileTitle"><i
                                className="bi bi-circle-fill technologiesMobileSubTitle"></i>&nbsp;&nbsp;Databases:</h5>
                            <div className="frontendDiv">
                                <div className="frontendDiv__element">
                                    <img src={postgres} className="frontendDiv__img"/>
                                    <h6>Postgres</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={mongo} className="frontendDiv__img"/>
                                    <h6>Mongo</h6>
                                </div>
                                <div className="frontendDiv__element">
                                    <img src={sql} className="frontendDiv__img"/>
                                    <h6>SQL DBs</h6>
                                </div>
                                <div className="frontendDiv__element" style={{opacity: 0}}>
                                    <img src={""} className="frontendDiv__img"/>
                                    <h6></h6>
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
                        <h1 className="bannerMobile__titleTwo display-3 pt-2">
                            <Link to="/works" className="linkInExpertise">
                                See cases <i className="bi bi-youtube"/>
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
            <FormMobile/>
            <FooterMobile/>
            {isOpen && <Popup
                content={
                    <form onSubmit={sendEmail} style={{width: "100%"}}>
                        <div className="popup__modal">
                            <h3 className="popup__title">Start your product</h3>
                            <h3 className="popup__title">development right now!</h3>
                            <input className="input__popup" type="text" placeholder="Name" value={name}
                                   onChange={e => setName(e.target.value)}/>
                            <input className="input__popup" type="text" placeholder="Email" value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                            <textarea className="textarea__popup" rows="1" placeholder="Message" value={textarea}
                                      onChange={e => setTextarea(e.target.value)}/>
                            <img src={skrepka} alt="" className="skrepka__img" loading="lazy"/>
                            <button className="btnMobile-starProject btnInPopup">Start project
                            </button>
                        </div>
                    </form>}
                handleClose={togglePopup}
            />}
        </>
    )
}

export default CustomSASS
