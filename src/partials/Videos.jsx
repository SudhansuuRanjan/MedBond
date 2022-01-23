import React from 'react';

const Videos = () => {
  return (
      <div className="videos-cont">
         <div className="features-head" data-aos="fade-up">
              <h2 className="features-big-head">
                  Our Latest Videos
              </h2>
              <p className="features-small-head">
                  The hack is only a small part of the competition. The real spirit lies in building your network
              </p>
          </div>

          <div className="video-grid">

              <div className="video-container" data-aos="fade-up">
                  <iframe width="350" height="200" className='video-frame frame-left' src="https://www.youtube.com/embed/IPvYjXCsTg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div className="video-container" data-aos="fade-up">
                  <iframe width="350" height="200" className='video-frame' src="https://www.youtube.com/embed/IPvYjXCsTg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <div className="video-container" data-aos="fade-up">
                  <iframe width="350" height="200" className='video-frame frame-right' src="https://www.youtube.com/embed/IPvYjXCsTg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

          </div>
      </div>
  );
};

export default Videos;
