import React, {useState} from 'react'
import "./FormRequest.css"
import skrepka from "../assets/skrepka.svg"
import fromPryam1 from "../assets/formPryam1.svg"
import fromPryam2 from "../assets/fromPryam2.png"
import fromPryam3 from "../assets/formPryam3.svg"
import {JsonLd} from "react-schemaorg";
import {isSafari} from "react-device-detect";
// import emailjs from 'emailjs-com'

const FormRequest = () => {
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
    //
    let sendEmail = (e) => {
        //     e.preventDefault()
        //     emailjs.sendForm('service_zkzewgm', 'template_9iytv3u', e.target, 'user_TbiCItkUAWqX6cvRx50Bn')
        //         .then((result) => {
        //             console.log(result.text);
        //             setEllipse(!ellipse)
        //         }, (error) => {
        //             console.log(error.text);
        //         });
    }
    return (
        <div className="formRequest">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            isSafari ?
                                <div className="form-header-title">
                                    <h2 className="from-pryam4Safari text-center">{formRequestDataText.titleStart}
                                        <br/>
                                        {formRequestDataText.titleEnd}</h2>
                                </div>
                                :
                            <div className="form-header-title">
                            <FormRequestSchema formRequestDataText={formRequestDataText}/>
                        {/*<img src={fromPryam1} className="from-pryam1" loading="lazy"/>*/}
                        {/*<img src={fromPryam2} className="from-pryam2" loading="lazy"/>*/}
                            <img src={fromPryam3} className="from-pryam1" loading="lazy"/>
                            <h2 className="from-pryam4 text-center">{formRequestDataText.titleStart}
                            <br/>
                        {formRequestDataText.titleEnd}</h2>
                            </div>
                        }
                        <div className="form-request">
                            <div className="card justify-content-center">
                                <div className="form justify-content-center">
                                    <form className="form-input" onSubmit={sendEmail}>
                                        <input type="text" className="input" placeholder="Name" name="to_name"/>
                                        <input type="email" className="input" placeholder="Email" name="to_email"/>
                                        <textarea rows="10" cols="45" name="text" placeholder="Message" name="message"/>
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
                                            Start now
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
        </div>
    )
}

export default FormRequest
