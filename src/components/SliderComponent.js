import React from "react";
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import sloygoPrint from "../assets/sloygoPrint.svg";
import goPrintOriginal from "../assets/goPrintOriginal.svg";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load"
import goPrintTwo from "../assets/GoPrint_900x1025.png"
import goPrintThree from "../assets/GoPrint_900x1025-2.png"
import goPrintFour from "../assets/GoPrint_900x1025-3.png"
import total from "../assets/total-900x1025-01.png"
import total2 from "../assets/total-900x1025-02.png"
import total3 from "../assets/total-900x1025-03.png"
import loko from "../assets/LocoMoco-900x1025-01.png"
import loko2 from "../assets/LocoMoco-900x1025-02.png"
import loko3 from "../assets/LocoMoco-900x1025-03.png"

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
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    {/*<img src={sloygoPrint} className="tableOneIcon3" loading="lazy"/>*/}
                                    <img src={goPrintTwo} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    {/*<img src={sloygoPrint} className="tableOneIcon3" loading="lazy"/>*/}
                                    <img src={goPrintThree} className="tableOneIcon4" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    {/*<img src={sloygoPrint} className="tableOneIcon3" loading="lazy"/>*/}
                                    <img src={goPrintFour} className="tableOneIcon4Slider4" loading="lazy"/>
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
                                    <img src={total} className="tableOneIcon3" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={total2} className="tableOneIcon3" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={total3} className="tableOneIcon3" loading="lazy"/>
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
                                    TOTAL Safety Circle
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">Total Safety Circle is a custom web
                                    product developed for Total Energy’s promotional campaign. Being created within the
                                    React / NodeJS framework, the product possessed gamified mechanics which allowed
                                    users to create so called “safety circles” for people they care, distribute
                                    invitations and win some incentives.
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
                                    <img src={loko} className="tableOneIcon3" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={loko2} className="tableOneIcon3" loading="lazy"/>
                                </div>
                                <div>
                                    <img src={shadow} className="tableOneIcon1"/>
                                    <img src={table1pryamogolnik} className="tableOneIcon2" loading="lazy"/>
                                    <img src={loko3} className="tableOneIcon3" loading="lazy"/>
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
                                    The Loko-Moko Game
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">This web application has been developed
                                    to promote products under the Loko-Moko Brand for Lactalis, the Global producer of
                                    whey and milk products.
                                    Using a popular Rio cartoon theme we’ve developed a custom UI design and back end
                                    for a promotional game app which allowed users to spend some nice time and learn
                                    more about Loko-Moko line. Opening new game levels needed usage of a special promo
                                    code, thus online activity was unified with BTL events.
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
