import React, {useState} from "react"
import "./FormMobile.css"
import skrepka from "../assets/skrepka.svg";
import button from "../assets/mobile-image/button.svg";
import Popup from "./Popup";
import {toast} from "react-toastify";
import emailjs, {send} from "emailjs-com";

const FormMobile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [textarea, setTextarea] = useState('');
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
        <div className="formMobile">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form className="formMobile__element" onSubmit={sendEmail}>
                            <h3 className="popup__title">Start your product</h3>
                            <h3 className="popup__title">development right now!</h3>
                            <input className="input__popup" type="text" placeholder="Name" value={name}
                                   onChange={e => setName(e.target.value)}/>
                            <input className="input__popup" type="text" placeholder="Email" value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                            <textarea className="textarea__popup" rows="1" placeholder="Please describe your project here" value={textarea}
                                      onChange={e => setTextarea(e.target.value)}/>
                            <img src={skrepka} alt="" className="skrepka__img" loading="lazy"/>
                            <button className="btnMobile-starProject btnInPopup" id="footerMobileContacts">Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormMobile
