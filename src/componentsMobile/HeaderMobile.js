import React, {useState} from "react"
import {slide as Menu} from 'react-burger-menu'
import logo from "../assets/mobile-image/logo.svg"
import telegram from "../assets/mobile-image/telegram.png"
import viber from "../assets/mobile-image/viber.png"
import whatsapp from "../assets/mobile-image/whatsapp.png"
import telegramBlack from "../assets/mobile-image/telegram1.png"
import viberBlack from "../assets/mobile-image/viber1.png"
import whatsappBlack from "../assets/mobile-image/whatsapp1.png"
import "../App.css"
import "./HeaderMobile.css"

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    function showSettings(event) {
        event.preventDefault();
        console.log(event, 'event')
    }

    let handleOnOpen = () => {
        console.log('open')
    }

    let handleOnClose = () => {
        console.log('close')
        setIsOpen(false)
    }


    return (
        <>
            <div className="headerMobile">
                <Menu>
                    <div className="headerMobile__inBurgerLogo">
                        <img src={logo} className="headerMobile__inBurgerLogo logo__burger"/>
                    </div>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={showSettings} className="menu-item" href="">Settings</a>
                    <div className="messengersBlack">
                        <img src={telegramBlack} className="messengersIconBlack ml-1"/>
                        <img src={viberBlack} className="messengersIconBlack ml-1"/>
                        <img src={whatsappBlack} className="messengersIconBlack ml-1"/>
                        <p className="textLogotypeCompanyInBurger">© NMS 2021</p>
                    </div>
                </Menu>
                <div className="headerMobile__row">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                            </div>
                            <div className="col-10 d-flex mt-2" style={{marginLeft: "auto"}}>
                                <img src={logo} className="headerMobile__logo"/>
                                <div className="messengers">
                                    <img src={telegram} className="messengersIcon ml-1"/>
                                    <img src={viber} className="messengersIcon ml-1"/>
                                    <img src={whatsapp} className="messengersIcon ml-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderMobile
