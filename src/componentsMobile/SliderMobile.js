import React, {Component} from "react";
import Slider from "react-slick";
import goPrintTwo from "../assets/GoPrint_900x1025.png";
import goPrintThree from "../assets/GoPrint_900x1025-2.png";
import goPrintFour from "../assets/GoPrint_900x1025-3.png";
import ct2 from "../assets/CT-900x1025(2).png";
import ct3 from "../assets/CT-900x1025-3.png";
import danfosHeatSelector1 from "../assets/DanHS-900x1025.png";
import danfosHeatSelector2 from "../assets/DanHS-900x1025-2.png";
import danfosHeatSelector3 from "../assets/DanHS-900x1025-3.png";
import danfosHeatSelector4 from "../assets/DanHS-900x1025-4.png";
import listery from "../assets/Li-900x1025.png";
import favvel from "../assets/FA-900x1025.png";
import favvel2 from "../assets/FA-900x1025-2.png";
import danfosEasyPlan1 from "../assets/2-DanVEP-900x1025.png";
import danfosEasyPlan2 from "../assets/DanVEP-900x1025.png";
import danfosEasyPlan3 from "../assets/DanVEP-900x1025-2.png";
import danfosEasyPlan4 from "../assets/DanVEP-900x1025-3.png";
import total from "../assets/total-900x1025-01.png";
import total2 from "../assets/total-900x1025-02.png";
import total3 from "../assets/total-900x1025-03.png";
import loko from "../assets/LocoMoco-900x1025-01.png";
import loko2 from "../assets/LocoMoco-900x1025-02.png";
import loko3 from "../assets/LocoMoco-900x1025-03.png";

