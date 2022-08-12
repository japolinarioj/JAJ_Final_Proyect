import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import BlogList from "./BlogList";
import About from "./About";
import CreatePost from "./CreatePost";

const App = () => {
  return (
    <Router>
      <GlobalStyles/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/blogs/:categories" element={<BlogList/>}/>
          <Route path="/confirmed" element/>
          <Route path="/About" element={<About/>}/>
          <Route path="/CreatePost" element={<CreatePost/>}/>
          <Route path="">404: Oops!</Route>
      </Routes>
    </Router>
  );
};

export default App;
