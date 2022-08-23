import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Learn from "./components/pages/Learn";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import './App.css'


const App = () => {
  return (
    
      <Router>
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <Routes>
            <Route path='/' element={<About />}/>
            <Route path='events' element={<Events />}/>
            <Route path='learn' element={<Learn />}/>
            <Route path='team' element={<Team />}/>
            <Route path='contact' element={<Contact />}/>
          </Routes>
        </div>
      </Router>  
    
    
  )
}
export default App;
