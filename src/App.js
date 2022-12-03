import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./views/Home";
import Main from "./views/Main";
import Records from "./views/Records";
import React from "react";
import Menu from "./components/Layout/Menu";

function App() {
    return (
        <React.Fragment>
            <Router>
                <div>
                    <Menu />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/main' element={<Main />} />
                        <Route path='/records' element={<Records />} />
                    </Routes>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default App;
