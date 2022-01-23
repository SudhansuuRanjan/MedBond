import React from 'react';
import doctor from '../images/doctor.png'

const Testimonials = () => {
  return (
      <div className="testimonial-body">
           <div className="features-head" data-aos="fade-up">
              <h2 className="features-big-head">
                  What out users have to say
              </h2>
              <p className="features-small-head">
                  The hack is only a small part of the competition. The real spirit lies in building your network
              </p>
          </div>

          <div className="testimonial-cont">

              <div className="testimonial" data-aos="fade-up">
                  <p className="test-msg">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aut porro provident, quo perferendis temporibus doloremque nisi saepe itaque numquam ipsa minus qui similique vero odio voluptatum laudantium nobis minima. 
                  </p>
                  <div className="test-bottom">
                      <div className="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half"></i>
                  </div>
                  <div className="profile">
                      <img src={doctor} alt="" className='profile-img' />
                      <div className="dr-info">
                          <h4 className="dr-name">
                              Dr. Jhatka
                          </h4>
                          <p className="dr-designation">
                              Senior Doctor
                          </p>
                      </div>
                  </div>
                  </div>
              </div>

              <div className="testimonial" data-aos="fade-up">
                  <p className="test-msg">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia aut porro provident, quo perferendis temporibus doloremque nisi saepe itaque numquam ipsa minus qui similique vero odio voluptatum laudantium nobis minima. 
                  </p>
                  <div className="test-bottom">
                      <div className="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half"></i>
                  </div>
                  <div className="profile" id='team'>
                      <img src={doctor} alt="" className='profile-img' />
                      <div className="dr-info">
                          <h4 className="dr-name">
                              Dr. Jhatka
                          </h4>
                          <p className="dr-designation">
                              Senior Doctor
                          </p>
                      </div>
                  </div>
                  </div>
              </div>


          </div>
      </div>
  );
};

export default Testimonials;
