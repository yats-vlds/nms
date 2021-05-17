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
                        <img src={telegram} className="messengersIconFooter ml-1"/>
                        <img src={viber} className="messengersIconFooter ml-1"/>
                        <img src={whatsapp} className="messengersIconFooter ml-1"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <h3 className="footerMobile__contactText">
                            <i className="bi bi-telephone-fill iconFooter"/>
                            +38 (067) 217-91-94
                        </h3>
                        <h3 className="footerMobile__contactText">
                            <i className="bi bi-envelope-fill iconFooter"/>
                            +38 (067) 217-91-94
                        </h3>
                    </div>
                </div>
                <div className="row footerMobile__bottom">
                    <div className="col-9">
                        <img src={logo} className="footerMobile__logo"/>
                        <h6>Team based in Kyiv, Ukraine</h6>
                    </div>
                    <div className="col-3" style={{marginTop: "auto"}}>
                        <h6>© NMS 2021</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMobile
