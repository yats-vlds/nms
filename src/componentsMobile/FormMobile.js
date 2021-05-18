import React, {useState} from "react"
import "./FormMobile.css"
import skrepka from "../assets/skrepka.svg";
import button from "../assets/mobile-image/button.svg";
import Popup from "./Popup";

const FormMobile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="formMobile">
            <div className="container">
                <div className="row">
                    <div className="col-12 formMobile__element">
                        <h3 className="popup__title">Start your product</h3>
                        <h3 className="popup__title">development right now!</h3>
                        <input className="input__popup" type="text" placeholder="Name" value={name}
                               onChange={e => setName(e.target.value)}/>
                        <input className="input__popup" type="text" placeholder="Email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <textarea className="textarea__popup" rows="1" placeholder="Message" value={message}
                                  onChange={e => setMessage(e.target.value)}/>
                        <img src={skrepka} alt="" className="skrepka__img" loading="lazy"/>
                        <button className="btnMobile-starProject btnInPopup">Start project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormMobile
