import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

        <Link to="/physics">Physics</Link>
        <Link to="/chemistry">Chemistry</Link>
        <Link to="/biology">Biology</Link>
        <Link to="/biologyy">404</Link>
      </header>
    </div>
  );
}

export default App;
