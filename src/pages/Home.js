import React, {useState, useEffect} from "react"
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
import {HashRouter, Redirect, useHistory} from "react-router-dom"
import {HashLink} from "react-router-hash-link";


const Home = ({state, dispatch}) => {
    const [ellipse, setEllipse] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (ellipse || state.ellipse) {
                window.scrollTo(7550, 7550)
                console.log('true')
                dispatch({type: "setEllipse", payload: false})
                setEllipse(false)
                return <Redirect push to='/#expertise' />
            }
        }, 3000)
    }, [ellipse, state.ellipse])

    return (
        <>
            <Cap/>
                <StarProject id="expertise" ellipse={ellipse} setEllipse={setEllipse}/>
            <Expert />
            {/*<Why id="why"/>*/}
            {/*<SliderComponent />*/}
            {/*<SliderComponent2 />*/}
            {/*<SliderComponent3 />*/}
            {/*<FormRequest/>*/}
            {/*<Ten/>*/}
        </>
    )
}

export default Home
