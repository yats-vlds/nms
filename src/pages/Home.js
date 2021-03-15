import React, {useState, useEffect, useCallback} from "react"
import Cap from "../components/Cap"
import StarProject from "../components/StarProject"
import Expert from "../components/Expert"
import Why from "../components/Why"
import Jobs from "../components/Jobs"
import FormRequest from "../components/FormRequest"
import Ten from "../components/Ten"
import SliderComponent from "../components/SliderComponent";
import SliderComponent2 from "../components/SliderComponent2";
import SliderComponent3 from "../components/SliderComponent3";
import {Redirect} from "react-router-dom"


const Home = ({state, dispatch, y, border}) => {
    const [ellipse, setEllipse] = useState(false)
    // 1440px === 7350, 1025px === 5450, 769 === 4210, 425px === 2300, 375 === 1900
    useEffect(() => {
            if (ellipse || state.ellipse) {
                setTimeout(() => {
                    window.scrollTo(1800, 1800)
                    console.log('true')
                    dispatch({type: "setEllipse", payload: false})
                    setEllipse(false)
                }, 3000)
            }
    }, [ellipse, state.ellipse])
    console.log(window.outerWidth, 'width')

    return (
        <>
            <div className="scroll">
                {y < 1800 && <p className="scroll__text"><small>Scroll Down</small></p>}
                {!border && <div className="scroll__border"></div>}
                {y > 8016 && <p className="scroll__text"><small>Scroll Up</small></p>}
            </div>
            <Cap/>
            <StarProject id="expertise" ellipse={ellipse} setEllipse={setEllipse}/>
            <Expert/>
            <Why id="why"/>
            <SliderComponent/>
            <SliderComponent2/>
            <SliderComponent3/>
            <FormRequest/>
            <Ten/>
        </>
    )
}

export default Home
