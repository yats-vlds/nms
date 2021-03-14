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
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    Listery
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    If you take care about your friends and want to make a gift search process easier
                                    for them, share your desires with Listery. This MVP app allows you to search for
                                    desired items via databases of the biggest web-shops and to share your lists. Our
                                    dev team had a pleasure to arrange the app’s back end part.
                                    Who knows, maybe with this Flutter SDK based product your innermost desires will
                                    finally come true!
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
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    Chary Time
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    A lot of people in the world want to support charity organizations, however, not all
                                    of them have money for that. What if to convert CTP into money that could be donated
                                    to a selected charity organization? What if to create a digital solution to make
                                    good things trendy? CharyTime is a unique app that allows you to “donate your time”.
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
                                    FAVVEL
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">Who’s on top of the world? Best film,
                                    most appreciated musical album or eminent athlete – with FAVVEL SaaS web service
                                    creating and sharing personal lists becomes simple as ever. Based on MERN stack,
                                    this app serves a great example of how an idea of individual entrepreneur can
                                    transform into a custom software product in a couple of months.
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
                                    Danfoss Heat Selector
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    ECtemp Touch – is a smart thermostat created by Danfoss. To give users a possibility
                                    to use the functionality of this Smart Home solution for 100%, we have created a
                                    virtual instrument which allows to create special HEXA code according to specific
                                    ECtemp Touch thermostat’s settings in order to have two-way communication and to
                                    setup them by distance.
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
                                    Danfoss Veria EasyPlan
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">The Flash epoch is over and it’s a
                                    right time to switch your application to an up-to-date framework. Danfoss Veria
                                    EasyPlan is a convenient web app allowing house builders and end customers to plan
                                    usage of heating mats from one of the world leaders in the field of smart home
                                    solutions. Our product is fully responsive, in addition all needed calculations are
                                    provided on the front end side, making EasyPlan quite a refined product.
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
