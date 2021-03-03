import React from "react";
import yog from "../assets/yog.svg"
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import sloygoPrint from "../assets/sloygoPrint.svg";
import goPrintOriginal from "../assets/goPrintOriginal.svg";
import shadow2 from "../assets/shadowTwo.png";
import tableTwoTwo from "../assets/tableTwoTwo.svg";
import inmore from "../assets/inmore.svg";
import tableThree1 from "../assets/tableThree1.png";
import tableTree2 from "../assets/tableThree2.svg";
import tableThree4 from "../assets/tableThree4.svg";
import Slider from "react-slick";

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div id="carouselExampleIndicators_1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne"></div>
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
                                    <img src={sloygoPrint} className="tableOneIcon3" loading="lazy"/>
                                    <img src={goPrintOriginal} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
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
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    Project name
                                </h1>
                                <p className="bootstrap__tableText marginBottom">No matter what type of your
                                    work you do, NMS customized
                                    software development will fulfill your needs. No matter
                                    what type of your work you do, NMS customized software
                                    development will fulfill your needstjxfyk uirtftyityerytyt.
                                    software development will fulfill your needs. No matter
                                    what type of your work you do, NMS customized software
                                    development will fulfill your needstjxfyk uirtftyityerytyt.</p>
                                <h4 className="bootstrap__tableTwoTitle">
                                    Design, UX, UI, Java <br/>
                                    Web, Logo, Brend
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="bootstrap__table bootstrap__tableOne">
                        <div className="bootstrap__tableLeft">
                            <div className="bootstrap__tableLineOne"></div>
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
                                    <img src={sloygoPrint} className="tableOneIcon3" loading="lazy"/>
                                    <img src={goPrintOriginal} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
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
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    Project name
                                </h1>
                                <p className="bootstrap__tableText marginBottom">No matter what type of your
                                    work you do, NMS customized
                                    software development will fulfill your needs. No matter
                                    what type of your work you do, NMS customized software
                                    development will fulfill your needstjxfyk uirtftyityerytyt.
                                    software development will fulfill your needs. No matter
                                    what type of your work you do, NMS customized software
                                    development will fulfill your needstjxfyk uirtftyityerytyt.</p>
                                <h4 className="bootstrap__tableTwoTitle">
                                    Design, UX, UI, Java <br/>
                                    Web, Logo, Brend
                                </h4>
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