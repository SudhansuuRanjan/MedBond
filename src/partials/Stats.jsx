import React from 'react';

const Stats = () => {
  return (
     <div className="stats">
         <div className="stats-element" data-aos="fade-up">
             <h1 className="stats-big">30+</h1>
             <p className="stats-small">Topics covered</p>
         </div>
         <div className="stats-element" data-aos="fade-up">
             <h1 className="stats-big">12+</h1>
             <p className="stats-small">lectures/notes</p>
         </div>
         <div className="stats-element" data-aos="fade-up"  id='about'>
             <h1 className="stats-big">300+</h1>
             <p className="stats-small">Questions in QB</p>
         </div>
     </div>
  );
};

export default Stats;
