
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/Navbar"
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import About from "./routes/About";
function App() {
  return (
    <div className="App">
    
<BrowserRouter>

      <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>

</BrowserRouter>

     
    </div>
  );
}

export default App;
