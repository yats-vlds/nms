import React from "react";
import yog from "../assets/yog.svg"
import shadow from "../assets/shadow.png";
import table1pryamogolnik from "../assets/table1Pryamogolnik.svg";
import sloygoPrint from "../assets/sloygoPrint.svg";
import goPrintOriginal from "../assets/goPrintOriginal.svg";
import shadow2 from "../assets/shadowTwo.png";
import tableTwoTwo from "../assets/tableTwoTwo.svg";
import inmore from "../assets/inmore.svg";
import inmore2 from "../assets/InMore_900x1025.png"
import inmore3 from "../assets/InMore_900x1025-2.png"
import inmore4 from "../assets/InMore_900x1025-3.png"
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
        <div id="carouselExampleIndicators_2" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                {/*<div className="carousel-item active">*/}
                {/*    <div className="bootstrap__tableTwo">*/}
                {/*        <div className="bootstrap__tableTwoLeft">*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableTwoLeftInfo">*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__tableTwoLeftInfoContent">Professional*/}
                {/*                    Web Development*/}
                {/*                    Services</h1>*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">*/}
                {/*                    Head Bikes*/}
                {/*                </h1>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Idea*/}
                {/*                </h3>*/}
                {/*                <p className="bootstrap__tableText marginBottom">*/}
                {/*                    We really enjoy developing custom web products! Still sometimes projects created*/}
                {/*                    from a scratch seem to be clearly redundant and cloud platforms like WIX or Tilda*/}
                {/*                    can be a solution. Using the Tilda web shop solution, we have created a functional*/}
                {/*                    online store for the Official Distributor of HEAD bikes. Looks great, works fine,*/}
                {/*                    created quickly like a blast!*/}
                {/*                </p>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Tech Picture*/}
                {/*                </h3>*/}
                {/*                <p>*/}
                {/*                    Tilda Cloud Website Platform*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="bootstrap__tableLeft">*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <Slider {...settings} className="slider-subslider">*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore} loading="lazy" className="tableTwoIcon3"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore2} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore3} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore4} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*            </Slider>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <div className="bootstrap__tableTwo">*/}
                {/*        <div className="bootstrap__tableTwoLeft">*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableTwoLeftInfo">*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__tableTwoLeftInfoContent">Professional*/}
                {/*                    Web Development*/}
                {/*                    Services</h1>*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">*/}
                {/*                    LEANU*/}
                {/*                </h1>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Idea*/}
                {/*                </h3>*/}
                {/*                <p className="bootstrap__tableText marginBottom">*/}
                {/*                    Sometimes when you have no extra time to arrange an advertising company scheduled*/}
                {/*                    for*/}
                {/*                    “yesterday”, fast yet effective solutions should be used. With a Tilda solution we*/}
                {/*                    have*/}
                {/*                    created a landing page for quite a unique fertilizer called Leanum in just 3 days*/}
                {/*                    including development of custom design. Informative, nice looking, with simple and*/}
                {/*                    functional feedback form – that’s how we define it.*/}
                {/*                </p>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Tech Picture*/}
                {/*                </h3>*/}
                {/*                <p>*/}
                {/*                    Tilda Cloud Website Platform*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="bootstrap__tableLeft">*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <Slider {...settings} className="slider-subslider">*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore} loading="lazy" className="tableTwoIcon3"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore2} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore3} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore4} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*            </Slider>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <div className="bootstrap__tableTwo">*/}
                {/*        <div className="bootstrap__tableTwoLeft">*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableTwoLeftInfo">*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__tableTwoLeftInfoContent">Professional*/}
                {/*                    Web Development*/}
                {/*                    Services</h1>*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">*/}
                {/*                    GoPrint Web*/}
                {/*                </h1>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Idea*/}
                {/*                </h3>*/}
                {/*                <p className="bootstrap__tableText marginBottom">*/}
                {/*                    What about automation of printing services? We made it self-service! NMS Team took*/}
                {/*                    responsibility for the full scale of works including Web Design and Web SaaS which*/}
                {/*                    is*/}
                {/*                    mirroring an app`s functionality. We have also integrated a new Delivery service*/}
                {/*                    that*/}
                {/*                    aims to become an alternative monetization channel for the product.*/}
                {/*                </p>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Tech Picture*/}
                {/*                </h3>*/}
                {/*                <p>*/}
                {/*                    React<br/>*/}
                {/*                    Next.js<br/>*/}
                {/*                    Node.js (Express)<br/>*/}
                {/*                    Postgres<br/>*/}
                {/*                    Docker*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="bootstrap__tableLeft">*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <Slider {...settings} className="slider-subslider">*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore} loading="lazy" className="tableTwoIcon3"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore2} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore3} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore4} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*            </Slider>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="carousel-item">*/}
                {/*    <div className="bootstrap__tableTwo">*/}
                {/*        <div className="bootstrap__tableTwoLeft">*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableTwoLeftInfo">*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__tableTwoLeftInfoContent">Professional*/}
                {/*                    Web Development*/}
                {/*                    Services</h1>*/}
                {/*                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">*/}
                {/*                    CharyTime Web*/}
                {/*                </h1>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Idea*/}
                {/*                </h3>*/}
                {/*                <p className="bootstrap__tableText marginBottom">*/}
                {/*                    A lot of people in the world want to support charity organizations, however, not all*/}
                {/*                    of*/}
                {/*                    them have money for that. What if to convert CTP into money that could be donated to*/}
                {/*                    a*/}
                {/*                    selected charity organization? What if to create a digital solution to make good*/}
                {/*                    things*/}
                {/*                    trendy? CharyTime is a unique app that allows you to “donate your time”. NMS Team*/}
                {/*                    made a*/}
                {/*                    new version of the application with extra features including new web SaaS and*/}
                {/*                    Landing*/}
                {/*                    Page.*/}
                {/*                </p>*/}
                {/*                <h3 className="bootstrap__tableTwoTitle">*/}
                {/*                    Tech Picture*/}
                {/*                </h3>*/}
                {/*                <p>*/}
                {/*                    React<br/>*/}
                {/*                    Next.js<br/>*/}
                {/*                    Node.js (Express)<br/>*/}
                {/*                    Postgres<br/>*/}
                {/*                    Docker*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="bootstrap__tableLeft">*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <div className="bootstrap__tableLineTwo"></div>*/}
                {/*            <Slider {...settings} className="slider-subslider">*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore} loading="lazy" className="tableTwoIcon3"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore2} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore3} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*                /!*<div>*!/*/}
                {/*                /!*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*!/*/}
                {/*                /!*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*!/*/}
                {/*                /!*    <img src={inmore4} loading="lazy" className="tableTwoIcon3Slider2"/>*!/*/}
                {/*                /!*</div>*!/*/}
                {/*            </Slider>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="carousel-item active">
                    <div className="bootstrap__tableTwo">
                        <div className="bootstrap__tableTwoLeft">
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableLineTwo"></div>
                            <div className="bootstrap__tableTwoLeftInfo">
                                <h1 className="bootstrap__tableTitle bootstrap__tableTwoLeftInfoContent">Professional
                                    Web Development
                                    Services</h1>
                                <h1 className="bootstrap__tableTitle bootstrap__marginTop40">
                                    In&More
                                </h1>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Idea
                                </h3>
                                <p className="bootstrap__tableText marginBottom">
                                    This website was created for the interior design bureau placed in Berlin. The
                                    product is
                                    Word Press based and maximum attention was payed to SEO regarding wide geography of
                                    the
                                    bureau’s customers. We have created the semantic cores for English, Russian and
                                    German
                                    languages basing on data from 9 European countries. Quite a huge job, still
                                    effective!
                                </p>
                                <h3 className="bootstrap__tableTwoTitle">
                                    Tech Picture
                                </h3>
                                <p>
                                    Word Press
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
                                {/*<div>*/}
                                {/*    <img src={shadow2} loading="lazy" className="tableTwoIcon1"/>*/}
                                {/*    <img src={tableTwoTwo} loading="lazy" className="tableTwoIcon2"/>*/}
                                {/*    <img src={inmore} loading="lazy" className="tableTwoIcon3"/>*/}
                                {/*</div>*/}
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
