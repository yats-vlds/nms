import React from "react"
import HeaderMobile from "../componentsMobile/HeaderMobile";
import BannerMobile from "../componentsMobile/BannerMobile";
import ExpertiseMobile from "../componentsMobile/ExpertiseMobile";
import ExpertMobile from "../componentsMobile/ExpertMobile";
import PartnersMobile from "../componentsMobile/PartnersMobile";
import FormMobile from "../componentsMobile/FormMobile";
import FooterMobile from "../componentsMobile/FooterMobile";
import {BrowserRouter as Router} from "react-router-dom";

const HomeMobile = () => {
    return (
        <>
            <HeaderMobile/>
            <BannerMobile/>
            <ExpertiseMobile/>
            <ExpertMobile/>
            <PartnersMobile/>
            <FormMobile/>
            <FooterMobile/>
        </>
    )
}

export default HomeMobile
