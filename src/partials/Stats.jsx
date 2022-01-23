import React from 'react';

const Stats = () => {
  return (
     <div className="stats">
         <div className="stats-element" data-aos="fade-up">
             <h1 className="stats-big">30+</h1>
             <p className="stats-small">subjects</p>
         </div>
         <div className="stats-element" data-aos="fade-up">
             <h1 className="stats-big">100+</h1>
             <p className="stats-small">video lectures</p>
         </div>
         <div className="stats-element" data-aos="fade-up"  id='about'>
             <h1 className="stats-big">30+</h1>
             <p className="stats-small">notes sources</p>
         </div>
     </div>
  );
};

export default Stats;
