import React from 'react'
import logo from '../assets/logo.svg'
import {Link, animateScroll as scroll} from "react-scroll";
import {NavLink} from "react-router-dom";
import LazyLoad from "react-lazy-load"
import {HashLink} from "react-router-hash-link";
import "./Header.css"
import {JsonLd} from "react-schemaorg";

const Header = () => {
    const LinkSchema = ({links}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'HeaderSchema',
                    linkOne: links.linkOne,
                    linkTwo: links.linkTwo,
                    linkThree: links.linkThree,
                }}
            />
        )
    }

    const links = {
        linkOne: "Expertise",
        linkTwo: "Why are we",
        linkThree: "Works",
        linkFour: "Contacts"
    }
    return (
        <div className="header">
            <div className="container">
                <div className="row header__row">
                    <div className="col-6 header__leftDivLogo">
                        <NavLink to="/">
                                <img src={logo} className="header__logo img-fluid" loading="lazy"/>
                        </NavLink>
                    </div>
                    <div className="col-5 header__navLeft">
                        <LinkSchema links={links} />
                        <HashLink
                            to="/#expertise"
                            className="header__link"
                            smooth
                        >
                            {links.linkOne}
                        </HashLink>
                        <HashLink
                            to="/#why"
                            className="header__link"
                        >
                            {links.linkTwo}
                        </HashLink>
                        <HashLink
                            to="/#carouselExampleIndicators_1"
                            className="header__link"
                        >
                            {links.linkThree}
                        </HashLink>
                    </div>
                    <div className="col-1 header__navRight">
                        <HashLink
                            to="/#contacts"
                            className="header__link header__linkContacts">
                            {links.linkFour}
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
