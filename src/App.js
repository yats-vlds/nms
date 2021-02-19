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

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                {/*<Header/>*/}
                {/*<Cap/>*/}
                {/*<StarProject/>*/}
                {/*<Expert/>*/}
                {/*<Why/>*/}
                {/*<FormRequest />*/}
                {/*<Ten />*/}
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
