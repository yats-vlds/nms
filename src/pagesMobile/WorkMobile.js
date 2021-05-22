import React, {useState} from "react"
import WorksImageHome from "../assets/mobile-image/worksHomeImage.svg"
import HeaderMobile from "../componentsMobile/HeaderMobile";
import "./WorkMobile.css"
import SliderMobileOne from "../componentsMobile/SliderMobileOne";
import SliderMobileTwo from "../componentsMobile/SliderMobileTwo";
import SliderMobileThree from "../componentsMobile/SliderMobileThree";
import FormMobile from "../componentsMobile/FormMobile";
import Footer from "../components/Footer";
import FooterMobile from "../componentsMobile/FooterMobile";
import {Link} from "react-router-dom";
import messageForOpenForm from "../assets/mobile-image/messageForOpenForm.svg";
import Popup from "../componentsMobile/Popup";
import skrepka from "../assets/skrepka.svg";
import button from "../assets/mobile-image/button.svg";
import {toast} from "react-toastify";
import emailjs from "emailjs-com";

const WorkMobile = () => {
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
            return toast.error('All fields must be fill', {
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
                        <Link className="linkInExpertise" to="/">
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="col-11">
                        <h1 className="bannerMobile__titleTwo display-3" style={{textAlign: "center"}}>WORKS</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <img src={WorksImageHome} className="imgHomeForLinkInMobileWorks webDevelopmentIcon"/>
                    </div>
                    <div className="col-12">
                        <h2 className="workMobile__titleTwo display-5">SaaS Development Services</h2>
                    </div>
                </div>
            </div>
            <SliderMobileOne/>
            <div className="div">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="workMobile__titleTwo">Professional Web Development Services</h2>
                        </div>
                    </div>
                </div>
                <SliderMobileTwo/>
            </div>
            <div className="divUiUx">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="workMobile__titleTwo display-5">UI/UX Design Services</h2>
                        </div>
                    </div>
                </div>
                <SliderMobileThree/>
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

export default WorkMobile
