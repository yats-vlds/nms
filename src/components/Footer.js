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
                        <div className="col footer__col">
                            <img src={nmsDev} className="footer-image" loading="lazy"/>
                            <h4 className="footer__location">Team based in Kyiv, Ukraine</h4>
                            <div className="footer__contacts">
                                <h1 className="footer__contactsTitle">Contact us now</h1>
                                <p className="footer__contactsText"><strong>Tel.:</strong>
                                    <a className="footer__link"
                                       href="tel:+380672179194">
                                        +38 067 217 91 94
                                    </a>
                                </p>
                                <p className="footer__contactsText">
                                    <strong>Mail.:</strong>
                                    <a className="footer__link"
                                       href="mailto:dev@nms-group.family">
                                        dev@nms-group.family
                                    </a>
                                </p>
                            </div>
                            <div className="icons">
                                <a href="https://chat.whatsapp.com/DZp4Mlt9ZVN1doXbL3pHGz">
                                    <img src={iconWhatsApp} className="iconSize" loading="lazy"/>
                                </a>
                                <a href="https://invite.viber.com/?g2=AQAw7NVotbLxjUz%2BOeJBKHc%2BvFU521M9HRcizAWe8%2BCcln5iUoxQPEgT0O7sTwkL">
                                    <img src={iconViber} className="iconSize" loading="lazy"/>
                                </a>
                                <a href="https://t.me/joinchat/qnJ1QvS4VUNiZDFi" className="iconSize">
                                    <img src={iconTelegram} className="iconSize" loading="lazy"/>
                                </a>
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
