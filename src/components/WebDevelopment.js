import React from "react";
import {HashLink} from "react-router-hash-link";
import iconDown from "../assets/iconDown.svg";

const WebDevelopment = () => {
    return (
        <>
            <h1 className="customTitle">
                Web Development
            </h1>
            <p>
                Achieve your business goals by applying the right professional web development services. NMS Team helps
                businesses to make anything from a simple content management system and information landing page to
                complex custom web apps and ecommerce web development. Our aim is to create simple, user-friendly
                websites that serve your company as an instrument to win more customers.
            </p>
            <p>
                A good web solution with properly selected web technology helps its users find what they are looking for
                with a single click. An understandable menu, simple navigation, “F-pattern” content layout, good website
                architecture, breadcrumbs, dropdowns, clickable items - every single detail is one step closer to the
                web product that users will love.
            </p>
            <p>
                And don't forget about search engine results (SEO) which are crucial in new customer acquisition. NMS
                Team could fully assist you in custom web development that also assures your visibility while being
                suitable for crawling and indexation.
            </p>
            <p>
                We work with all modern browsers and devices implementing the best technologies and practices to make
                our web solutions device-friendly. NMS Team helps to create real value for your users through the
                “intuitive navigation” approach supporting you in a full-stack web development journey (frontend web
                development and backend web development).
            </p>
            <h1 className="customTitle">
                Technologies
            </h1>
            <p>
                JavaScript (ReactJS Web Development)<br/>
                TypeScript (AngularJS Web Development)<br/>
                PHP (Laravel Web Development)<br/>
                CSS /HTML Web Development
            </p>
            <h1 className="customTitle">
                Platforms
            </h1>
            <p>
                WordPress<br/>
                Tilda<br/>
                Shopify<br/>
                Drupal
            </p>
            <h2 className="customTitle">
                <HashLink
                    to="/#carouselExampleIndicators_1"
                    className="see-cases"
                >
                    See cases <img src={iconDown} className="iconDown" loading="lazy"/>
                </HashLink>
            </h2>
        </>
    )
}

export default WebDevelopment
