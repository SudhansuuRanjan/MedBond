import React from 'react';

const Contact = () => {
  return (
      <div className="contact-body">

      <div className="features-head" data-aos="fade-up">
        <h2 className="features-big-head">Contact Us</h2>
        <p className="features-small-head">
          Get in touch with us. We are here to render our support.
        </p>
      </div>
      
          <div className="contact-up">

              <div className="contact-box" data-aos="fade-up">
                  <div className="ico">
                      <i class="fab fa-telegram-plane contact-ico"></i>
                      <h2 className="ico-text">Join Us</h2>
                      <p className="ico-contact">@medbond</p>
                  </div>

                  <div className="ico" data-aos="fade-up">
                      <i class="far fa-envelope mail"></i>
                      <h2 className="ico-text">Mail Us</h2>
                      <p className="ico-contact">healthcare@ap.in</p>
                  </div>
              </div>

              <div className="newsletter-body" data-aos="fade-up">
                    <h1 className='bold-text'>
                       <span className="green">Stay in </span>
                       <span className="light-green">the loop.</span>
                    </h1>
                    <p className="newsletter-text">
                        Subscribe to our newsletter.
                    </p>
                    <div className="form">
                        <form action="/" method="post" className='subs-form'>
                            <input type="text"  className='mail-inp' placeholder='email@domain.com'/>
                            <div className='flex-btn'>
                                <button className="subscribe">Subscribe</button>
                            </div>
                        </form>
                    </div>
              </div>


          </div>
      </div>
  );
};

export default Contact;
