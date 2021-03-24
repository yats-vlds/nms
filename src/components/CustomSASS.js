import React from "react";
import {HashLink} from "react-router-hash-link";
import iconDown from "../assets/iconDown.svg";

const CustomSASS = () => {
    return (
        <>
            <h1 className="customTitleFirst">
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
            <h2 className="customTitle">
                Startups
            </h2>
            <p>
                Whether you need to design a prototype, build a new SaaS Minimum Viable Product (MVP) or
                improve an existing one, you need to be fast-moving. And we are here to become your trusted
                partner! Launch your product and test hypothesis right away being within the budget
                frameworks with our efficient SaaS development services.
            </p>
            <h2 className="customTitle">
                Small and Medium Businesses
            </h2>
            <p>Being a SaaS software company we help businesses to be more efficient on a market building
                secure and scalable SaaS products that save regular hardware spendings. We are also happy to
                maintain, improve and integrate your current SaaS business intelligence software.</p>
            <h2 className="customTitle">
                Enterprises
            </h2>
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
            <h2 className="customTitle">
                Technologies
            </h2>
            <p>
                <strong>Front End:</strong> <br/>
                React.js, React Native, Next.js, TypeScript
            </p>
            <p>
                <strong>Back End:</strong> <br/>
                Node.js, Express, PHP, Python
            </p>
            <p>
                <strong>Databases:</strong> <br/>
                Postgres, Mongo, SQL DBs
            </p>
            <h2 className="customTitle">
                <HashLink
                    to="/#carouselExampleIndicators_1"
                    className="see-cases"
                    onClick={() => setTimeout(() => {console.log('alert')}, 10000)}
                >
                    See cases <img src={iconDown} className="iconDown" loading="lazy"/>
                </HashLink>
            </h2>
        </>
    )
}

export default CustomSASS
