import React, {useState} from "react"
import {slide as Menu} from 'react-burger-menu'
import logo from "../assets/mobile-image/logo.svg"
import telegram from "../assets/mobile-image/telegram.png"
import viber from "../assets/mobile-image/viber.png"
import whatsapp from "../assets/mobile-image/whatsapp.png"
import telegramBlack from "../assets/mobile-image/telegram1.svg"
import viberBlack from "../assets/mobile-image/viber1.svg"
import whatsappBlack from "../assets/mobile-image/whatsapp1.svg"
import burger from "../assets/mobile-image/burger.svg"
import burgerClose from "../assets/mobile-image/burgerClose.svg"
import "../App.css"
import "./HeaderMobile.css"
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default class HeaderMobile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu() {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }



    render() {
        return (
            <>
                <div className="headerMobile">
                    <Menu
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}
                    >
                        <div className="headerMobile__inBurgerLogo d-flex">
                            <img src={burgerClose} className="burger__img" onClick={() => this.closeMenu()}/>
                            <img src={logo} className="headerMobile__logoInLeftWindow"/>
                        </div>
                        <div className="d-flex flex-column">
                            <HashLink className="menu-item" to="/#expertiseMobile" onClick={() => this.closeMenu()}>
                                <h3 className="nameLinkInHeaderLeftWindow">Expertise</h3>
                            </HashLink>
                            <HashLink className="menu-item" to="/#projectPath" onClick={() => this.closeMenu()}>
                                <h3 className="nameLinkInHeaderLeftWindow">Project path</h3>
                            </HashLink>
                            <HashLink className="menu-item" to="/#partners" onClick={() => this.closeMenu()}>
                                <h3 className="nameLinkInHeaderLeftWindow">Partners</h3>
                            </HashLink>
                            <HashLink className="menu-item" to="/works" onClick={() => this.closeMenu()}>
                                <h3 className="nameLinkInHeaderLeftWindow">Works</h3>
                            </HashLink>
                            <HashLink className="menu-item" to="/#footerMobileContacts"
                                onClick={() => this.closeMenu()}>
                                <h3 className="nameLinkInHeaderLeftWindow">Contacts</h3>
                            </HashLink>
                            <HashLink className="menu-item" to='/#forms' style={{color: "#3C24D2"}}
                                onClick={() => this.closeMenu()}>
                                <h3 className="nameLinkInHeaderLeftWindow">Start Project</h3>
                            </HashLink>
                        </div>
                        <div className="messengersBlack">
                            <div className="d-flex">
                                <a href="https://t.me/joinchat/qnJ1QvS4VUNiZDFi" className="aLinkInHeader">
                                    <img src={telegramBlack} className="messengersIconBlack ml-1"/>
                                </a>
                                <a href="https://invite.viber.com/?g2=AQAw7NVotbLxjUz%2BOeJBKHc%2BvFU521M9HRcizAWe8%2BCcln5iUoxQPEgT0O7sTwkL"
                                   className="aLinkInHeader">
                                    <img src={viberBlack} className="messengersIconBlack ml-1"/>
                                </a>
                                <a href="https://chat.whatsapp.com/DZp4Mlt9ZVN1doXbL3pHGz" className="aLinkInHeader">
                                    <img src={whatsappBlack} className="messengersIconBlack ml-1"/>
                                </a>
                            </div>
                            <p className="textLogotypeCompanyInBurger">© NMS 2021</p>
                        </div>
                    </Menu>
                    <div className="headerMobile__row">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-2">
                                    <img src={burger} className="burger__img" />
                                </div>
                                <div className="col-10 d-flex" style={{marginLeft: "auto"}}>
                                    <img src={logo} className="headerMobile__logo"/>
                                    <div className="messengers">


                                        <a href="https://t.me/joinchat/qnJ1QvS4VUNiZDFi" className="aLinkInHeader">
                                            <img src={telegram} className="messengersIcon"/>
                                        </a>
                                        <a href="https://invite.viber.com/?g2=AQAw7NVotbLxjUz%2BOeJBKHc%2BvFU521M9HRcizAWe8%2BCcln5iUoxQPEgT0O7sTwkL"
                                           className="aLinkInHeader">
                                            <img src={viber} className="messengersIcon"/>
                                        </a>
                                        <a href="https://chat.whatsapp.com/DZp4Mlt9ZVN1doXbL3pHGz"
                                           className="aLinkInHeader">
                                            <img src={whatsapp} className="messengersIcon"/>
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
