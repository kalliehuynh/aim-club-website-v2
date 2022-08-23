import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Learn from "./components/pages/Learn";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import './App.css'
import EventInfo from "./components/pages/EventInfo";
import { useState } from "react";


const App = () => {
  const [viewEvent, setViewEvent] = useState(null)

  if (viewEvent) {
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <Nav />
          <Routes>
            <Route path='/' element={<About />}/>
            <Route path='events' element={<Events />}/>
            <Route path='learn' element={<Learn />}/>
            <Route path='team' element={<Team />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='event-info' element={<EventInfo event={viewEvent}/>}/>
          </Routes>
        </div>
      </Router>  
    )
  }
  return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <Nav />
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
