import "./App.css";

import {
    Route,
    BrowserRouter as Router,
    Routes,
    HashRouter,
    useLocation,
} from "react-router-dom";

import Home from "./views/Home";
import Main from "./views/Main";
import Records from "./views/Records";
import React from "react";
import Menu from "./components/Layout/Menu";
import Info from "./views/Info";
import Employees from "./views/Employees";
import Finance from "./views/Finance";
import LoginScreen from "./views/LoginScreen";

function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <div>
                    <Menu />
                    <Routes>
                        <Route path='/' element={<LoginScreen />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/main' element={<Main />} />
                        <Route path='/finance' element={<Finance />} />
                        <Route path='/employees' element={<Employees />} />
                        <Route path='/info' element={<Info />} />
                        <Route path='/records' element={<Records />} />
                    </Routes>
                </div>
            </HashRouter>
        </React.Fragment>
    );
}

export default App;
