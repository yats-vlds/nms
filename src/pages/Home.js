import React, {useState, useEffect, useReducer} from "react"
import Cap from "../components/Cap"
import StarProject from "../components/StarProject"
import Expert from "../components/Expert"
import Why from "../components/Why"
import Jobs from "../components/Jobs"
import FormRequest from "../components/FormRequest"
import Ten from "../components/Ten"


const Home = ({state, dispatch}) => {
    console.log(state)
    const [ellipse, setEllipse] = useState(false)
    useEffect(() => {
        if (ellipse || state.ellipse) {
            window.scrollTo(7150, 7150)
            dispatch({type: "setEllipse", payload: false})
            setEllipse(false)
        }
    }, [ellipse, state.ellipse])

    return (
        <>
            <Cap/>
            {/*<StarProject id="expertise" ellipse={ellipse} setEllipse={setEllipse}/>*/}
            {/*<Expert />*/}
            {/*<Why id="why"/>*/}
            {/*<Jobs id="works"/>*/}
            {/*<FormRequest/>*/}
            {/*<Ten/>*/}
        </>
    )
}

export default Home