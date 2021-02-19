import React from 'react'
import "./Footer.css"
import nmsDev from "../assets/nmsdev.svg"
import iconWhatsApp from "../assets/iconWhatsApp.png"
import iconViber from "../assets/iconViber.png"
import iconTelegram from "../assets/iconTelegram.png"

const Footer = ({id}) => {
    return (
        <>
            <div className="footer" id={id}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={nmsDev} class="img-fluid"/>
                            <h2>Team based in Kyiv, Ukraine</h2>
                            <div className="footer__contacts">
                                <h1>Contact us now</h1>
                                <p><strong>Tel.:</strong>+38 090 000 00 00</p>
                                <p><strong>Mail.:</strong>dev.nms@gmail.com</p>
                            </div>
                            <div className="icons">
                                <img src={iconWhatsApp}/>
                                <img src={iconViber}/>
                                <img src={iconTelegram}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="hr">*/}
            {/*    <div className="container">*/}
            {/*        <p className="footer_afterHr">© NMS 2021</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default Footer
