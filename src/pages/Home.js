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


const Home = ({state, dispatch}) => {
    console.log(state)
    const [ellipse, setEllipse] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            if (ellipse || state.ellipse) {
                window.scrollTo(7150, 7150)
                dispatch({type: "setEllipse", payload: false})
                setEllipse(false)
            }
        }, 3000)
    }, [ellipse, state.ellipse])

    return (
        <>
            <Cap/>
            <StarProject id="expertise" ellipse={ellipse} setEllipse={setEllipse}/>
            <Expert />
            <Why id="why"/>
            <SliderComponent />
            <SliderComponent2 />
            <SliderComponent3 />
            <FormRequest/>
            <Ten/>
        </>
    )
}

export default Home