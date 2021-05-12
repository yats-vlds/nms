import React, {useState} from "react"
import "./BannerMobile.css"
import vectorImg from "../assets/mobile-image/vectorImg.svg"
import button from "../assets/mobile-image/button.svg"
import messageForOpenForm from "../assets/mobile-image/messageForOpenForm.svg"
import Popup from "./Popup";
import skrepka from "../assets/skrepka.svg";

const BannerMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="bannerMobile">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="bannerMobile__titleOne">CUSTOM SOFTWARE DEVELOPMENT TEAM</h3>
                        <h1 className="bannerMobile__titleTwo display-3">THE GUIDE TO DIGITAL TRANSFORMATION</h1></div>
                </div>
            </div>
            <div className="vectorImg__row">
                <img src={vectorImg} className="bannerMobile__vectorImg"/>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h5 className="bannerMobile__titleThree">
                                Find out how we build custom products from concept to live solution!
                            </h5>
                        </div>
                        <div className="col-6 divForTitleThree">
                            <button className="btnMobile-starProject" onClick={togglePopup}>Start project</button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <Popup
                content={<div className="popup__modal">
                    <h3 className="popup__title">Start your product</h3>
                    <h3 className="popup__title">development right now!</h3>
                    <input className="input__popup" type="text" placeholder="Name" value={name}
                           onChange={e => setName(e.target.value)}/>
                    <input className="input__popup" type="text" placeholder="Email" value={email}
                           onChange={e => setEmail(e.target.value)}/>
                    <textarea className="textarea__popup" rows="1" placeholder="Message" value={name}
                              onChange={e => setMessage(e.target.value)}/>
                    <img src={skrepka} alt="" className="skrepka__img" loading="lazy"/>
                                      <button className="btnMobile-starProject btnInPopup" onClick={togglePopup}>Start project</button>
                </div>}
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default BannerMobile
