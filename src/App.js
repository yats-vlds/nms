import React, { useReducer, Suspense } from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Custom from "./pages/Custom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {initialState, reducer} from "./hook/reducer";
import CircleIcons from "./components/CircleIcons";

function App() {
const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <CircleIcons />
        // <Router>
        //     <Header />
        //     <Switch>
        //         <Route path="/" exact>
        //             <Home state={state} dispatch={dispatch} />
        //         </Route>
        //         <Route path="/custom">
        //             <Custom type="custom" state={state} dispatch={dispatch} />
        //         </Route>
        //         <Route path="/mobile-and-web">
        //             <Custom type="mobile" state={state} dispatch={dispatch} />
        //         </Route>
        //         <Route path="/ui-ux">
        //             <Custom state={state} dispatch={dispatch} />
        //         </Route>
        //     </Switch>
        //     <Footer id="contacts"/>
        // </Router>
    );
}

export default App;
