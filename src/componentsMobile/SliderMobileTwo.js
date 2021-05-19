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
import inmore2 from "../assets/InMore_900x1025.png";
import inmore3 from "../assets/InMore_900x1025-2.png";
import inmore4 from "../assets/InMore_900x1025-3.png";
import leamum1 from "../assets/Lean-900x1025-2.png";
import leamum2 from "../assets/Lean-900x1025-3.png";
import HeadBikes1 from "../assets/Head_900x1025.png";
import HeadBikes2 from "../assets/Head_900x1025-02.png";
import ct from "../assets/CT-web-900x1025-1.png";
import ct4 from "../assets/CT-web-900x1025-4.png";
import goPrintWeb1 from "../assets/web-900x1025.png";
import goPrintWeb2 from "../assets/web-900x1025-2.png";
import goPrintWeb3 from "../assets/web-900x1025-2-2.png";
import goPrintWeb4 from "../assets/web-900x1025-3.png";

export default class SliderMobileTwo extends Component {
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
        const sliderComponent2DataText = {
            sliderOne: {
                sliderTitle: "In&More",
                sliderText: "This website was created for the interior design bureau placed in Berlin. The\n" +
                    "                                    product is\n" +
                    "                                    Word Press based and maximum attention was payed to SEO regarding wide geography of\n" +
                    "                                    the\n" +
                    "                                    bureau’s customers. We have created the semantic cores for English, Russian and\n" +
                    "                                    German\n" +
                    "                                    languages basing on data from 9 European countries. Quite a huge job, still\n" +
                    "                                    effective!",
                instruments: "Word Press"

            },
            sliderTwo: {
                sliderTitle: "GoPrint Web",
                sliderText: "What about automation of printing services? We made it self-service! NMS Team took\n" +
                    "                                    responsibility for the full scale of works including Web Design and Web SaaS which\n" +
                    "                                    is\n" +
                    "                                    mirroring an app`s functionality. We have also integrated a new Delivery service\n" +
                    "                                    that\n" +
                    "                                    aims to become an alternative monetization channel for the product.",
                instruments: {
                    instruments1: "React",
                    instruments2: "Next.js",
                    instruments3: "Node.js (Express)",
                    instruments4: "Postgres",
                    instruments5: "Docker",
                }
            },
            sliderThree: {
                sliderTitle: "CharyTime Web",
                sliderText: "  A lot of people in the world want to support charity organizations, however, not all\n" +
                    "                                    of\n" +
                    "                                    them have money for that. What if to convert CTP into money that could be donated to\n" +
                    "                                    a\n" +
                    "                                    selected charity organization? What if to create a digital solution to make good\n" +
                    "                                    things\n" +
                    "                                    trendy? CharyTime is a unique app that allows you to “donate your time”. NMS Team\n" +
                    "                                    made a\n" +
                    "                                    new version of the application with extra features including new web SaaS and\n" +
                    "                                    Landing\n" +
                    "                                    Page.",
            },
            sliderFour: {
                sliderTitle: "Head Bikes",
                sliderText: " We really enjoy developing custom web products! Still sometimes projects created\n" +
                    "                                    from a scratch seem to be clearly redundant and cloud platforms like WIX or Tilda\n" +
                    "                                    can be a solution. Using the Tilda web shop solution, we have created a functional\n" +
                    "                                    online store for the Official Distributor of HEAD bikes. Looks great, works fine,\n" +
                    "                                    created quickly like a blast!",
                instruments: "Tilda Cloud Website Platform"
            },
            sliderFive: {
                sliderTitle: "LEMAUM",
                sliderText: "     Sometimes when you have no extra time to arrange an advertising company scheduled\n" +
                    "                                    for\n" +
                    "                                    “yesterday”, fast yet effective solutions should be used. With a Tilda solution we\n" +
                    "                                    have\n" +
                    "                                    created a landing page for quite a unique fertilizer called Leamum in just 3 days\n" +
                    "                                    including development of custom design. Informative, nice looking, with simple and\n" +
                    "                                    functional feedback form – that’s how we define it."
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
                                {sliderComponent2DataText.sliderOne.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponent2DataText.sliderOne.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponent2DataText.sliderOne.instruments}</li>
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
                                {sliderComponent2DataText.sliderTwo.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponent2DataText.sliderTwo.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments1}</li>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments2}</li>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments3}</li>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments4}</li>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments5}</li>
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
                                {sliderComponent2DataText.sliderThree.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponent2DataText.sliderThree.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments1}</li>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments2}</li>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments3}</li>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments4}</li>
                                    <li>{sliderComponent2DataText.sliderTwo.instruments.instruments5}</li>
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
                                {sliderComponent2DataText.sliderFour.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponent2DataText.sliderFour.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponent2DataText.sliderFour.instruments}</li>
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
                                {sliderComponent2DataText.sliderFive.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponent2DataText.sliderFive.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponent2DataText.sliderFour.instruments}</li>
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
                        <img src={inmore2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.next}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previous}/>
                        <img src={inmore3} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.next}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previous}/>
                        <img src={inmore4} loading="lazy"/>
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
                        <img src={goPrintWeb1} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={goPrintWeb2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={goPrintWeb3} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={4} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={goPrintWeb4} loading="lazy"/>
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
                        <img src={ct} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={ct2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={ct3} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={4} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={ct4} loading="lazy"/>
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
                        <img src={HeadBikes1} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={HeadBikes2} loading="lazy"/>
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
                        <img src={leamum1}/>

                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={leamum2}/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}
