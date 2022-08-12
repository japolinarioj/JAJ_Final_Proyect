import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Router>
      <GlobalStyles/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/confirmed" element/>
          <Route path="">404: Oops!</Route>
      </Routes>
    </Router>
  );
};

export default App;
