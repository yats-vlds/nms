import React from "react"
import logos from "../assets/mobile-image/logos1.svg"
import logos2 from "../assets/mobile-image/logos2.svg"
import logos3 from "../assets/mobile-image/logos3.svg"
import "./PartnersMobile.css"

const PartnersMobile = () => {
    return (
        <>
            <div className="partnersMobile">
                <div className="partnersMobile__SeeCasesTitle">
                    <h2 className="partnersMobile__SeeCasesTitleh2 display-5">See cases<i className="bi bi-youtube"/>
                    </h2>
                </div>
            </div>
            <div className="partnersMobile__DivForTitle">
                <h3 className="partnersMobile__titleOne">Partners</h3>
                <h4 className="partnersMobile__titleTwo">Because They Trust</h4>
                <div className="partnersMobileSlider">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="carousel__img">
                                    <img src={logos}/>
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
                                    <h5 className="whyAreWe__titleTwo"><i className="bi bi-caret-right-fill text-white"/>Cost-efficient</h5>
                                    <h6 className="whyAreWe__text">Talanted team based in the Easter europe</h6>
                                </div>
                                <div className="whyAreWe__element">
                                    <h5 className="whyAreWe__titleTwo"><i className="bi bi-caret-right-fill text-white"/>Solution orriented</h5>
                                    <h6 className="whyAreWe__text">Mathing your business needs</h6>
                                </div>
                                <div className="whyAreWe__element">
                                    <h5 className="whyAreWe__titleTwo"><i className="bi bi-caret-right-fill text-white"/>Professional</h5>
                                    <h6 className="whyAreWe__text">Skillful developers working with a wide range of thechnologies</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="whyAreWeForButton">
                <button className="whyAreWe__btnSeeCases">See cases</button>
            </div>
        </>
    )
}

export default PartnersMobile
