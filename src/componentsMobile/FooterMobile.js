import React from "react"
import "./FooterMobile.css"
import telegram from "../assets/mobile-image/telegram.png";
import viber from "../assets/mobile-image/viber.png";
import whatsapp from "../assets/mobile-image/whatsapp.png";
import logo from "../assets/mobile-image/logo.svg";

const FooterMobile = () => {
    return (
        <div className="footerMobile">
            <div className="container">
                <div className="row footerMobile__row">
                    <div className="col-8">
                        <h2 className="footerMobile__titleOne">Contact us now</h2>
                    </div>
                    <div className="col-4">
                        <a href="https://t.me/joinchat/qnJ1QvS4VUNiZDFi">
                            <img src={telegram} className="messengersIconFooter ml-1"/>
                        </a>
                        <a href="https://invite.viber.com/?g2=AQAw7NVotbLxjUz%2BOeJBKHc%2BvFU521M9HRcizAWe8%2BCcln5iUoxQPEgT0O7sTwkL">
                            <img src={viber} className="messengersIconFooter ml-1"/>
                        </a>
                        <a href="https://chat.whatsapp.com/DZp4Mlt9ZVN1doXbL3pHGz">
                            <img src={whatsapp} className="messengersIconFooter ml-1"/>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h6 className="footerMobile__contactText">
                            <i className="bi bi-telephone-fill iconFooter"/>
                            <a className="footer__link"
                               href="tel:+380672179194">
                                +38 067 217 91 94
                            </a>
                        </h6>
                        <h6 className="footerMobile__contactText">
                            <i className="bi bi-envelope-fill iconFooter"/>
                            <a className="footer__link"
                               href="mailto:dev@nms-group.family">
                                dev@nms-group.family
                            </a>
                        </h6>
                    </div>
                </div>
                <div className="row footerMobile__bottom">
                    <div className="col-8">
                        <img src={logo} className="footerMobile__logo"/>
                        <h6>Team based in Kyiv, Ukraine</h6>
                    </div>
                    <div className="col-4" style={{marginTop: "auto"}}>
                        <h6>© NMS 2021</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile
