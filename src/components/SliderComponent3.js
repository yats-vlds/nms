import React from "react";
import tableThree1 from "../assets/tableThree1.png";
import tableTree2 from "../assets/tableThree2.svg";
import tableThree4 from "../assets/tableThree4.svg";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load"

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
                                    {/*<img src={tableThree1} loading="lazy" className="tableThreeIcon1"/>*/}
                                    {/*<img src={tableTree2} loading="lazy" className="tableThreeIcon2"/>*/}
                                    {/*<img src={tableThree4} loading="lazy" className="tableThreeIcon3"/>*/}
                                    {/*/!*<img src={tableThree3} className="icon3TableThree"/>*!/*/}
                                </div>
                                <div>
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
                                <h1 className="bootstrap__tableTitle">
                                    GoPrint
                                </h1>
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
                                    {/*<img src={tableThree1} loading="lazy" className="tableThreeIcon1"/>*/}
                                    {/*<img src={tableTree2} loading="lazy" className="tableThreeIcon2"/>*/}
                                    {/*<img src={tableThree4} loading="lazy" className="tableThreeIcon3"/>*/}
                                    {/*/!*<img src={tableThree3} className="icon3TableThree"/>*!/*/}
                                </div>
                                <div>
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
                                <h1 className="bootstrap__tableTitle">
                                    In&More
                                </h1>
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
                                    {/*<img src={tableThree1} loading="lazy" className="tableThreeIcon1"/>*/}
                                    {/*<img src={tableTree2} loading="lazy" className="tableThreeIcon2"/>*/}
                                    {/*<img src={tableThree4} loading="lazy" className="tableThreeIcon3"/>*/}
                                    {/*/!*<img src={tableThree3} className="icon3TableThree"/>*!/*/}
                                </div>
                                <div>
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
                                <h1 className="bootstrap__tableTitle">
                                    Ukrtelecom Corporate Portal
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Challenge
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    Ukrtelecom is of the biggest providers of fixed-line and mobile telephony as well as
                                    high-speed internet. Having a team of about 15 000 employees, Ukrtelecom uses the
                                    Bitrix24 system for internal communication. Functional yet not very attractive
                                    looking, Bitrix needed a stylish skin to be accepted by the UKT team. Thus we have
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
