import React from "react";
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import shadow2 from "../assets/shadowTwo.png";
import tableTwoTwo from "../assets/tableTwoTwo.svg";
import inmore2 from "../assets/InMore_900x1025.png"
import inmore3 from "../assets/InMore_900x1025-2.png"
import inmore4 from "../assets/InMore_900x1025-3.png"
import leamum1 from "../assets/Lean-900x1025-2.png"
import leamum2 from "../assets/Lean-900x1025-3.png"
import Slider from "react-slick";
import goPrintWeb1 from "../assets/web-900x1025.png"
import goPrintWeb2 from "../assets/web-900x1025-2.png"
import goPrintWeb3 from "../assets/web-900x1025-2-2.png"
import goPrintWeb4 from "../assets/web-900x1025-3.png"
import HeadBikes1 from "../assets/Head_900x1025.png"
import HeadBikes2 from "../assets/Head_900x1025-02.png"
import ct from "../assets/CT-web-900x1025-1.png";
import ct2 from "../assets/CT-web-900x1025-2.png";
import ct3 from "../assets/CT-web-900x1025-3.png";
import ct4 from "../assets/CT-web-900x1025-4.png";
import {JsonLd} from "react-schemaorg";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const SliderComponent2Schema = ({sliderComponent2DataText}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'SliderComponent2Schema',
                    sliderOne: {
                        sliderTitle: sliderComponent2DataText.sliderOne.sliderTitle,
                        sliderText: sliderComponent2DataText.sliderOne.sliderText,
                        instruments: sliderComponent2DataText.sliderOne.instruments
                    },
                    sliderTwo: {
                        sliderTitle: sliderComponent2DataText.sliderTwo.sliderTitle,
                        sliderText: sliderComponent2DataText.sliderTwo.sliderText,
                        instruments: {
                            instruments1: sliderComponent2DataText.sliderTwo.instruments1,
                            instruments2: sliderComponent2DataText.sliderTwo.instruments2,
                            instruments3: sliderComponent2DataText.sliderTwo.instruments3,
                            instruments4: sliderComponent2DataText.sliderTwo.instruments4,
                            instruments5: sliderComponent2DataText.sliderTwo.instruments5,
                        }
                    },
                    sliderThree: {
                        sliderTitle: sliderComponent2DataText.sliderThree.sliderTitle,
                        sliderText: sliderComponent2DataText.sliderThree.sliderText,
                    },
                    sliderFour: {
                        sliderTitle: sliderComponent2DataText.sliderFour.sliderTitle,
                        sliderText: sliderComponent2DataText.sliderFour.sliderText,
                        instruments: sliderComponent2DataText.sliderFour.instruments
                    },
                    sliderFive: {
                        sliderTitle: sliderComponent2DataText.sliderFive.sliderTitle,
                        sliderText: sliderComponent2DataText.sliderFive.sliderText
                    }
                }}
            />
        )
    }
    const sliderComponent2DataText = {
        sliderOne: {
            sliderTitle: "In&More",
            sliderText: "This website was created for the interior design bureau placed in Berlin. The\n" +
                "                                    product is\n" +
                "                                    Word Press based and maximum attention was payed to SEO regarding wide geography of\n" +
                "                                    the\n" +
                "                                    bureau’s customers. We have created the semantic cores for English, Russian and\n" +
                "                                    German\n" +
                "                                    languages basing on data from 9 European countries. Quite a huge job, still\n" +
                "                                    effective!",
            instruments: "Word Press"

        },
        sliderTwo: {
            sliderTitle: "GoPrint Web",
            sliderText: "What about automation of printing services? We made it self-service! NMS Team took\n" +
                "                                    responsibility for the full scale of works including Web Design and Web SaaS which\n" +
                "                                    is\n" +
                "                                    mirroring an app`s functionality. We have also integrated a new Delivery service\n" +
                "                                    that\n" +
                "                                    aims to become an alternative monetization channel for the product.",
            instruments: {
                instruments1: "React",
                instruments2: "Next.js",
                instruments3: "Node.js (Express)",
                instruments4: "Postgres",
                instruments5: "Docker",
            }
        },
        sliderThree: {
            sliderTitle: "CharyTime Web",
            sliderText: "  A lot of people in the world want to support charity organizations, however, not all\n" +
                "                                    of\n" +
                "                                    them have money for that. What if to convert CTP into money that could be donated to\n" +
                "                                    a\n" +
                "                                    selected charity organization? What if to create a digital solution to make good\n" +
                "                                    things\n" +
                "                                    trendy? CharyTime is a unique app that allows you to “donate your time”. NMS Team\n" +
                "                                    made a\n" +
                "                                    new version of the application with extra features including new web SaaS and\n" +
                "                                    Landing\n" +
                "                                    Page.",
        },
        sliderFour: {
            sliderTitle: "Head Bikes",
            sliderText: " We really enjoy developing custom web products! Still sometimes projects created\n" +
                "                                    from a scratch seem to be clearly redundant and cloud platforms like WIX or Tilda\n" +
                "                                    can be a solution. Using the Tilda web shop solution, we have created a functional\n" +
                "                                    online store for the Official Distributor of HEAD bikes. Looks great, works fine,\n" +
                "                                    created quickly like a blast!",
            instruments: "Tilda Cloud Website Platform"
        },
        sliderFive: {
            sliderTitle: "LEMAUM",
            sliderText: "     Sometimes when you have no extra time to arrange an advertising company scheduled\n" +
                "                                    for\n" +
                "                                    “yesterday”, fast yet effective solutions should be used. With a Tilda solution we\n" +
                "                                    have\n" +
                "                                    created a landing page for quite a unique fertilizer called Leamum in just 3 days\n" +
                "                                    including development of custom design. Informative, nice looking, with simple and\n" +
                "                                    functional feedback form – that’s how we define it."
        }
    }
    return (
        <div id="carouselExampleIndicators_2" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <SliderComponent2Schema sliderComponent2DataText={sliderComponent2DataText} />
                <div className="carousel-item active">
                    <div className="bootstrap__tableTwo">
                        <div className="bootstrap__tableTwoLeft">
                            <div className="bootstrap__tableLineTwo borderLeft"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableTwoLeftInfo">
                                <h1 className="bootstrap__tableTitleFirst bootstrap__tableTwoLeftInfoContent">Professional
                                    Web Development
                                    Services</h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponent2DataText.sliderOne.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponent2DataText.sliderOne.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    {sliderComponent2DataText.sliderOne.instruments}
                                </p>
                            </div>
                        </div>
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={inmore2} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={inmore3} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={inmore4} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__tableTwo">
                        <div className="bootstrap__tableTwoLeft">
                            <div className="bootstrap__tableLineTwo borderLeft"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableTwoLeftInfo">
                                <h1 className="bootstrap__tableTitleFirst bootstrap__tableTwoLeftInfoContent">Professional
                                    Web Development
                                    Services</h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponent2DataText.sliderTwo.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponent2DataText.sliderTwo.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments1}<br/>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments2}<br/>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments3}<br/>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments4}<br/>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments5}<br/>
                                </p>
                            </div>
                        </div>
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={goPrintWeb1} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={goPrintWeb2} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={goPrintWeb3} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={goPrintWeb4} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__tableTwo">
                        <div className="bootstrap__tableTwoLeft">
                            <div className="bootstrap__tableLineTwo borderLeft"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableTwoLeftInfo">
                                <h1 className="bootstrap__tableTitleFirst bootstrap__tableTwoLeftInfoContent">Professional
                                    Web Development
                                    Services</h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponent2DataText.sliderThree.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponent2DataText.sliderThree.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments1}<br/>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments2}<br/>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments3}<br/>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments4}<br/>
                                    {sliderComponent2DataText.sliderTwo.instruments.instruments5}<br/>
                                </p>
                            </div>
                        </div>
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableTwoIcon1"/>
                                    <img src={table1pryamogolnik} className="tableTwoIcon2" loading="lazy"/>
                                    <img src={ct} className="tableTwoIcon3Slider2" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableTwoIcon1"/>
                                    <img src={table1pryamogolnik} className="tableTwoIcon2" loading="lazy"/>
                                    <img src={ct2} className="tableTwoIcon3Slider2" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableTwoIcon1"/>
                                    <img src={table1pryamogolnik} className="tableTwoIcon2" loading="lazy"/>
                                    <img src={ct3} className="tableTwoIcon3Slider2" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableTwoIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={ct4} className="tableTwoIcon3Slider2" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__tableTwo">
                        <div className="bootstrap__tableTwoLeft">
                            <div className="bootstrap__tableLineTwo borderLeft"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableTwoLeftInfo">
                                <h1 className="bootstrap__tableTitleFirst bootstrap__tableTwoLeftInfoContent">Professional
                                    Web Development
                                    Services</h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponent2DataText.sliderFour.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponent2DataText.sliderFour.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    {sliderComponent2DataText.sliderFour.instruments}
                                </p>
                            </div>
                        </div>
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={HeadBikes1} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={HeadBikes2} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__tableTwo">
                        <div className="bootstrap__tableTwoLeft">
                            <div className="bootstrap__tableLineTwo borderLeft"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableTwoLeftInfo">
                                <h1 className="bootstrap__tableTitleFirst bootstrap__tableTwoLeftInfoContent">Professional
                                    Web Development
                                    Services</h1>
                                <h2 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    {sliderComponent2DataText.sliderFive.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponent2DataText.sliderFive.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    {sliderComponent2DataText.sliderFour.instruments}
                                </p>
                            </div>
                        </div>
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={leamum1} loading="lazy" className="tableTwoIcon3Slider2" id="iconLEAMUM"/>
                                </div>
                                <div>
                                    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>
                                    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>
                                    <img src={leamum2} loading="lazy" className="tableTwoIcon3Slider2"/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators_2" role="button"
                   data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators_2" role="button"
                   data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
        </div>
    )
}

export default SliderComponent
