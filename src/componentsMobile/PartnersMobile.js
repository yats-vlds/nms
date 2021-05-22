import React from "react"
import logos from "../assets/mobile-image/logos1.svg"
import logos2 from "../assets/mobile-image/logos2.svg"
import logos3 from "../assets/mobile-image/logos3.svg"
import logo from "../assets/mobile-image/logoTen.svg"
import yog from "../assets/mobile-image/yogTen.svg"
import "./PartnersMobile.css"
import {Link} from "react-router-dom";

const PartnersMobile = () => {
    return (
        <>
            <div className="partnersMobile">
                <div className="partnersMobile__SeeCasesTitle">
                    <Link className="linkInExpertise" to="/works">
                        <h2 className="partnersMobile__SeeCasesTitleh2 display-5">See cases<i
                            className="bi bi-youtube"/></h2>
                    </Link>
                </div>
            </div>
            <div className="partnersMobile__DivForTitle">
                <div className="container">
                    <h1 className="partnersMobile__titleOne">Partners</h1>
                    <h5 className="partnersMobile__titleTwo">Because They Trust</h5>
                    <div className="partnersMobileSlider">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carousel__img">
                                        <img src={logos} className="carousel__img"/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel__img">
                                        <img src={logos2} className="carousel__img"/>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel__img">
                                        <img src={logos3} className="carousel__img"/>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="whyAreWe">

                                    <h3 className="whyAreWe__titleOne">Why are we?</h3>
                                    <div className="whyAreWe__element">
                                        <h5 className="whyAreWe__titleTwo"><i
                                            className="bi bi-caret-right-fill text-white"/>Cost-efficient</h5>
                                        <h6 className="whyAreWe__text">Talanted team based in the Easter europe</h6>
                                    </div>
                                    <div className="whyAreWe__element">
                                        <h5 className="whyAreWe__titleTwo"><i
                                            className="bi bi-caret-right-fill text-white"/>Solution orriented</h5>
                                        <h6 className="whyAreWe__text">Mathing your business needs</h6>
                                    </div>
                                    <div className="whyAreWe__element">
                                        <h5 className="whyAreWe__titleTwo"><i
                                            className="bi bi-caret-right-fill text-white"/>Professional</h5>
                                        <h6 className="whyAreWe__text">Skillful developers working with a wide range of
                                            thechnologies</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center align-items-center">
                            <button className="whyAreWe__btnSeeCases">
                                <Link className="linkInExpertise" to="/works" style={{color: "#3857F9"}}>
                                    See cases
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tenMobile">
                <div className="container">
                    <div className="row tenMobile__row">
                        <div className="col-8">
                            <img src={logo} className="w-75" className="logoInTen"/>
                        </div>
                        <div className="col-10">
                            <h1 className="tenMobile__number">10<span className="tenMobile__numberPlus">+</span></h1>
                            <h2 className="tenMobile__numberTitle" id="forms">YEARS IN THE GAME!</h2>
                        </div>
                    </div>
                    <img src={yog} className="tenMobile__yogImg"/>
                </div>
            </div>
        </>
    )
}

export default PartnersMobile
