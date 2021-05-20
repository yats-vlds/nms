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
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default class HeaderMobile extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }
    render()
    {
        return (
            <>
                <div className="headerMobile">
                    <Menu
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                    >
                        <div className="headerMobile__inBurgerLogo">
                            <Link to="/" className="linkInExpertise">
                                <img src={logo} className="headerMobile__inBurgerLogo logo__burger"/>
                            </Link>
                        </div>
                        <a className="menu-item" href="/#expertiseMobile" onClick={() => this.closeMenu()}>Expertise</a>
                        <a className="menu-item" href="/#projectPath" onClick={() => this.closeMenu()}>Project path</a>
                        <a className="menu-item" href="/#partners" onClick={() => this.closeMenu()}>Partners</a>
                        <Link className="menu-item" to="/works">Works</Link>
                        <a className="menu-item" href="/#footerMobileContacts" onClick={() => this.closeMenu()}>Contacts</a>
                        <div className="messengersBlack">
                            <a href="https://t.me/joinchat/qnJ1QvS4VUNiZDFi">
                                <img src={telegramBlack} className="messengersIconBlack ml-1"/>
                            </a>
                            <a href="https://invite.viber.com/?g2=AQAw7NVotbLxjUz%2BOeJBKHc%2BvFU521M9HRcizAWe8%2BCcln5iUoxQPEgT0O7sTwkL">
                                <img src={viberBlack} className="messengersIconBlack ml-1"/>
                            </a>
                            <a href="https://chat.whatsapp.com/DZp4Mlt9ZVN1doXbL3pHGz">
                                <img src={whatsappBlack} className="messengersIconBlack ml-1"/>
                            </a>
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


                                        <a href="https://t.me/joinchat/qnJ1QvS4VUNiZDFi">
                                            <img src={telegram} className="messengersIcon ml-1"/>
                                        </a>
                                        <a href="https://invite.viber.com/?g2=AQAw7NVotbLxjUz%2BOeJBKHc%2BvFU521M9HRcizAWe8%2BCcln5iUoxQPEgT0O7sTwkL">
                                            <img src={viber} className="messengersIcon ml-1"/>
                                        </a>
                                        <a href="https://chat.whatsapp.com/DZp4Mlt9ZVN1doXbL3pHGz">
                                            <img src={whatsapp} className="messengersIcon ml-1"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
