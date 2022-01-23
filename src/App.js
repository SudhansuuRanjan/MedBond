import './App.css';
import {React,useEffect} from 'react';
import { Link } from 'react-router-dom';
import NavBar from './partials/NavBar';
import Hero from './partials/Hero';
import Stats from './partials/Stats';
import Features from './partials/Features';
import Subjects from './partials/Subjects';
import Videos from './partials/Videos';
import Testimonials from './partials/Testimonials';
import Team from './partials/Team';
import Contact from './partials/Contact';
import Footer from './partials/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Stats/>
      <Features/>
      <Subjects/>
      <Videos/>
      <Testimonials/>
      <Team/>
      <Contact/>
      <Footer/>
      <header className="App-header">
     
        <Link to="/microbiology">Microbiology</Link>
        <Link to="/chemistry">Chemistry</Link>
        <Link to="/biology">Biology</Link>
        <Link to="/biologyy">404</Link> 
      </header>
    </div>
  );
}

export default App;
