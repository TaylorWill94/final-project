// import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Home from "./Components/Home";
import Final from "./Components/Final";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </div>
  );
}

export default App;
