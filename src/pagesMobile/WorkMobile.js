import React from "react"
import CustomSaASSImage from "../assets/mobile-image/customsass.svg";
import HeaderMobile from "../componentsMobile/HeaderMobile";
import "./WorkMobile.css"
import Slider from "react-slick";
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import ct2 from "../assets/CT-900x1025(2).png";
import ct3 from "../assets/CT-900x1025-3.png";
import goPrintTwo from "../assets/GoPrint_900x1025.png";
import goPrintThree from "../assets/GoPrint_900x1025-2.png";
import goPrintFour from "../assets/GoPrint_900x1025-3.png";
import UIUXlogo from "../assets/mobile-image/UIUXLOGO.svg";
import GoPrintDesign1 from "../assets/DIZ-900x1025-01.png";
import GoPrintDesign2 from "../assets/DIZ-900x1025-02.png";
import GoPrintDesign3 from "../assets/DIZ-900x1025-03.png";
import GoPrintDesign4 from "../assets/DIZ-900x1025-04.png";
import UkrTelecom1 from "../assets/UKT-900x1025-01.png";
import UkrTelecom2 from "../assets/UKT-900x1025-02.png";
import UkrTelecom3 from "../assets/UKT-900x1025-03.png";
import InMoreDesign1 from "../assets/InMoreDIZ-900x1025-01.png";
import InMoreDesign2 from "../assets/InMoreDIZ-900x1025-02.png";
import InMoreDesign3 from "../assets/InMoreDIZ-900x1025-03.png";
import danfosHeatSelector1 from "../assets/DanHS-900x1025.png";
import danfosHeatSelector2 from "../assets/DanHS-900x1025-2.png";
import danfosHeatSelector3 from "../assets/DanHS-900x1025-3.png";
import danfosHeatSelector4 from "../assets/DanHS-900x1025-4.png";
import listery from "../assets/Li-900x1025.png";
import favvel from "../assets/FA-900x1025.png";
import favvel2 from "../assets/FA-900x1025-2.png";
import danfosEasyPlan1 from "../assets/2-DanVEP-900x1025.png";
import danfosEasyPlan2 from "../assets/DanVEP-900x1025.png";
import danfosEasyPlan3 from "../assets/DanVEP-900x1025-2.png";
import danfosEasyPlan4 from "../assets/DanVEP-900x1025-3.png";
import total from "../assets/total-900x1025-01.png";
import total2 from "../assets/total-900x1025-02.png";
import total3 from "../assets/total-900x1025-03.png";
import loko from "../assets/LocoMoco-900x1025-01.png";
import loko2 from "../assets/LocoMoco-900x1025-02.png";
import loko3 from "../assets/LocoMoco-900x1025-03.png";
import SliderMobileOne from "../componentsMobile/SliderMobileOne";
import SliderMobileTwo from "../componentsMobile/SliderMobileTwo";
import SliderMobileThree from "../componentsMobile/SliderMobileThree";
import FormMobile from "../componentsMobile/FormMobile";
import Footer from "../components/Footer";
import FooterMobile from "../componentsMobile/FooterMobile";

const WorkMobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const sliderComponentDataText = {
        sliderOne: {
            sliderTitle: "Chary Time",
            sliderText: "  A lot of people in the world want to support charity organizations, however, not all\n" +
                "                                    of them have money for that. What if to convert CTP into money that could be donated\n" +
                "                                    to a selected charity organization? What if to create a digital solution to make\n" +
                "                                    good things trendy? CharyTime is a unique app that allows you to “donate your time”.",
            instruments: {
                instruments1: "React/React-Native",
                instruments2: "Next.js",
                instruments3: "Node.js (Express)",
                instruments4: "Postgres",
                instruments5: "Docker",
            }
        },
        sliderTwo: {
            sliderTitle: "GoPrint",
            sliderText: "What about automation of printing services? We made it self-service. NMS Team took\n" +
                "                                    responsibility for the full scale of works including UI/UX design, web SaaS,\n" +
                "                                    cross-platform custom mobile applications development, Backend development, Admin\n" +
                "                                    Dashboard creation and unique programming solution for the innovative remote\n" +
                "                                    printing terminals"
        },
        sliderThree: {
            sliderTitle: "Danfoss Heat Selector",
            sliderText: "ECtemp Touch – is a smart thermostat created by Danfoss. To give users a possibility\n" +
                "                                    to use the functionality of this Smart Home solution for 100%, we have created a\n" +
                "                                    virtual instrument which allows to create special HEXA code according to specific\n" +
                "                                    ECtemp Touch thermostat’s settings in order to have two-way communication and to\n" +
                "                                    setup them by distance.",
            instruments: {
                instruments1: "C#",
                instruments2: ".NET MVC",
                instruments3: "ReactJS",
            }
        },
        sliderFour: {
            sliderTitle: "Listery",
            sliderText: "  If you take care about your friends and want to make a gift search process easier\n" +
                "                                    for them, share your desires with Listery. This MVP app allows you to search for\n" +
                "                                    desired items via databases of the biggest web-shops and to share your lists. Our\n" +
                "                                    dev team had a pleasure to arrange the app’s back end part.\n" +
                "                                    Who knows, maybe with this Flutter SDK based product your innermost desires will\n" +
                "                                    finally come true!",
            instruments: {
                instruments1: "Flutter",
                instruments2: "Node.js (Express)",
                instruments3: "MongoDB",
                instruments4: "Docker",
            }
        },
        sliderFive: {
            sliderTitle: "FAVVEL",
            sliderText: "Who’s on top of the world? Best film,\n" +
                "                                    most appreciated musical album or eminent athlete – with FAVVEL SaaS web service\n" +
                "                                    creating and sharing personal lists becomes simple as ever. Based on MERN stack,\n" +
                "                                    this app serves a great example of how an idea of individual entrepreneur can\n" +
                "                                    transform into a custom software product in a couple of months.",
            instruments: {
                instruments1: "React",
                instruments2: "Node.js",
                instruments3: "MongoDB",
                instruments4: "Docker",
            }
        },
        sliderSix: {
            sliderTitle: "Danfoss Veria EasyPlan",
            sliderText: "The Flash epoch is over and it’s a\n" +
                "                                    right time to switch your application to an up-to-date framework. Danfoss Veria\n" +
                "                                    EasyPlan is a convenient web app allowing house builders and end customers to plan\n" +
                "                                    usage of heating mats from one of the world leaders in the field of smart home\n" +
                "                                    solutions. Our product is fully responsive, in addition all needed calculations are\n" +
                "                                    provided on the front end side, making EasyPlan quite a refined product."
        },
        sliderSeven: {
            sliderTitle: "TOTAL Safety Circle",
            sliderText: "Total Safety Circle is a custom web\n" +
                "                                    product developed for Total Energy’s promotional campaign. Being created within the\n" +
                "                                    React / NodeJS framework, the product possessed gamified mechanics which allowed\n" +
                "                                    users to create so called “safety circles” for people they care, distribute\n" +
                "                                    invitations and win some incentives.",
            instruments: {
                instruments1: "React",
                instruments2: "Node.js",
                instruments3: "Postgres",
                instruments4: "Docker",
            }
        },
        sliderEight: {
            sliderTitle: "The Loko-Moko Game",
            sliderText: "This web application has been developed\n" +
                "                                    to promote products under the Loko-Moko Brand for Lactalis, the Global producer of\n" +
                "                                    whey and milk products.\n" +
                "                                    Using a popular Rio cartoon theme we’ve developed a custom UI design and back end\n" +
                "                                    for a promotional game app which allowed users to spend some nice time and learn\n" +
                "                                    more about Loko-Moko line. Opening new game levels needed usage of a special promo\n" +
                "                                    code, thus online activity was unified with BTL events."
        }
    }
    return (
        <>
            <HeaderMobile/>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center beforeHeader">
                    <div className="col-1">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="col-11">
                        <h1 className="bannerMobile__titleTwo display-3" style={{textAlign: "center"}}>WORKS</h1>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <img src={CustomSaASSImage} className="imgHomeForLinkInMobile"/>
                    </div>
                    <div className="col-12">
                        <h2 className="workMobile__titleTwo display-5">SaaS Development Services</h2>
                    </div>
                </div>
            </div>
            <SliderMobileOne />
            <div className="div">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="workMobile__titleTwo display-5">Professional Web Development Services</h2>
                        </div>
                    </div>
                </div>
                <SliderMobileTwo />
            </div>
            <div className="div">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="workMobile__titleTwo display-5">UI/UX Design Services</h2>
                        </div>
                    </div>
                </div>
                <SliderMobileThree />
            </div>
            <FormMobile />
         <FooterMobile />
        </>
    )
}

export default WorkMobile
