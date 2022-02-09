import {React} from 'react';
import './Partials.css'
import heroimg from '../images/heroimg.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <div className='hero-container' id="home">
       <div className="hero-left" data-aos="fade-up">
           <h1 className="hero-big-text">
               <span className="green">Kickstart Your Exam Preparation with the </span>
                <span className="light-green"> Dream Team</span>
           </h1>
           <p className="hero-small-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex nisi reiciendis facilis sit itaque recusandae quaerat adipisci inventore magnam.
           </p>
           <div className="hero-btns">
               <Link to="/homepage"><button className='hero-btn-left hero-btn'>Get Started</button></Link>
               <a href="https://www.youtube.com/medbond" target="_blank"><button className='hero-btn-right hero-btn'>View Youtube channel</button></a>
           </div>
       </div>
       <div className="hero-right" data-aos="fade-up">
           <img src={heroimg} alt="hero-img" className='hero-img'/>
       </div>
      </div>
    );
};

export default Hero;

