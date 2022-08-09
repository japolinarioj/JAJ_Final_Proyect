import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element/>
          <Route path="/confirmed" element/>
          <Route path="">404: Oops!</Route>
        </Routes>
    </Router>
  );
};

export default App;
