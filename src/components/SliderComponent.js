import React from "react";
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import Slider from "react-slick";
import goPrintTwo from "../assets/GoPrint_900x1025.png"
import goPrintThree from "../assets/GoPrint_900x1025-2.png"
import goPrintFour from "../assets/GoPrint_900x1025-3.png"
import total from "../assets/total-900x1025-01.png"
import total2 from "../assets/total-900x1025-02.png"
import total3 from "../assets/total-900x1025-03.png"
import loko from "../assets/LocoMoco-900x1025-01.png"
import loko2 from "../assets/LocoMoco-900x1025-02.png"
import loko3 from "../assets/LocoMoco-900x1025-03.png"
import ct2 from "../assets/CT-900x1025(2).png"
import ct3 from "../assets/CT-900x1025-3.png"
import favvel from "../assets/FA-900x1025.png"
import favvel2 from "../assets/FA-900x1025-2.png"
import danfosEasyPlan1 from "../assets/2-DanVEP-900x1025.png"
import danfosEasyPlan2 from "../assets/DanVEP-900x1025.png"
import danfosEasyPlan3 from "../assets/DanVEP-900x1025-2.png"
import danfosEasyPlan4 from "../assets/DanVEP-900x1025-3.png"
import danfosHeatSelector1 from "../assets/DanHS-900x1025.png"
import danfosHeatSelector2 from "../assets/DanHS-900x1025-2.png"
import danfosHeatSelector3 from "../assets/DanHS-900x1025-3.png"
import danfosHeatSelector4 from "../assets/DanHS-900x1025-4.png"
import listery from "../assets/Li-900x1025.png"
import {JsonLd} from "react-schemaorg";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const SliderComponentSchema = ({sliderComponentDataText}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'SliderComponentSchema',
                    sliderOne: {
                        sliderTitle: sliderComponentDataText.sliderOne.sliderTitle,
                        sliderText: sliderComponentDataText.sliderOne.sliderText,
                    },
                    sliderTwo: {
                        sliderTitle: sliderComponentDataText.sliderTwo.sliderTitle,
                        sliderText: sliderComponentDataText.sliderTwo.sliderText,
                    },
                    sliderThree: {
                        sliderTitle: sliderComponentDataText.sliderThree.sliderTitle,
                        sliderText: sliderComponentDataText.sliderThree.sliderText,
                    },
                    sliderFour: {
                        sliderTitle: sliderComponentDataText.sliderFour.sliderTitle,
                        sliderText: sliderComponentDataText.sliderFour.sliderText
                    },
                    sliderFive: {
                        sliderTitle: sliderComponentDataText.sliderFive.sliderTitle,
                        sliderText: sliderComponentDataText.sliderFive.sliderText
                    },
                    sliderSix: {
                        sliderTitle: sliderComponentDataText.sliderSix.sliderTitle,
                        sliderText: sliderComponentDataText.sliderSix.sliderText
                    },
                    sliderSeven: {
                        sliderTitle: sliderComponentDataText.sliderSeven.sliderTitle,
                        sliderText: sliderComponentDataText.sliderSeven.sliderText
                    },
                    sliderEight: {
                        sliderTitle: sliderComponentDataText.sliderEight.sliderTitle,
                        sliderText: sliderComponentDataText.sliderEight.sliderText
                }
                }}
            />
        )
    }
    const sliderComponentDataText = {
        sliderOne: {
            sliderTitle: "Chary Time",
            sliderText: "  A lot of people in the world want to support charity organizations, however, not all\n" +
                "                                    of them have money for that. What if to convert CTP into money that could be donated\n" +
                "                                    to a selected charity organization? What if to create a digital solution to make\n" +
                "                                    good things trendy? CharyTime is a unique app that allows you to “donate your time”.",
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
                "                                    setup them by distance."
        },
        sliderFour: {
            sliderTitle: "Listery",
            sliderText: "  If you take care about your friends and want to make a gift search process easier\n" +
                "                                    for them, share your desires with Listery. This MVP app allows you to search for\n" +
                "                                    desired items via databases of the biggest web-shops and to share your lists. Our\n" +
                "                                    dev team had a pleasure to arrange the app’s back end part.\n" +
                "                                    Who knows, maybe with this Flutter SDK based product your innermost desires will\n" +
                "                                    finally come true!"
        },
        sliderFive: {
            sliderTitle: "FAVVEL",
            sliderText: "Who’s on top of the world? Best film,\n" +
                "                                    most appreciated musical album or eminent athlete – with FAVVEL SaaS web service\n" +
                "                                    creating and sharing personal lists becomes simple as ever. Based on MERN stack,\n" +
                "                                    this app serves a great example of how an idea of individual entrepreneur can\n" +
                "                                    transform into a custom software product in a couple of months."
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
                "                                    invitations and win some incentives."
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
        <div id="carouselExampleIndicators_1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <SliderComponentSchema sliderComponentDataText={sliderComponentDataText} />
                <div className="carousel-item active">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne borderLeft borderLeft"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={ct2} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={ct3} className="tableOneIcon4" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop">
                                    SaaS Development Services
                                </h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponentDataText.sliderOne.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponentDataText.sliderOne.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    React/React Native<br/>
                                    Next.js<br/>
                                    Node.js (Express)<br/>
                                    Postgres<br/>
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne borderLeft"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={goPrintTwo} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={goPrintThree} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={goPrintFour} className="tableOneIcon4" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop">
                                    SaaS Development Services
                                </h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponentDataText.sliderTwo.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponentDataText.sliderTwo.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    React/React Native<br/>
                                    Next.js<br/>
                                    Node.js (Express)<br/>
                                    Postgres<br/>
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne borderLeft"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img id="tableOneIcon425" src={danfosHeatSelector1} className="tableOneIcon4"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img id="tableOneIcon425" src={danfosHeatSelector2} className="tableOneIcon4"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img id="tableOneIcon425" src={danfosHeatSelector3} className="tableOneIcon4"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img id="tableOneIcon425" src={danfosHeatSelector4} className="tableOneIcon4"
                                         loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop">
                                    SaaS Development Services
                                </h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponentDataText.sliderThree.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponentDataText.sliderThree.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    C#<br/>
                                    .NET MVC<br/>
                                    ReactJS<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne borderLeft"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={listery} className="tableOneIcon4" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop">
                                    SaaS Development Services
                                </h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponentDataText.sliderFour.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponentDataText.sliderFour.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    Flutter<br/>
                                    Node.js (Express)<br/>
                                    Mongo<br/>
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne borderLeft"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={favvel} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={favvel2} className="tableOneIcon4" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop">
                                    SaaS Development Services
                                </h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponentDataText.sliderFive.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponentDataText.sliderFive.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    React<br/>
                                    Node.js<br/>
                                    Mongo DB<br/>
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne borderLeft"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img id="tableOneIcon425" src={danfosEasyPlan1} className="tableOneIcon4"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img id="tableOneIcon425" src={danfosEasyPlan2} className="tableOneIcon4"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img id="tableOneIcon425" src={danfosEasyPlan3} className="tableOneIcon4"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img id="tableOneIcon425" src={danfosEasyPlan4} className="tableOneIcon4"
                                         loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop">
                                    SaaS Development Services
                                </h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponentDataText.sliderSix.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponentDataText.sliderSix.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    React<br/>
                                    Node.js<br/>
                                    Mongo DB<br/>
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne borderLeft"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={total} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={total2} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={total3} className="tableOneIcon4" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop">
                                    SaaS Development Services
                                </h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponentDataText.sliderSeven.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponentDataText.sliderSeven.sliderText}

                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    React<br/>
                                    Node.js<br/>
                                    Postgres<br/>
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne borderLeft"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={loko} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={loko2} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={loko3} className="tableOneIcon4" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableLineOne"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop">
                                    SaaS Development Services
                                </h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponentDataText.sliderEight.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">{sliderComponentDataText.sliderEight.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    React<br/>
                                    Node.js<br/>
                                    Mongo DB<br/>
                                    Docker
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators_1" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators_1" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
        </div>
    )
}

export default SliderComponent
