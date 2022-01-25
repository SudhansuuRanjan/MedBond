import React from 'react';
import feature from '../images/features.png'

const Features = () => {
  return (
      <div className="features-cont">
          <div className="features-head" data-aos="fade-up">
              <h2 className="features-big-head">
                  What we provide
              </h2>
              <p className="features-small-head">
                  The hack is only a small part of the competition. The real spirit lies in building your network
              </p>
          </div>
          <div className="feature-card-cont">

              <div className="feature-card" data-aos="fade-up">
                   <img src={feature} alt=""
                    className='feature-img'/>
                    <h3 className="feature-head">
                        Video Lectures
                    </h3>
                    <p className="feature-text">
                        Highly informative and engaging lectures to encourage concept based learning.
                    </p>
              </div>
              <div className="feature-card feature-hover" data-aos="fade-up">
                   <img src={feature} alt=""
                    className='feature-img'/>
                    <h3 className="feature-head">
                        Notes
                    </h3>
                    <p className="feature-text">
                        Well structures, handwritten notes effective for revision.
                    </p>
              </div>
              <div className="feature-card" data-aos="fade-up"   id='resources'>
                   <img src={feature} alt=""
                    className='feature-img'/>
                    <h3 className="feature-head">
                        Question Bank
                    </h3>
                    <p className="feature-text">
                        High Yeild Question Bank for Self assessment.
                    </p>
              </div>

          </div>
      </div>
  );
};

export default Features;
