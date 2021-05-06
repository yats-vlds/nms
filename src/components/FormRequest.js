import React, {useState} from 'react'
import "./FormRequest.css"
import skrepka from "../assets/skrepka.svg"
import fromPryam1 from "../assets/formPryam1.svg"
import fromPryam2 from "../assets/fromPryam2.png"
import fromPryam3 from "../assets/formPryam3.png"
import {JsonLd} from "react-schemaorg";
import {isSafari} from "react-device-detect";
import emailjs from 'emailjs-com'
import {toast, ToastContainer} from "react-toastify";


const FormRequest = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextarea] = useState('')
    const [ellipse, setEllipse] = useState(false)
    const FormRequestSchema = ({formRequestDataText}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'FormRequestSchema',
                    titleStart: formRequestDataText.titleStart,
                    titleEnd: formRequestDataText.titleEnd,
                }}
            />
        )
    }
    const formRequestDataText = {
        titleStart: "Start your product development",
        titleEnd: "right now."
    }

    const formRequestDataTextAfter = {
        titleStart: "Thank you mister a good",
        titleEnd: "request."
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
        <div className="formRequest">
            <div className="container">
                <div className="row">
                    <div className="col">

                            <FormRequestSchema formRequestDataText={!ellipse ? formRequestDataText : formRequestDataTextAfter }/>
                            <img src={fromPryam3} className="from-pryam1" loading="lazy"/>
                        <div className="form-request">
                            <div className="card justify-content-center">
                                <div className="form justify-content-center">
                                    <form className="form-input" onSubmit={sendEmail}>
                                        <input type="text" className="input" placeholder="Name" name="to_name" onChange={(e) => setName(e.target.value) } value={name} />
                                        <input type="text" className="input" placeholder="Email" name="to_email" onChange={(e) => setEmail(e.target.value) } value={email} />
                                        <textarea rows="10" cols="45" name="text" placeholder="Please describe your project here" name="message" onChange={(e) => setTextarea(e.target.value) } value={textarea} />
                                        <img src={skrepka} alt="" className="form__skrepka" loading="lazy"/>
                                        <input name="myFile" type="file" className="input-file"/>
                                        <input type="submit" value="Send" className="submit-form"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="btnForm">
                            <div className="btnForm-twoSloy">
                                <div className={ellipse ? "btn-threeSloyAfter" : "btn-threeSloyBefore"}>
                                    <div className={ellipse ? "btn-fourSloyAfter" : "btn-fourSloyBefore"}>
                                        <p className="btn-fourSloyTitle">
                                            {!ellipse ? "Start now" : "Thank you"}
                                        </p>
                                    </div>
                                </div>
                                <div className={ellipse ? "ellipse-btnFormAfter" : "ellipse-btnFormBefore"}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default FormRequest
