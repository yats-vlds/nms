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
import {HashRouter, Redirect} from "react-router-dom"


const Home = ({state, dispatch, y, border}) => {
    const [ellipse, setEllipse] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (ellipse || state.ellipse) {
                window.scrollTo(7550, 7550)
                console.log('true')
                dispatch({type: "setEllipse", payload: false})
                setEllipse(false)
                return <Redirect push to='/#expertise'/>
            }
        }, 3000)
    }, [ellipse, state.ellipse])

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
