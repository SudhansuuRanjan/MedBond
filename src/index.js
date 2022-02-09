import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Microbiology from './routes/Microbiology'
import Biology from './routes/Biology'
import Chemistry from './routes/Chemistry'
import NoPage from './routes/NoPage'
import HomePage from './routes/HomePage'

const rootElement =  document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
     <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="/homepage" element={<HomePage/>}/>
       <Route path="/microbiology" element={<Microbiology/>}/>
       <Route path="/chemistry" element={<Chemistry/>}/>
       <Route path="/biology" element={<Biology/>}/>
       <Route path="*" element={<NoPage/>}/>
     </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
