import React, {useState} from "react"
import CustomSaASSImage from "../assets/mobile-image/customsass.svg";
import HeaderMobile from "../componentsMobile/HeaderMobile";
import "./WorkMobile.css"
import Slider from "react-slick";
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import ct2 from "../assets/CT-900x1025(2).png";
import ct3 from "../assets/CT-900x1025-3.png";
import goPrintTwo from "../assets/GoPrint_900x1025.png";
import goPrintThree from "../assets/GoPrint_900x1025-2.png";
import goPrintFour from "../assets/GoPrint_900x1025-3.png";
import UIUXlogo from "../assets/mobile-image/UIUXLOGO.svg";
import GoPrintDesign1 from "../assets/DIZ-900x1025-01.png";
import GoPrintDesign2 from "../assets/DIZ-900x1025-02.png";
import GoPrintDesign3 from "../assets/DIZ-900x1025-03.png";
import GoPrintDesign4 from "../assets/DIZ-900x1025-04.png";
import UkrTelecom1 from "../assets/UKT-900x1025-01.png";
import UkrTelecom2 from "../assets/UKT-900x1025-02.png";
import UkrTelecom3 from "../assets/UKT-900x1025-03.png";
import InMoreDesign1 from "../assets/InMoreDIZ-900x1025-01.png";
import InMoreDesign2 from "../assets/InMoreDIZ-900x1025-02.png";
import InMoreDesign3 from "../assets/InMoreDIZ-900x1025-03.png";
import danfosHeatSelector1 from "../assets/DanHS-900x1025.png";
import danfosHeatSelector2 from "../assets/DanHS-900x1025-2.png";
import danfosHeatSelector3 from "../assets/DanHS-900x1025-3.png";
import danfosHeatSelector4 from "../assets/DanHS-900x1025-4.png";
import listery from "../assets/Li-900x1025.png";
import favvel from "../assets/FA-900x1025.png";
import favvel2 from "../assets/FA-900x1025-2.png";
import danfosEasyPlan1 from "../assets/2-DanVEP-900x1025.png";
import danfosEasyPlan2 from "../assets/DanVEP-900x1025.png";
import danfosEasyPlan3 from "../assets/DanVEP-900x1025-2.png";
import danfosEasyPlan4 from "../assets/DanVEP-900x1025-3.png";
import total from "../assets/total-900x1025-01.png";
import total2 from "../assets/total-900x1025-02.png";
import total3 from "../assets/total-900x1025-03.png";
import loko from "../assets/LocoMoco-900x1025-01.png";
import loko2 from "../assets/LocoMoco-900x1025-02.png";
import loko3 from "../assets/LocoMoco-900x1025-03.png";
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
                        <Link className="linkInExpertise" to="/">
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="col-11">
                        <h1 className="bannerMobile__titleTwo display-3" style={{textAlign: "center"}}>WORKS</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <img src={CustomSaASSImage} className="imgHomeForLinkInMobile"/>
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
                            <h2 className="workMobile__titleTwo display-5">Professional Web Development Services</h2>
                        </div>
                    </div>
                </div>
                <SliderMobileTwo/>
            </div>
            <div className="div">
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