export default class SliderMobile extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const sliderComponentDataText = {
            sliderOne: {
                sliderTitle: "Chary Time",
                sliderText: "  A lot of people in the world want to support charity organizations, however, not all\n" +
                    "                                    of them have money for that. What if to convert CTP into money that could be donated\n" +
                    "                                    to a selected charity organization? What if to create a digital solution to make\n" +
                    "                                    good things trendy? CharyTime is a unique app that allows you to “donate your time”.",
                instruments: {
                    instruments1: "React/React-Native",
                    instruments2: "Next.js",
                    instruments3: "Node.js (Express)",
                    instruments4: "Postgres",
                    instruments5: "Docker",
                }
            },
            sliderTwo: {
                sliderTitle: "GoPrint",
                sliderText: "What about automation of printing services? We made it self-service. NMS Team took\n" +
                    "                                    responsibility for the full scale of works including UI/UX design, web SaaS,\n" +
                    "                                    cross-platform custom mobile applications development, Backend development, Admin\n" +
                    "                                    Dashboard creation and unique programming solution for the innovative remote\n" +
                    "                                    printing terminals"
            },
            sliderThree: {
                sliderTitle: "Danfoss Heat",
                sliderText: "ECtemp Touch – is a smart thermostat created by Danfoss. To give users a possibility\n" +
                    "                                    to use the functionality of this Smart Home solution for 100%, we have created a\n" +
                    "                                    virtual instrument which allows to create special HEXA code according to specific\n" +
                    "                                    ECtemp Touch thermostat’s settings in order to have two-way communication and to\n" +
                    "                                    setup them by distance.",
                instruments: {
                    instruments1: "C#",
                    instruments2: ".NET MVC",
                    instruments3: "ReactJS",
                }
            },
            sliderFour: {
                sliderTitle: "Listery",
                sliderText: "  If you take care about your friends and want to make a gift search process easier\n" +
                    "                                    for them, share your desires with Listery. This MVP app allows you to search for\n" +
                    "                                    desired items via databases of the biggest web-shops and to share your lists. Our\n" +
                    "                                    dev team had a pleasure to arrange the app’s back end part.\n" +
                    "                                    Who knows, maybe with this Flutter SDK based product your innermost desires will\n" +
                    "                                    finally come true!",
                instruments: {
                    instruments1: "Flutter",
                    instruments2: "Node.js (Express)",
                    instruments3: "MongoDB",
                    instruments4: "Docker",
                }
            },
            sliderFive: {
                sliderTitle: "FAVVEL",
                sliderText: "Who’s on top of the world? Best film,\n" +
                    "                                    most appreciated musical album or eminent athlete – with FAVVEL SaaS web service\n" +
                    "                                    creating and sharing personal lists becomes simple as ever. Based on MERN stack,\n" +
                    "                                    this app serves a great example of how an idea of individual entrepreneur can\n" +
                    "                                    transform into a custom software product in a couple of months.",
                instruments: {
                    instruments1: "React",
                    instruments2: "Node.js",
                    instruments3: "MongoDB",
                    instruments4: "Docker",
                }
            },
            sliderSix: {
                sliderTitle: "Danfoss Veria",
                sliderText: "The Flash epoch is over and it’s a\n" +
                    "                                    right time to switch your application to an up-to-date framework. Danfoss Veria\n" +
                    "                                    EasyPlan is a convenient web app allowing house builders and end customers to plan\n" +
                    "                                    usage of heating mats from one of the world leaders in the field of smart home\n" +
                    "                                    solutions. Our product is fully responsive, in addition all needed calculations are\n" +
                    "                                    provided on the front end side, making EasyPlan quite a refined product."
            },
            sliderSeven: {
                sliderTitle: "TOTAL Safety",
                sliderText: "Total Safety Circle is a custom web\n" +
                    "                                    product developed for Total Energy’s promotional campaign. Being created within the\n" +
                    "                                    React / NodeJS framework, the product possessed gamified mechanics which allowed\n" +
                    "                                    users to create so called “safety circles” for people they care, distribute\n" +
                    "                                    invitations and win some incentives.",
                instruments: {
                    instruments1: "React",
                    instruments2: "Node.js",
                    instruments3: "Postgres",
                    instruments4: "Docker",
                }
            },
            sliderEight: {
                sliderTitle: "Loko-Moko Game",
                sliderText: "This web application has been developed\n" +
                    "                                    to promote products under the Loko-Moko Brand for Lactalis, the Global producer of\n" +
                    "                                    whey and milk products.\n" +
                    "                                    Using a popular Rio cartoon theme we’ve developed a custom UI design and back end\n" +
                    "                                    for a promotional game app which allowed users to spend some nice time and learn\n" +
                    "                                    more about Loko-Moko line. Opening new game levels needed usage of a special promo\n" +
                    "                                    code, thus online activity was unified with BTL events."
            }
        }

        return (
            <div className="container">
                <Slider ref={c => (this.slider = c, console.log(c))} {...settings}>
                    <div key={1}>
                        <Slider1/>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <h3 className="d-flex">
                                <h6 className="textForArrow">Prev project</h6>
                                <i className="bi bi-caret-left-fill arrowSliderLeft" onClick={this.previous}/>
                                {sliderComponentDataText.sliderOne.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponentDataText.sliderOne.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments1}</li>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments2}</li>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments3}</li>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments4}</li>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments5}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div key={2}>
                        <Slider2/>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <h3 className="d-flex">
                                <h6 className="textForArrow">Prev project</h6>
                                <i className="bi bi-caret-left-fill arrowSliderLeft" onClick={this.previous}/>
                                {sliderComponentDataText.sliderTwo.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponentDataText.sliderTwo.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments1}</li>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments2}</li>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments3}</li>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments4}</li>
                                    <li>{sliderComponentDataText.sliderOne.instruments.instruments5}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div key={3}>
                        <Slider3/>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <h3 className="d-flex">
                                <h6 className="textForArrow">Prev project</h6>
                                <i className="bi bi-caret-left-fill arrowSliderLeft" onClick={this.previous}/>
                                {sliderComponentDataText.sliderThree.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponentDataText.sliderThree.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponentDataText.sliderThree.instruments.instruments1}</li>
                                    <li>{sliderComponentDataText.sliderThree.instruments.instruments2}</li>
                                    <li>{sliderComponentDataText.sliderThree.instruments.instruments3}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div key={4}>
                        <Slider4/>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <h3 className="d-flex">
                                <h6 className="textForArrow">Prev project</h6>
                                <i className="bi bi-caret-left-fill arrowSliderLeft" onClick={this.previous}/>
                                {sliderComponentDataText.sliderFour.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponentDataText.sliderFour.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponentDataText.sliderFour.instruments.instruments1}</li>
                                    <li>{sliderComponentDataText.sliderFour.instruments.instruments2}</li>
                                    <li>{sliderComponentDataText.sliderFour.instruments.instruments3}</li>
                                    <li>{sliderComponentDataText.sliderFour.instruments.instruments4}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div key={5}>
                        <Slider5/>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <h3 className="d-flex">
                                <h6 className="textForArrow">Prev project</h6>
                                <i className="bi bi-caret-left-fill arrowSliderLeft" onClick={this.previous}/>
                                {sliderComponentDataText.sliderFive.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponentDataText.sliderFive.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments1}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments2}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments3}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments4}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div key={6}>
                        <Slider6/>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <h3 className="d-flex">
                                <h6 className="textForArrow">Prev project</h6>
                                <i className="bi bi-caret-left-fill arrowSliderLeft" onClick={this.previous}/>
                                {sliderComponentDataText.sliderSix.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponentDataText.sliderSix.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments1}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments2}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments3}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments4}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div key={7}>
                        <Slider7/>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <h3 className="d-flex">
                                <h6 className="textForArrow">Prev project</h6>
                                <i className="bi bi-caret-left-fill arrowSliderLeft" onClick={this.previous}/>
                                {sliderComponentDataText.sliderSeven.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponentDataText.sliderSeven.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponentDataText.sliderSeven.instruments.instruments1}</li>
                                    <li>{sliderComponentDataText.sliderSeven.instruments.instruments2}</li>
                                    <li>{sliderComponentDataText.sliderSeven.instruments.instruments3}</li>
                                    <li>{sliderComponentDataText.sliderSeven.instruments.instruments4}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div key={8}>
                        <Slider8/>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <h3 className="d-flex">
                                <h6 className="textForArrow">Prev project</h6>
                                <i className="bi bi-caret-left-fill arrowSliderLeft" onClick={this.previous}/>
                                {sliderComponentDataText.sliderEight.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponentDataText.sliderEight.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments1}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments2}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments3}</li>
                                    <li>{sliderComponentDataText.sliderFive.instruments.instruments4}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}


