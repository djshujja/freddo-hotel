import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./views/Home";
import Main from "./views/Main";
import Records from "./views/Records";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/main' element={<Main />} />
                    <Route path='/records' element={<Records />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
