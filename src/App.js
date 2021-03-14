import React, {useCallback, useReducer, useState} from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Custom from "./pages/Custom";
import Footer from "./components/Footer";
import {initialState, reducer} from "./hook/reducer";
import { useEffect } from "react";
import Header from "./components/Header";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [y, setY] = useState(window.scrollY);
    const [border, setBorder] = useState(false)
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
            if (y > 1800 && y < 8016) {
                setTimeout(() => {setBorder(true)}, 1000)
            } else {
                setTimeout(() => {setBorder(false)}, 1000)
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
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Home state={state} dispatch={dispatch} y={y} border={border}/>
                </Route>
                <Route path="/custom">
                    <Custom type="custom" state={state} dispatch={dispatch}/>
                </Route>
                <Route path="/mobile-and-web">
                    <Custom type="mobile" state={state} dispatch={dispatch}/>
                </Route>
                <Route path="/ui-ux">
                    <Custom state={state} dispatch={dispatch}/>
                </Route>
            </Switch>
            <Footer id="contacts"/>
        </Router>
    );
}

export default App;
