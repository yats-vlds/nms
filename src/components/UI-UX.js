import React from "react";
import {HashLink} from "react-router-hash-link";
import iconDown from "../assets/iconDown.svg";
import SEO from "../SEO";
import logo from "../assets/logo.jpg";

const UI_UX = () => {
    return (
        <>
            <SEO
                title={"UI/UX Design Services | NMS {dev}"}
                thumbnail={logo}
                url={"https://nms-group.family/"}
                content={"We are an expert in customer digital experience creating engaging and unique design solutions. NMS Team crafts high-quality \"packaging\" for web and mobile products!"}
            />
            <h1 className="customTitleFirst">
                UI/UX Design Services
            </h1>
            <p>
                You never have a second chance to make a first impression! We design products and services that people
                really enjoy and are truly happy to pay for. NMS designers and engineers help you to improve your users
                experience and to generate growth for your business following the recent development trends.
            </p>
            <p>
                The high quality <strong>user interface design</strong> builds strong emotional bonds between businesses
                and customers
                through appealing visual designs and memorable brand experiences around software solutions. An
                accessible and impressive design is a powerful tool for fast company growth touching emotions and
                ultra-personalize the customer`s behavior.
            </p>
            <p>
                <strong>User experience design</strong> covers how end-users interact with a software. All include how
                they ‘feel’ and
                how this relates to using a service or buying a product. The entire interactive environment helps the
                end-users to respond to the product elements and features, including written and visual content,
                building a successful customer experience model.
            </p>
            <p>
                NMS Team applies a full range of UI/UX design services to assist you in efficient customer acquisition
                and retention strategies helping brands to create genuine and memorable identities that engage, excite,
                and build trust with your company or product. Showcase your brand and exceed user expectations with our
                UI/UX design and creative services:
            </p>
            <div className="row">
                <div className="col-6">
                    <ul className="custom__rightSubtitle">
                        <strong>
                            <p className="custom__rightSubtitleText">What we do:</p>
                        </strong>
                        <li className="custom__rightSubtitleText">Graphic Design</li>
                        <li className="custom__rightSubtitleText">Brand/Logo Design</li>
                        <li className="custom__rightSubtitleText">UX/UI Audit
                        </li>
                        <li className="custom__rightSubtitleText">UX/UI Design</li>
                        <li className="custom__rightSubtitleText">Research & Prototyping</li>
                        <li className="custom__rightSubtitleText">Interaction Design</li>
                        <li className="custom__rightSubtitleText">Page Layouts and Wireframing</li>
                        <li className="custom__rightSubtitleText">Mobile Ui/UX Design</li>
                        <li className="custom__rightSubtitleText">UI/UX Web Design</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul className="custom__rightSubtitle">
                        <strong>
                            <p className="custom__rightSubtitleText">Instruments:</p>
                        </strong>
                        <li className="custom__rightSubtitleText">Figma</li>
                        <li className="custom__rightSubtitleText">Sketch</li>
                        <li className="custom__rightSubtitleText">InVision Studio</li>
                        <li className="custom__rightSubtitleText">Webflow</li>
                        <li className="custom__rightSubtitleText">Wireframe.cc
                        </li>
                        <li className="custom__rightSubtitleText">Adobe Photoshop</li>
                        <li className="custom__rightSubtitleText">illustrator</li>
                        <li className="custom__rightSubtitleText">inDesign</li>
                        <li className="custom__rightSubtitleText">After Effects</li>
                        <li className="custom__rightSubtitleText">Adobe Premiere</li>
                    </ul>
                </div>
            </div>
            <h5 className="customTitle">Feel free to challenge us!</h5>
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

export default UI_UX
