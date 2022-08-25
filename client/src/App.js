import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import BlogList from "./BlogList";
import About from "./About";
import CreatePost from "./CreatePost";
import BlogDetail from "./BlogDetail";
import Footer from "./Footer";

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
          <Route path="/blogs/:title" element={<BlogDetail/>}/>
          <Route path="">404: Oops!</Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
