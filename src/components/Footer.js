import React from 'react'
import "./Footer.css"
import nmsDev from "../assets/nmsdev.svg"
import iconWhatsApp from "../assets/iconWhatsApp.png"
import iconViber from "../assets/iconViber.png"
import iconTelegram from "../assets/iconTelegram.png"
import LazyLoad from "react-lazy-load"

const Footer = ({id}) => {
    return (
        <>
            <div className="footer" id={id}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={nmsDev} class="footer-image" loading="lazy"/>
                            <h4 className="footer__location">Team based in Kyiv, Ukraine</h4>
                            <div className="footer__contacts">
                                <h1 className="footer__contactsTitle">Contact us now</h1>
                                <p className="footer__contactsText"><strong>Tel.:</strong>+38 090 000 00 00</p>
                                <p className="footer__contactsText"><strong>Mail.:</strong>dev.nms@gmail.com</p>
                            </div>
                            <div className="icons">
                                    <img src={iconWhatsApp} className="iconSize" loading="lazy"/>
                                    <img src={iconViber} className="iconSize" loading="lazy"/>
                                    <img src={iconTelegram} className="iconSize" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr">
                <div className="container">
                    <p className="footer_afterHr">© NMS 2021</p>
                </div>
            </div>
        </>
    )
}

export default Footer
