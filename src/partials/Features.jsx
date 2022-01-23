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
                        Kickstart Your Exam
                    </h3>
                    <p className="feature-text">
                        The hack is only a small part of the competition. The real spirit lies in building your network.
                    </p>
              </div>
              <div className="feature-card feature-hover" data-aos="fade-up">
                   <img src={feature} alt=""
                    className='feature-img'/>
                    <h3 className="feature-head">
                        Kickstart Your Exam
                    </h3>
                    <p className="feature-text">
                        The hack is only a small part of the competition. The real spirit lies in building your network.
                    </p>
              </div>
              <div className="feature-card" data-aos="fade-up">
                   <img src={feature} alt=""
                    className='feature-img'/>
                    <h3 className="feature-head">
                        Kickstart Your Exam
                    </h3>
                    <p className="feature-text">
                        The hack is only a small part of the competition. The real spirit lies in building your network.
                    </p>
              </div>

          </div>
      </div>
  );
};

export default Features;
