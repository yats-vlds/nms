import React from "react"
import Header from "../components/Header";
import Cap from "../components/Cap";
import StarProject from "../components/StarProject";
import Expert from "../components/Expert";
import Why from "../components/Why";
import Jobs from "../components/Jobs";
import FormRequest from "../components/FormRequest";
import Ten from "../components/Ten";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Cap/>
            <StarProject/>
            <Expert/>
            <Why/>
            <Jobs/>
            <FormRequest/>
            <Ten/>
            <Footer/>
        </>
    )
}

export default Home