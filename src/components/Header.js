// import React from 'react'
// import logo from '../assets/logo.svg'
// import {Link, animateScroll as scroll} from "react-scroll";
// import {NavLink} from "react-router-dom";
// import LazyLoad from "react-lazy-load"
// import {HashLink} from "react-router-hash-link";
// import "./Header.css"
// import {JsonLd} from "react-schemaorg";
//
// const Header = () => {
//     const LinkSchema = ({links}) => {
//         return (
//             <JsonLd
//                 item={{
//                     "@context": "https://schema.org",
//                     '@type': 'HeaderSchema',
//                     linkOne: links.linkOne,
//                     linkTwo: links.linkTwo,
//                     linkThree: links.linkThree,
//                 }}
//             />
//         )
//     }
//
//     const links = {
//         linkOne: "Expertise",
//         linkTwo: "Why are we",
//         linkThree: "Works",
//         linkFour: "Contacts"
//     }
//     return (
//         <>
//             <nav className="navbar navbar-expand-md navbar-light bg-white header">
//                 <div className="container">
//                     <NavLink to="/">
//                         <img src={logo} className="header__logo img-fluid" loading="lazy"/>
//                     </NavLink>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse"
//                             data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                             aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item active nav-itemLeft">
//                                 <a className="nav-link" href="#">Link</a>
//                             </li>
//                             <li className="nav-item nav-itemLeft">
//                                 <a className="nav-link" href="#">Link</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link disabled" href="#">Disabled</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//         // <div className="header">
//         //     <div className="container">
//         //         <div className="row header__row">
//         //             <div className="col-6 header__leftDivLogo">
//         //                 <NavLink to="/">
//         //                         <img src={logo} className="header__logo img-fluid" loading="lazy"/>
//         //                 </NavLink>
//         //             </div>
//         //             <div className="col-5 header__navLeft">
//         //                 <LinkSchema links={links} />
//         //                 <HashLink
//         //                     to="/#expertise"
//         //                     className="header__link"
//         //                     smooth
//         //                 >
//         //                     {links.linkOne}
//         //                 </HashLink>
//         //                 <HashLink
//         //                     to="/#why"
//         //                     className="header__link"
//         //                 >
//         //                     {links.linkTwo}
//         //                 </HashLink>
//         //                 <HashLink
//         //                     to="/#carouselExampleIndicators_1"
//         //                     className="header__link"
//         //                 >
//         //                     {links.linkThree}
//         //                 </HashLink>
//         //             </div>
//         //             <div className="col-1 header__navRight">
//         //                 <HashLink
//         //                     to="/#contacts"
//         //                     className="header__link header__linkContacts">
//         //                     {links.linkFour}
//         //                 </HashLink>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//     )
// }
//
// export default Header
//
//
//
//
//
//
//







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
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-white">
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
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/#expertise">
                                    {links.linkOne}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/#why">
                                    {links.linkTwo}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/#why">
                                    {links.linkTwo}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
