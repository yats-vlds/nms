import React from "react";
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import sloygoPrint from "../assets/sloygoPrint.svg";
import goPrintOriginal from "../assets/goPrintOriginal.svg";
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
                                    GoPrint
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    What about automation of printing services? We made it self-service. NMS Team took
                                    responsibility for the full scale of works including UI/UX design, web SaaS,
                                    cross-platform custom mobile applications development, Backend development, Admin
                                    Dashboard creation and unique programming solution for the innovative remote
                                    printing terminals.</p>
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
                {/*<div className="carousel-item">*/}
                {/*    <div className="bootstrap__table bootstrap__tableOne">*/}
                {/*        <div className="bootstrap__tableLeft">*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <Slider {...settings} className="slider-subslider">*/}
                {/*                <div>*/}
                {/*                    /!*<img src={shadow} className="tableOneIcon1"/>*!/*/}
                {/*                    /!*<img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>*!/*/}
                {/*                    /!*<img src={sloygoPrint} className="tableOneIcon3" loading="lazy"/>*!/*/}
                {/*                    /!*<img src={goPrintOriginal} className="tableOneIcon4" loading="lazy"/>*!/*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                </div>*/}
                {/*            </Slider>*/}
                {/*        </div>*/}
                {/*        <div className="bootstrap__tableRight">*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableLineOne"></div>*/}
                {/*            <div className="bootstrap__tableRightInfo">*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__marginTop">*/}
                {/*                    SaaS Development Services*/}
                {/*                </h1>*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">*/}
                {/*                    Listery*/}
                {/*                </h1>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Idea*/}
                {/*                </h3>*/}
                {/*                <p className="bootstrap__tableText marginBottom">If you take care about your friends and*/}
                {/*                    want to make a gift search process easier for them, share your desires with Listery.*/}
                {/*                    This MVP app allows you to search for desired items via databases of the biggest*/}
                {/*                    web-shops and to share your lists. Our dev team had a pleasure to arrange the app’s*/}
                {/*                    back end part.<br/>*/}
                {/*                    Who knows, maybe with this Flutter SDK based product your innermost desires will*/}
                {/*                    finally come true!*/}
                {/*                </p>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Tech Picture*/}
                {/*                </h3>*/}
                {/*                <p>*/}
                {/*                    Flutter<br/>*/}
                {/*                    Node.js (Express)<br/>*/}
                {/*                    Mongo<br/>*/}
                {/*                    Docker*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
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
