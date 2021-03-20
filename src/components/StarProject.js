import React from 'react'
import "./StarProject.css"
import background from "../assets/back.svg"
import iconDown from "../assets/iconDown.svg"

import {Link} from "react-router-dom";
import backStar from "../assets/backStarProject.svg";
import {Tween} from "react-gsap";
import circleIcons1 from "../assets/vectorImg/vectorSmart1.svg";
import circleIcons2 from "../assets/vectorImg/vectorSmart2.svg";
import circleIcons3 from "../assets/vectorImg/vectorSmart3.svg";
import circleIcons4 from "../assets/vectorImg/vectorSmart4.svg";
import circleIcons5 from "../assets/vectorImg/vectorSmart5.svg";
import circleIcons6 from "../assets/vectorImg/vectorSmart6.svg";
import circleIcons7 from "../assets/vectorImg/vectorSmart7.svg";
import circleIcons8 from "../assets/vectorImg/vectorSmart8.svg";
import circleIcons9 from "../assets/vectorImg/vectorSmart9.svg";
import circleIcons10 from "../assets/vectorImg/vectorSmart10.svg";


const StarProject = ({id, ellipse, setEllipse}) => {
    return (
        <div className="star__project container-fluid">
            <div className="container-fluid star__projectSloy" id={id}>
                <div className="star__projectROW">
                    <div className="star__projectRowContent container">
                        <div className="row start__projectRowContentInfo">
                            <div className="col-6 star__projectRowContentLeft">
                                <h1 className="star__projectLeftTitle"><Link to='/custom' className="link__starPorject">
                                    Custom SaaS <img className="iconDown img-fluid" src={iconDown}/> </Link></h1>
                                <h1 className="star__projectLeftTitle"><Link to='/mobile-and-web'
                                                                             className="link__starPorject">
                                    Web Development <img className="iconDown img-fluid"
                                                         src={iconDown}/> </Link></h1>
                                <h1 className="star__projectLeftTitle"><Link to='/ui-ux' className="link__starPorject">UI/UX
                                    Design <img className="iconDown img-fluid" src={iconDown}/> </Link></h1>
                            </div>
                            <div className="col-6 star__projectRowContentRight">
                                <div className="container-for-iconVector"
                                >
                                    <Tween to={{scale: "1", x: '210px', y: '170px', rotation: 360}}
                                           from={{x: '0px', y: '0px', rotation: 360}} duration={5} ease="back.out(1.7)">
                                        <img src={circleIcons1} className="iconVectors iconMessage" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '150px', y: '100px', rotation: 360}} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons2} className="iconVectors iconBack" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '160px', y: '140px', rotation: 360}} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons3} className="iconVectors iconWifi" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-230px', y: '170px', rotation: 360}} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons4} className="iconVectors iconCamera" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-250px', y: '180px', rotation: 360}} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons5} className="iconVectors iconContacts" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-370px', y: '-150px', rotation: 360}} scale={0.5} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons6} className="iconVectors iconHome" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-50px', y: '-200px', rotation: 360}} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons7} className="iconVectors iconCall" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-270px', y: '-30px', rotation: 360}} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons8} className="iconVectors iconSetting" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '180px', y: '30px', rotation: 360}} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons9} className="iconVectors iconMessage2" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-360px', y: '130px', rotation: 360}} duration={5}
                                           ease="back.out(1.7)">
                                        <img src={circleIcons10} className="iconVectors iconBrowser" loading="lazy"/>
                                    </Tween>
                                </div>
                                <div className={!ellipse ? "btnStar" : "btnStarMovement"}>
                                    <div className="btnStar-twoSloy">
                                        <div className={ellipse ? "btnStar-threeSloyAfter" : "btnStar-threeSloyBefore"}>
                                            <div
                                                className={ellipse ? "btnStar-fourSloyAfter" : "btnStar-fourSloyBefore"}>
                                                <h6 className="btnStar-fourSloyTitle">
                                                    Start project
                                                </h6>
                                            </div>
                                        </div>
                                        <div className={ellipse ? "ellipse-btnStarAfter" : "ellipse-btnStarBefore"}
                                             onClick={() => setEllipse(!ellipse)}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={background} alt="" className="star__imageBack" loading="lazy"/>
            </div>
        </div>
    )
}

export default StarProject