class Slider1 extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previous}/>
                        <img src={ct2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.next}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previous}/>
                        <img src={ct3} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.next}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider2 extends Component {
    constructor(props) {
        super(props);
        this.nexts = this.nexts.bind(this);
        this.previouss = this.previouss.bind(this);
    }

    nexts() {
        this.slider.slickNext();
    }

    previouss() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={goPrintTwo} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={goPrintThree} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={goPrintFour} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider3 extends Component {
    constructor(props) {
        super(props);
        this.nexts = this.nexts.bind(this);
        this.previouss = this.previouss.bind(this);
    }

    nexts() {
        this.slider.slickNext();
    }

    previouss() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={danfosHeatSelector1}
                             loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={danfosHeatSelector2}
                             loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={danfosHeatSelector3}
                             loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={4} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={danfosHeatSelector4}
                             loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider4 extends Component {
    constructor(props) {
        super(props);
        this.nexts = this.nexts.bind(this);
        this.previouss = this.previouss.bind(this);
    }

    nexts() {
        this.slider.slickNext();
    }

    previouss() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={listery} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider5 extends Component {
    constructor(props) {
        super(props);
        this.nexts = this.nexts.bind(this);
        this.previouss = this.previouss.bind(this);
    }

    nexts() {
        this.slider.slickNext();
    }

    previouss() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={favvel} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={favvel2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider6 extends Component {
    constructor(props) {
        super(props);
        this.nexts = this.nexts.bind(this);
        this.previouss = this.previouss.bind(this);
    }

    nexts() {
        this.slider.slickNext();
    }

    previouss() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={danfosEasyPlan1}
                             loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={danfosEasyPlan2}
                             loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={danfosEasyPlan3}
                             loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={4} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={danfosEasyPlan4}
                             loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider7 extends Component {
    constructor(props) {
        super(props);
        this.nexts = this.nexts.bind(this);
        this.previouss = this.previouss.bind(this);
    }

    nexts() {
        this.slider.slickNext();
    }

    previouss() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={total} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={total2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={total3} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Slider8 extends Component {
    constructor(props) {
        super(props);
        this.nexts = this.nexts.bind(this);
        this.previouss = this.previouss.bind(this);
    }

    nexts() {
        this.slider.slickNext();
    }

    previouss() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={loko} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={loko2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={loko3} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}
