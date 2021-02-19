import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Custom from "./pages/Custom";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/custom">
                    <Custom type="custom" />
                </Route>
                <Route path="/mobile-and-web">
                    <Custom type="mobile" />
                </Route>
                <Route path="/ui-ux">
                    <Custom />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
