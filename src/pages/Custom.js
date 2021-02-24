import React, {useEffect, useState, useReducer} from 'react'
import iconDown from "../assets/iconDown.svg"
import "../pages/Custom.css"
import CircleIcons from "../components/CircleIcons"
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {HashLink} from 'react-router-hash-link';


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
                        <CircleIcons/>
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
                                     onClick={() => setEllipse(!ellipse)}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 customRight">
                        <h1 className="customTitle">
                            SaaS Software Development
                        </h1>
                        <p>
                            Software as a service (SaaS) dramatically has changed the way that many companies achieve
                            their strategic goals. With SaaS development services, NMS Team helps businesses to be
                            noticeable in comparison with their competitors and to create unique, secure, and scalable
                            solutions that fulfil all end-users’ demands and your business strategy priorities. We work
                            with the latest technologies and modern SaaS product development approaches both customizing
                            and maintaining existing SaaS products as well as developing software from scratch.
                        </p>
                        <h1 className="customTitle">
                            Startups
                        </h1>
                        <p>
                            Whether you need to design a prototype, build a new SaaS Minimum Viable Product (MVP) or
                            improve an existing one, you need to be fast-moving. And we are here to become your trusted
                            partner! Launch your product and test hypothesis right away being within the budget
                            frameworks with our efficient SaaS development services.
                        </p>
                        <h1 className="customTitle">
                            Small and Medium Businesses
                        </h1>
                        <p>Being a SaaS software company we help businesses to be more efficient on a market building
                            secure and scalable SaaS products that save regular hardware spendings. We are also happy to
                            maintain, improve and integrate your current SaaS business intelligence software.</p>
                        <h1 className="customTitle">
                            Enterprises
                        </h1>
                        <p>
                            Looking for digital transformation and building your SaaS enterprise software? NMS Team is
                            your expert guide to digital world. As an experienced SaaS development company, we deeply
                            understand your everyday challenges, and we know how to automate business processes and save
                            you costs via creation of the custom SaaS product crafted specifically for your company’s
                            needs:
                        </p>
                        <ul className="custom__rightSubtitle">
                            <li className="custom__rightSubtitleText">SaaS Finance Software (FinTech)</li>
                            <li className="custom__rightSubtitleText">SaaS Human Resources (HR) Software</li>
                            <li className="custom__rightSubtitleText">SaaS Customer Relationship Management (CRM)
                                Software
                            </li>
                            <li className="custom__rightSubtitleText">Accounting SaaS</li>
                            <li className="custom__rightSubtitleText">Project Management SaaS</li>
                        </ul>
                        <p>
                            Whether you need a custom SaaS Application Development or SaaS Web Development, Prоgressive
                            Web App or a Chatbot, we are here to be with you during this journey and optimize your SaaS
                            development costs!
                        </p>
                        <h1 className="customTitle">
                            Technologies
                        </h1>
                        <p>
                            <strong>Front End:</strong> React.js, React Native, Next.js, TypeScript
                            <strong>Back End:</strong> Node.js, Express, PHP, Python
                            <strong>Databases:</strong>  Postgres, Mongo, SQL DBs

                        </p>
                        <h2 className="customTitle">
                            <HashLink
                                to="/#works"
                                className="see-cases"
                            >
                                See cases <img src={iconDown} className="iconDown" loading="lazy"/>
                            </HashLink>
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Custom
