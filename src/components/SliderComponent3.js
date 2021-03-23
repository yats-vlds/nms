import React from "react";
import tableThree1 from "../assets/tableThree1.png";
import tableTree2 from "../assets/tableThree2.svg";
import tableThree4 from "../assets/tableThree4.svg";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load"
import UkrTelecom1 from "../assets/UKT-900x1025-01.png"
import UkrTelecom2 from "../assets/UKT-900x1025-02.png"
import UkrTelecom3 from "../assets/UKT-900x1025-03.png"
import GoPrintDesign1 from "../assets/DIZ-900x1025-01.png"
import GoPrintDesign2 from "../assets/DIZ-900x1025-02.png"
import GoPrintDesign3 from "../assets/DIZ-900x1025-03.png"
import GoPrintDesign4 from "../assets/DIZ-900x1025-04.png"
import InMoreDesign1 from "../assets/InMoreDIZ-900x1025-01.png"
import InMoreDesign2 from "../assets/InMoreDIZ-900x1025-02.png"
import InMoreDesign3 from "../assets/InMoreDIZ-900x1025-03.png"
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import {JsonLd} from "react-schemaorg";


const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const SliderComponent3Schema = ({sliderComponent3DataText}) => {
        return (
            <JsonLd
                item={{
                    "@context": "https://schema.org",
                    '@type': 'SliderComponent3Schema',
                    sliderOne: {
                        sliderTitle: sliderComponent3DataText.sliderOne.sliderTitle,
                        sliderText: sliderComponent3DataText.sliderOne.sliderText,
                        instruments: {
                            instruments1: sliderComponent3DataText.sliderOne.instruments.instruments1,
                            instruments2: sliderComponent3DataText.sliderOne.instruments.instruments2,
                            instruments3: sliderComponent3DataText.sliderOne.instruments.instruments3,
                            instruments4: sliderComponent3DataText.sliderOne.instruments.instruments4,
                        }
                    },
                    sliderTwo: {
                        sliderTitle: sliderComponent3DataText.sliderTwo.sliderTitle,
                        sliderText: sliderComponent3DataText.sliderTwo.sliderText,
                        instruments: {
                            instruments1: sliderComponent3DataText.sliderTwo.instruments.instruments1,
                            instruments2: sliderComponent3DataText.sliderTwo.instruments.instruments2,
                            instruments3: sliderComponent3DataText.sliderTwo.instruments.instruments3,
                        }
                    },
                    sliderThree: {
                        sliderTitle: sliderComponent3DataText.sliderThree.sliderTitle,
                        sliderText: sliderComponent3DataText.sliderThree.sliderText,
                        instruments: {
                            instruments1: sliderComponent3DataText.sliderThree.instruments.instruments1,
                            instruments2: sliderComponent3DataText.sliderThree.instruments.instruments2,
                            instruments3: sliderComponent3DataText.sliderThree.instruments.instruments3,
                        }
                    }
                }}
            />
        )
    }
    const sliderComponent3DataText = {
        sliderOne: {
            sliderTitle: "GoPrint",
            sliderText: "Creation of visual identity and UX/UI Product Design for the GoPrint remote printing\n" +
                "                                    service and GoPrint Delivery, as well as static and animated materials for the\n" +
                "                                    digital promotion.",
            instruments: {
                instruments1: "Adobe Photoshop",
                instruments2: "Illustrator",
                instruments3: "After Effects",
                instruments4: "Figma",
            }
        },
        sliderTwo: {
            sliderTitle: "Ukrtelecom Corporate Portal",
            sliderText: " Ukrtelecom is of the biggest providers of fixed-line and mobile telephony as well as\n" +
                "                                    high-speed internet. Having a team of about 15 000 employees. Thus we have\n" +
                "                                    created a unique interface of the corporate portal, including messengers and all\n" +
                "                                    other functional components.",
                instruments: {
                    instruments1: "Bitrix24",
                    instruments2: "Adobe Photoshop",
                    instruments3: "Illustrator",
                },
        },
        sliderThree: {
            sliderTitle: "In&More",
            sliderText: "  Creation of the website for the interior design bureau placed in Berlin. The product\n" +
                "                                is Word Press based so it definitely needed something stylish and fresh to look\n" +
                "                                great! Simple and easy – that’s what perfectly suits successful businesses!"
        ,
            instruments: {
                instruments1: "Adobe Photoshop",
                instruments2: "Illustrator",
                instruments3: "Webflow",

            },
        }
    }

    return (
        <div id="carouselExampleIndicators_3" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner ">
                <SliderComponent3Schema sliderComponent3DataText={sliderComponent3DataText}/>
                <div className="carousel-item active">
                    <div className="bootstrap__table bootstrap__tableThree">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineThree borderLeft"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={GoPrintDesign1} className="tableOneIcon4" id="tableOneIcon425"
                                         id="tableOneIcon425" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={GoPrintDesign2} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={GoPrintDesign3} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={GoPrintDesign4} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight borderRight">
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap_tableRightContentTitle">
                                    UI/UX Design Services
                                </h1>
                                <h2 className="bootstrap__tableTitle">
                                    {sliderComponent3DataText.sliderOne.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Challenge
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponent3DataText.sliderOne.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Instruments
                                </h3>
                                <p>
                                    {sliderComponent3DataText.sliderOne.instruments.instruments1}<br/>
                                    {sliderComponent3DataText.sliderOne.instruments.instruments2}<br/>
                                    {sliderComponent3DataText.sliderOne.instruments.instruments3}<br/>
                                    {sliderComponent3DataText.sliderOne.instruments.instruments4}<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableThree">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineThree borderLeft"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={UkrTelecom1} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={UkrTelecom2} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={UkrTelecom3} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight borderRight">
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap_tableRightContentTitle">
                                    UI/UX Design Services
                                </h1>
                                <h2 className="bootstrap__tableTitle">
                                    {sliderComponent3DataText.sliderTwo.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Challenge
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponent3DataText.sliderTwo.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Instruments
                                </h3>
                                <p>
                                    {sliderComponent3DataText.sliderTwo.instruments.instruments1}<br/>
                                    {sliderComponent3DataText.sliderTwo.instruments.instruments2}<br/>
                                    {sliderComponent3DataText.sliderTwo.instruments.instruments3}<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableThree">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineThree borderLeft"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <Slider {...settings} className="slider-subslider">
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={InMoreDesign1} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={InMoreDesign2} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={InMoreDesign3} className="tableOneIcon4" id="tableOneIcon425"
                                         loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight borderRight">
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableLineThree"></div>
                            <div className="bootstrap__tableRightInfo">
                                <h1 className="bootstrap__tableTitle bootstrap_tableRightContentTitle">
                                    UI/UX Design Services
                                </h1>
                                <h2 className="bootstrap__tableTitle">
                                    {sliderComponent3DataText.sliderThree.sliderTitle}
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Challenge
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    {sliderComponent3DataText.sliderThree.sliderText}
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Instruments
                                </h3>
                                <p>
                                    {sliderComponent3DataText.sliderThree.instruments.instruments1}<br/>
                                    {sliderComponent3DataText.sliderThree.instruments.instruments2}<br/>
                                    {sliderComponent3DataText.sliderThree.instruments.instruments3}<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators_3" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators_3" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
        </div>
    )
}

export default SliderComponent
