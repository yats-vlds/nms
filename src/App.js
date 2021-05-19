import React, {useCallback, useMemo, useReducer, useState} from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Custom from "./pages/Custom";
import Footer from "./components/Footer";
import {initialState, reducer} from "./hook/reducer";
import {useEffect} from "react";
import Header from "./components/Header";
import 'react-toastify/dist/ReactToastify.css';
import HeaderMobile from "./componentsMobile/HeaderMobile";
import BannerMobile from "./componentsMobile/BannerMobile";
import ExpertiseMobile from "./componentsMobile/ExpertiseMobile";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import ExpertMobile from "./componentsMobile/ExpertMobile";
import PartnersMobile from "./componentsMobile/PartnersMobile";
import FormMobile from "./componentsMobile/FormMobile";
import FooterMobile from "./componentsMobile/FooterMobile";
import CustomSASS from "./pagesMobile/CustomSASS";
import WebDevelopmentMobile from "./pagesMobile/WebDevelopmentMobile";
import UIUXMobile from "./pagesMobile/UIUXMobile";
import WorkMobile from "./pagesMobile/WorkMobile";
import SliderComponent3 from "./components/SliderComponent3";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [y, setY] = useState(window.scrollY);
    const [border, setBorder] = useState(false)
    const [scrollDown, setScrollDown] = useState(1880)
    const [scrollUp, setScrollUp] = useState(8016)
    let outerWidth = window.outerWidth
    let setParamsHeight = (down, up) => {
        setScrollDown(down)
        setScrollUp(up)
    }
    useMemo(() => {
        outerWidth > 1500
            ? setParamsHeight(1880, 8016) : outerWidth > 1030 ?
            setParamsHeight(1800, 7980) : outerWidth > 930 ?
                setParamsHeight(1775, 7940) : outerWidth > 850 ?
                    setParamsHeight(1750, 7900) : outerWidth > 780 ?
                        setParamsHeight(1650, 7500) : outerWidth > 700 ?
                            setParamsHeight(1600, 7300) : outerWidth > 650 ?
                                setParamsHeight(1570, 6500) : outerWidth > 600 ?
                                    setParamsHeight(1400, 5800) : outerWidth > 430 ?
                                        setParamsHeight(1300, 5300) : outerWidth > 400 ?
                                            setParamsHeight(1200, 4500) : outerWidth > 380 ?
                                                setParamsHeight(600, 2500) : outerWidth > 329 ?
                                                    setParamsHeight(500, 2200) : setParamsHeight(400, 1800)
    }, [window.outerWidth])
    const handleNavigation = useCallback(
        (e) => {
            setBorder(false)
            const window = e.currentTarget;
            if (y > window.scrollY) {
                console.log("scrolling up");
            } else if (y < window.scrollY) {
                console.log("scrolling down");
            }
            setY(window.scrollY);
            if (y > scrollDown && y < scrollUp) {
                setTimeout(() => {
                    setBorder(true)
                }, 1000)
            } else {
                setTimeout(() => {
                    setBorder(false)
                }, 1000)
            }
        },
        [y]
    )

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    library.add(fab, faCheckSquare, faCoffee)
    return (
        <Router>
        {/*<CustomSASS />*/}
        {/*<WebDevelopmentMobile />*/}
        {/*<UIUXMobile />*/}
        <WorkMobile />
            {/*<Header/>*/}
            {/*<Switch>*/}
            {/*    <Route path="/" exact>*/}
            {/*        <Home*/}
            {/*            state={state}*/}
            {/*            dispatch={dispatch}*/}
            {/*            y={y}*/}
            {/*            border={border}*/}
            {/*            scrollDown={scrollDown}*/}
            {/*            scrollUp={scrollUp}*/}
            {/*        />*/}
            {/*    </Route>*/}
            {/*    <Route path="/custom">*/}
            {/*        <Custom type="custom" state={state} dispatch={dispatch}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/mobile-and-web">*/}
            {/*        <Custom type="mobile" state={state} dispatch={dispatch}/>*/}
            {/*    </Route>*/}
            {/*    <Route path="/ui-ux">*/}
            {/*        <Custom state={state} dispatch={dispatch}/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
            {/*<Footer id="contacts"/>*/}
        </Router>
    );
}

export default App;
