import React from 'react'
import logo from '../assets/logo.svg'
import {Link, animateScroll as scroll} from "react-scroll";
import {NavLink} from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="container header__container">
                <div className="row header__row">
                    <div className="col-6">
                        <NavLink to="/">
                            <img src={logo} className="header__logo"/>
                        </NavLink>
                    </div>
                    <div className="col-5 header__navLeft">
                        <Link
                            activeClass="active"
                            to="expertise"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="header__link">
                            Expertise
                        </Link>
                        <Link
                            activeClass="active"
                            to="why"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="header__link"
                        >
                            Why are we
                        </Link>
                        <Link
                            activeClass="active"
                            to="works"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="header__link"
                        >
                            Works
                        </Link>
                    </div>
                    <div className="col-1 header__navRight">
                        <Link
                            activeClass="active"
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="header__link">
                            Contacts
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
