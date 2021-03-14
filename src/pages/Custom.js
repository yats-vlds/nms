import React, {useEffect, useState, useReducer} from 'react'
import iconDown from "../assets/iconDown.svg"
import "../pages/Custom.css"
import CircleIcons from "../components/CircleIcons"
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {HashLink} from 'react-router-hash-link';
import {PlayState, Tween} from "react-gsap";
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
import CustomSASS from "../components/CustomSASS";
import WebDevelopment from "../components/WebDevelopment";
import UI_UX from "../components/UI-UX";


const Custom = ({type, dispatch}) => {
    const [ellipse, setEllipse] = useState(false)
    const [seeCases, setSeeCases] = useState(false)
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    useEffect(() => {
        setTimeout(() => {
            if (ellipse) {
                dispatch({type: "setEllipse", payload: ellipse})
                setEllipse(false)
                return history.push('/')
            }
        }, 3000)
    }, [ellipse])
    return (
        <div className="custom">
            <div className="container">
                <div className="row">
                    <div className="col-6 customLeft">
                        {type === 'custom'
                            ? <h1 className="display-1 custom__leftTitle">Custom <br/> SaaS</h1>
                            : type === 'mobile' ?
                                <h1 className="display-1 custom__leftTitle">Web <br/> Development</h1>
                                : <h1 className="display-1 custom__leftTitle">UI/UX <br/> Design</h1>}
                                <div className="custom__icon">
                                    <Tween to={{x: '210px', y: '170px', rotation: 360}} duration={30} ease="back.out(1.7)"
                                           stagger={0.2}>
                                        <img src={circleIcons1} className="iconVectors iconCustomMessage" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '150px', y: '100px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons2} className="iconVectors iconCustomBack" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '160px', y: '140px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons3} className="iconVectors iconCustomWifi" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-230px', y: '170px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons4} className="iconVectors iconCustomCamera" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-250px', y: '180px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons5} className="iconVectors iconCustomContacts" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '70px', y: '-150px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons6} className="iconVectors iconCustomHome" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-50px', y: '-200px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons7} className="iconVectors iconCustomCall" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-270px', y: '-30px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons8} className="iconVectors iconCustomSetting" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-250px', y: '30px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons9} className="iconVectors iconCustomMessage2" loading="lazy"/>
                                    </Tween>
                                    <Tween to={{x: '-360px', y: '130px', rotation: 360}} duration={30} ease="back.out(1.7)">
                                        <img src={circleIcons10} className="iconVectors iconCustomBrowser" loading="lazy"/>
                                    </Tween>
                                </div>
                        <div className={!ellipse ? "btnCustom" : "btnCustomMovement"}>
                            <div className="btnCustom-twoSloy">
                                <div className={ellipse ? "btnCustom-threeSloyAfter" : "btnCustom-threeSloyBefore"}>
                                    <div className={ellipse ? "btnCustom-fourSloyAfter" : "btnCustom-fourSloyBefore"}>
                                        <h6 className="btnCustom-fourSloyTitle">
                                            Start project
                                        </h6>
                                    </div>
                                </div>
                                <div className={ellipse ? "ellipse-btnStarAfter" : "ellipse-btnStarBefore"}
                                     style={{background: "#c401ff"}}
                                     onClick={() => setEllipse(!ellipse)}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 customRight">
                        {type === 'custom' ? <CustomSASS /> : type === "mobile" ? <WebDevelopment /> : <UI_UX />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Custom
