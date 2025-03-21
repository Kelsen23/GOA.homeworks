import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Nav from "./components/Nav";
import ErrorElement from "./components/ErrorElement";

const App = () => {
  return (  
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<ErrorElement />} />
      </Routes>
    </Router>
  );
};

export default App;
