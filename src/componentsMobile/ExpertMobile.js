import React, {useEffect, useState} from "react";
import "../componentsMobile/ExpertMobile.css"
import perfect from "../assets/mobile-image/perfect.svg"
import chess from "../assets/mobile-image/chess.svg"
import rocket from "../assets/mobile-image/rocket.svg"
import button from "../assets/mobile-image/button.svg";
import Popup from "./Popup";
import skrepka from "../assets/skrepka.svg";
import {toast, ToastContainer} from "react-toastify";
import messageForOpenForm from "../assets/mobile-image/messageForOpenForm.svg";
import emailjs from "emailjs-com";

const ExpertMobile = () => {
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
        <div className="expertMobile">
            <div className="container">
                <h2 className="expertMobile__titleOne">YOUR PROJECT PATH</h2>
                <h4 className="expertMobile__titleTwo">
                    How to drive your future Product to <span className="expertMobile__textSuccess">success</span> with
                    NMS SaaS Development Company?
                </h4>
                <div className="row">
                    <div className="col-12 expertMobile__element">
                        <div className="expertMobile__elementDivImg">
                            <img src={perfect} className="perfect__img"/>
                        </div>
                        <h2 className="expertMobile__number display-1">1</h2>
                        <h5 className="expertMobile__elementTitle">Ideation and evaluation of your business needs</h5>
                        <h6 className="expertMobile__elementText">Share your idea or tell us your needs, desired
                            functionality, business model or strategy —
                            NMS Team will evaluate it and provide you “the best match” tech picture using the latest
                            technologies and that is flexible enough for you to easily adapt down the road map.</h6>
                    </div>
                    <div className="col-12 expertMobile__element">
                        <div className="expertMobile__elementDivImg">
                            <img src={rocket}/>
                        </div>
                        <h2 className="expertMobile__number display-1">2</h2>
                        <h5 className="expertMobile__elementTitle">Optimal cost and resources estimation via
                            requirements analysis</h5>
                        <h6 className="expertMobile__elementText">Once we are on the same page regarding the software it
                            is important to make proper Time and Material Estimates which assures you cost and time
                            optimization. We are a team based on Eastern Europe that makes us very loyal and efficient
                            in the pricing policy keeping the highest standards of deliverables quality.</h6>
                    </div>
                    <div className="col-12 expertMobile__element">
                        <div className="expertMobile__elementDivImg">
                            <img src={chess}/>
                        </div>
                        <h2 className="expertMobile__number display-1">3</h2>
                        <h5 className="expertMobile__elementTitle">Creation of an Effective Action Plan</h5>
                        <h6 className="expertMobile__elementText">A management plan is what is essential at the beginning
                            of your project which goes through several well-established stages: initiation, planning,
                            execution and delivery. For each and every project we assign a dedicated team which goes
                            with you to your goals keeping timelines and operating budget regardless you are a startup
                            or an enterprise.</h6>
                    </div>
                    <div className="col-12 expertMobile__elementDivImg">
                        <button className="btnMobile-expert" onClick={togglePopup} id="partners">Start project</button>
                    </div>
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
                                    <textarea className="textarea__popup" rows="1" placeholder="Please describe your project here" value={textarea}
                                              onChange={e => setTextarea(e.target.value)}/>
                                    <img src={skrepka} alt="" className="skrepka__img" loading="lazy"/>
                                    <button className="btnMobile-starProject btnInPopup">Start project
                                    </button>
                                </div>
                            </form>}
                        handleClose={togglePopup}
                    />}
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    {/* Same as */}
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default ExpertMobile
