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
import GoPrintDesign1 from "../assets/DIZ-900x1025-01.png";
import GoPrintDesign2 from "../assets/DIZ-900x1025-02.png";
import GoPrintDesign3 from "../assets/DIZ-900x1025-03.png";
import GoPrintDesign4 from "../assets/DIZ-900x1025-04.png";
import UkrTelecom1 from "../assets/UKT-900x1025-01.png";
import UkrTelecom2 from "../assets/UKT-900x1025-02.png";
import UkrTelecom3 from "../assets/UKT-900x1025-03.png";
import InMoreDesign1 from "../assets/InMoreDIZ-900x1025-01.png";
import InMoreDesign2 from "../assets/InMoreDIZ-900x1025-02.png";
import InMoreDesign3 from "../assets/InMoreDIZ-900x1025-03.png";

export default class SliderMobileThree extends Component {
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
        const sliderComponent3DataText = {
            sliderOne: {
                sliderTitle: "GoPrint",
                sliderText: "Creation of visual identity and UX/UI Product Design for the GoPrint remote printing\n" +
                    "                                    service and GoPrint Delivery, as well as static and animated materials for the\n" +
                    "                                    digital promotion.",
                instruments: {
                    instruments1: "Adobe Photoshop",
                    instruments2: "Illustrator",
                    instruments3: "After Effects",
                    instruments4: "Figma",
                }
            },
            sliderTwo: {
                sliderTitle: "Ukrtelecom",
                sliderText: " Ukrtelecom is of the biggest providers of fixed-line and mobile telephony as well as\n" +
                    "                                    high-speed internet. Having a team of about 15 000 employees. Thus we have\n" +
                    "                                    created a unique interface of the corporate portal, including messengers and all\n" +
                    "                                    other functional components.",
                instruments: {
                    instruments1: "Bitrix24",
                    instruments2: "Adobe Photoshop",
                    instruments3: "Illustrator",
                },
            },
            sliderThree: {
                sliderTitle: "In&More",
                sliderText: "  Creation of the website for the interior design bureau placed in Berlin. The product\n" +
                    "                                is Word Press based so it definitely needed something stylish and fresh to look\n" +
                    "                                great! Simple and easy – that’s what perfectly suits successful businesses!"
                ,
                instruments: {
                    instruments1: "Adobe Photoshop",
                    instruments2: "Illustrator",
                    instruments3: "Webflow",

                },
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
                                {sliderComponent3DataText.sliderOne.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponent3DataText.sliderOne.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponent3DataText.sliderOne.instruments.instruments1}</li>
                                    <li>{sliderComponent3DataText.sliderOne.instruments.instruments2}</li>
                                    <li>{sliderComponent3DataText.sliderOne.instruments.instruments3}</li>
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
                                {sliderComponent3DataText.sliderTwo.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponent3DataText.sliderTwo.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponent3DataText.sliderTwo.instruments.instruments1}</li>
                                    <li>{sliderComponent3DataText.sliderTwo.instruments.instruments2}</li>
                                    <li>{sliderComponent3DataText.sliderTwo.instruments.instruments3}</li>
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
                                {sliderComponent3DataText.sliderThree.sliderTitle}
                                <i className="bi bi-caret-right-fill arrowSliderRight" onClick={this.next}/>
                                <h6 className="textForArrow">Next project</h6>
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 className="sliderMobile__titleTwo">Idea</h5>
                                <h6 className="sliderMobile__text">
                                    {sliderComponent3DataText.sliderThree.sliderText}
                                </h6>
                                <ul>
                                    <h5 className="sliderMobile__titleTwo">Tech picture</h5>
                                    <li>{sliderComponent3DataText.sliderThree.instruments.instruments1}</li>
                                    <li>{sliderComponent3DataText.sliderThree.instruments.instruments2}</li>
                                    <li>{sliderComponent3DataText.sliderThree.instruments.instruments3}</li>
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
                        <img src={GoPrintDesign1} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.next}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previous}/>
                        <img src={GoPrintDesign2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.next}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previous}/>
                        <img src={GoPrintDesign3} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.next}/>
                    </div>
                    <div key={4} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previous}/>
                        <img src={GoPrintDesign4} loading="lazy"/>
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
                        <img src={UkrTelecom1} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={UkrTelecom2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={UkrTelecom3} loading="lazy"/>
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
                        <img src={InMoreDesign1} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={2} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={InMoreDesign2} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                    <div key={3} className="d-flex align-items-center">
                        <i className="bi bi-chevron-left arrowForChangeImage" onClick={this.previouss}/>
                        <img src={InMoreDesign3} loading="lazy"/>
                        <i className="bi bi-chevron-right arrowForChangeImage" onClick={this.nexts}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

