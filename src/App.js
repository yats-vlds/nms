import './App.css';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import Cap from "./components/Cap";
import StarProject from "./components/StarProject";
import Expert from "./components/Expert";
import Why from "./components/Why";
import FormRequest from "./components/FormRequest";
import Ten from "./components/Ten";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import AnimateRocket from "./components/AnimateRocket";
import AnimateHorse from "./components/AnimateHorse";

function App() {
    return (
            <BrowserRouter>
                <Expert />
            </BrowserRouter>
    );
}

export default App;
