import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./views/Home";
import Main from "./views/Main";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
