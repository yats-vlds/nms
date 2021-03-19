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


const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div id="carouselExampleIndicators_3" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <div className="bootstrap__table bootstrap__tableThree">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineThree"></div>
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
                                    <img src={GoPrintDesign1} className="tableOneIcon4" id="tableOneIcon425" id="tableOneIcon425" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={GoPrintDesign2} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={GoPrintDesign3} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={GoPrintDesign4} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
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
                                    GoPrint
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Challenge
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    Creation of visual identity and UX/UI Product Design for the GoPrint remote printing
                                    service and GoPrint Delivery, as well as static and animated materials for the
                                    digital promotion.
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Instruments
                                </h3>
                                <p>
                                    Adobe Photoshop<br/>
                                    Illustrator<br/>
                                    After Effects<br/>
                                    Figma<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableThree">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineThree"></div>
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
                                    <img src={UkrTelecom1} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={UkrTelecom2} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={UkrTelecom3} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                                </div>
                            </Slider>
                        </div>
                        <div className="bootstrap__tableRight">
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
                                    Ukrtelecom Corporate Portal
                                </h2>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Challenge
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    Ukrtelecom is of the biggest providers of fixed-line and mobile telephony as well as
                                    high-speed internet. Having a team of about 15 000 employees. Thus we have
                                    created a unique interface of the corporate portal, including messengers and all
                                    other functional components.
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Instruments
                                </h3>
                                <p>
                                    Bitrix24<br/>
                                    Adobe Photoshop<br/>
                                    Illustrator
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="bootstrap__table bootstrap__tableThree">
                    <div className="bootstrap__tableLeft">
                        <div className="bootstrap__tableLineThree"></div>
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
                                <img src={InMoreDesign1} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                            </div>
                            <div>
                                <img src={shadow} className="tableOneIcon1"/>
                                <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                <img src={InMoreDesign2} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                            </div>
                            <div>
                                <img src={shadow} className="tableOneIcon1"/>
                                <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                <img src={InMoreDesign3} className="tableOneIcon4" id="tableOneIcon425" loading="lazy"/>
                            </div>
                        </Slider>
                    </div>
                    <div className="bootstrap__tableRight">
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
                                In&More
                            </h2>
                            <h3 className="bootstrap__tableTwoTitle">
                                Challenge
                            </h3>
                            <p className="bootstrap__tableText marginBottom">
                                Creation of the website for the interior design bureau placed in Berlin. The product
                                is Word Press based so it definitely needed something stylish and fresh to look
                                great! Simple and easy – that’s what perfectly suits successful businesses!
                            </p>
                            <h3 className="bootstrap__tableTwoTitle">
                                Instruments
                            </h3>
                            <p>
                                Adobe Photoshop<br/>
                                Illustrator<br/>
                                Webflow
                            </p>
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
