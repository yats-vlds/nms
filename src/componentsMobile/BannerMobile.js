import React, {useState} from "react"
import "./BannerMobile.css"
import vectorImg from "../assets/mobile-image/vectorImg.svg"
import button from "../assets/mobile-image/button.svg"
import messageForOpenForm from "../assets/mobile-image/messageForOpenForm.svg"
import Popup from "./Popup";
import skrepka from "../assets/skrepka.svg";
import {toast, ToastContainer} from "react-toastify";
import emailjs from "emailjs-com";

const BannerMobile = () => {
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
        <div className="bannerMobile beforeHeader">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="bannerMobile__titleOne">CUSTOM SOFTWARE DEVELOPMENT TEAM</h4>
                        <h1 className="bannerMobile__titleTwo display-3">THE GUIDE TO DIGITAL TRANSFORMATION</h1></div>
                </div>
            </div>
            <div className="vectorImg__row">
                <img src={vectorImg} className="bannerMobile__vectorImg"/>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h6 className="bannerMobile__titleThree">
                                Find out how we build custom products from concept to live solution!
                            </h6>
                        </div>
                        <div className="col-6 divForTitleThree">
                            <button className="btnMobile-starProject" onClick={togglePopup}>Start project</button>
                        </div>
                    </div>
                </div>
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
            <img src={messageForOpenForm} className="messageForOpenForm" onClick={togglePopup}/>
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
    )
}

export default BannerMobile
