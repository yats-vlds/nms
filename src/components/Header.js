import React from 'react'
import logo from '../assets/logo.svg'
import {Link, animateScroll as scroll} from "react-scroll";
import {NavLink} from "react-router-dom";
import "./Header.css"
import LazyLoad from "react-lazy-load"
import {HashLink} from "react-router-hash-link";

const Header = () => {
    return (
        <div className="header">
            <div className="container header__container">
                <div className="row header__row">
                    <div className="col-6">
                        <NavLink to="/">
                            <LazyLoad offsetVertical={300}>
                                <img src={logo} className="header__logo img-fluid" loading="lazy"/>
                            </LazyLoad>
                        </NavLink>
                    </div>
                    <div className="col-5 header__navLeft">
                        <HashLink
                            to="/#expertise"
                            className="header__link"
                            smooth
                        >
                            Expertise
                        </HashLink>
                        <HashLink
                            to="/#why"
                            className="header__link"
                        >
                            Why are we
                        </HashLink>
                        <HashLink
                            to="/#carouselExampleIndicators_1"
                            className="header__link"
                        >
                            Works
                        </HashLink>
                    </div>
                    <div className="col-1 header__navRight">
                        <HashLink
                            to="/#contacts"
                            className="header__link header__linkContacts">
                            Contacts
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
