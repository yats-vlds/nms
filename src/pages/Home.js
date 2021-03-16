import React, {useState, useEffect, useCallback, useMemo} from "react"
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


const Home = ({state, dispatch, y, border, scrollUp, scrollDown}) => {
    const [ellipse, setEllipse] = useState(false)
    const [height, setHeight] = useState(7550)
    let outerWidth = window.outerWidth
    useMemo(() => {
        outerWidth > 1500
            ? setHeight(7550) : outerWidth > 1030 ?
            setHeight(7350) : outerWidth > 780 ?
                setHeight(5450) : outerWidth > 430 ?
                    setHeight(4210) : outerWidth > 380 ?
                        setHeight(2300) : outerWidth > 329 ?
                            setHeight(1900) : setHeight(1800)
    }, [window.outerWidth])

    useEffect(() => {
        if (ellipse || state.ellipse) {
            setTimeout(() => {
                window.scrollTo(height, height)
                console.log('true')
                dispatch({type: "setEllipse", payload: false})
                setEllipse(false)
            }, 3000)
        }
    }, [ellipse, state.ellipse])

    return (
        <>
            <div className="scroll">
                {y < scrollDown && <p className="scroll__text"><small>Scroll Down</small></p>}
                {!border && <div className="scroll__border"></div>}
                {y > scrollUp && <p className="scroll__text"><small>Scroll Up</small></p>}
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
