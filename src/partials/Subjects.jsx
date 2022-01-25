import React from 'react';
import subjectImg from '../images/subjectImg.png'

const Subjects = () => {
  return (
  <div className='subjects-container'>
      <div className="features-head" data-aos="fade-up">
              <h2 className="features-big-head">
                  Resources
              </h2>
              <p className="features-small-head">
                  The hack is only a small part of the competition. The real spirit lies in building your network
              </p>
     </div>

     <div className="subject-cards">

         <div className="subject-card" data-aos="fade-up">
             <img src={subjectImg} alt=""  className='subject-img'/>
             <div className="bottom-subject">
                 <h3 className="subject-name">
                 Microbiology Video Lecture
             </h3>
             <p className="subject-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione minima ea ducimus aliquid cupiditate.</p>
             <button className="subject-btn">
                <p className="btn-text">
                 View
                </p>
                <div className='btn-icon'>
                    <i class="fas fa-arrow-right"></i>
                </div>
             </button>
             </div>
         </div>


         <div className="subject-card" data-aos="fade-up">
             <img src={subjectImg} alt=""  className='subject-img'/>
             <div className="bottom-subject">
                 <h3 className="subject-name">
                 Microbiology Notes
             </h3>
             <p className="subject-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione minima ea ducimus aliquid cupiditate.</p>
             <button className="subject-btn">
                <p className="btn-text">
                 View
                </p>
                <div className='btn-icon'>
                    <i class="fas fa-arrow-right"></i>
                </div>
             </button>
             </div>
         </div>

         <div className="subject-card" data-aos="fade-up">
             <img src={subjectImg} alt=""  className='subject-img'/>
             <div className="bottom-subject">
                 <h3 className="subject-name">
                 Microbiology Question Bank
             </h3>
             <p className="subject-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione minima ea ducimus aliquid cupiditate.</p>
             <button className="subject-btn">
                <p className="btn-text">
                 View
                </p>
                <div className='btn-icon'>
                    <i class="fas fa-arrow-right"></i>
                </div>
             </button>
             </div>
         </div>

         


     </div>
 </div>
);
};

export default Subjects;
