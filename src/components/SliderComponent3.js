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
            <div className="carousel-inner">
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
                                    <img src={tableThree1} loading="lazy" className="tableThreeIcon1"/>
                                    <img src={tableTree2} loading="lazy" className="tableThreeIcon2"/>
                                    <img src={tableThree4} loading="lazy" className="tableThreeIcon3"/>
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
                                    Project name
                                </h1>
                                <p className="bootstrap__tableText marginBottom">
                                    No matter what type of your work you do, NMS customized
                                    software development will fulfill your needs. No matter
                                    what type of your work you do, NMS customized software
                                    development will fulfill your needstjxfyk uirtftyityerytyt.
                                    software development will fulfill your needs. No matter
                                    what type of your work you do, NMS customized software
                                    development will fulfill your needstjxfyk uirtftyityerytyt.
                                </p>
                                <h1 className="bootstrap__tableTwoTitle">
                                    Dev, Design, UX
                                    Java, UI
                                </h1>
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
