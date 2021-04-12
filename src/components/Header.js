import React from 'react'
import logo from '../assets/logo.svg'
import {Link, animateScroll as scroll} from "react-scroll";
import {NavLink} from "react-router-dom";
import LazyLoad from "react-lazy-load"
import {HashLink} from "react-router-hash-link";
import "./Header.css"
import {JsonLd} from "react-schemaorg";
import {Nav} from "react-bootstrap";


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
                    <nav className={`navbar navbar-expand-md navbar-light bg-white header`}>
                        <div className="container">
                            <NavLink className="navbar-brand" to="/">
                                <img src={logo} className="header__logo img-fluid" loading="lazy"/>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <HashLink className="nav-link nav-itemLeft" to="/#expertise">
                                            {links.linkOne}
                                        </HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link nav-itemLeft" to="/#why">
                                            {links.linkTwo}
                                        </HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link nav-itemLeft"
                                                  to="/#carouselExampleIndicators_1">
                                            {links.linkThree}
                                        </HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" to="/#contacts">
                                            {links.linkFour}
                                        </HashLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
    )
}

export default Header
