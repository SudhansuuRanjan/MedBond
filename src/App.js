import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import NavBar from './partials/NavBar';
import Hero from './partials/Hero';
import Stats from './partials/Stats';
import Features from './partials/Features';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Stats/>
      <Features/>
      <header className="App-header">
        <p>
          Started building <code>MedBond</code> App.
        </p>
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Med Bond
        </a>

        <Link to="/microbiology">Microbiology</Link>
        <Link to="/chemistry">Chemistry</Link>
        <Link to="/biology">Biology</Link>
        <Link to="/biologyy">404</Link>
      </header>
    </div>
  );
}

export default App;
