import React from 'react';
import './Partials.css'
import heroimg from '../images/heroimg.png'

const Hero = () => {
  return (
      <div className='hero-container'>
       <div className="hero-left">
           <h1 className="hero-big-text">
               Kickstart Your Exam Preparation with the Dream Team
           </h1>
           <p className="hero-small-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex nisi reiciendis facilis sit itaque recusandae quaerat adipisci inventore magnam.
           </p>
           <div className="hero-btns">
               <button className='hero-btn-left hero-btn'>Get Started</button>
               <button className='hero-btn-right hero-btn'>View syllabus</button>
           </div>
       </div>
       <div className="hero-right">
           <img src={heroimg} alt="hero-img" className='hero-img'/>
       </div>
      </div>
    );
};

export default Hero;

