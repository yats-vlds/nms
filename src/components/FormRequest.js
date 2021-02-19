import React, {useState} from 'react'
import "./FormRequest.css"
import skrepka from "../assets/skrepka.svg"
import fromPryam1 from "../assets/formPryam1.svg"
import fromPryam2 from "../assets/fromPryam2.png"
import fromPryam3 from "../assets/formPryam3.svg"

const FormRequest = () => {
    const [ellipse, setEllipse] = useState(false)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="figure form-header-title">
                        <img src={fromPryam1} className="from-pryam1"/>
                        <img src={fromPryam2} className="from-pryam2"/>
                        <img src={fromPryam3} className="from-pryam3"/>
                        <h1 className="from-pryam4">Start your product development
                            right now.</h1>
                    </div>
                    <div className="form-request">
                        <div className="card">
                            <div className="form">
                                <form className="form-input">
                                    <input type="text" className="input" placeholder="Name"/>
                                    <input type="email" className="input" placeholder="Email"/>
                                    <textarea rows="10" cols="45" name="text" placeholder="Message"/>
                                    <img src={skrepka} alt="" className="form__skrepka"/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="btnForm">
                        <div className="btnForm-twoSloy">
                            <div className={ellipse ? "btn-threeSloyAfter" : "btn-threeSloyBefore"}>
                                <div className={ellipse ? "btn-fourSloyAfter" : "btn-fourSloyBefore"}>
                                    <h1 className="btn-fourSloyTitle">
                                        Start now
                                    </h1>
                                </div>
                            </div>
                            <div className={ellipse ? "ellipse-btnFormAfter" : "ellipse-btnFormBefore"} onClick={() => setEllipse(!ellipse)}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRequest
