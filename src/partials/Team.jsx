import React from "react";
import teamImg from "../images/team-img.png";

const Team = () => {
  return (
    <div className="team-body">
      <div className="features-head" data-aos="fade-up">
        <h2 className="features-big-head">Our Team</h2>
        <p className="features-small-head">
          The hack is only a small part of the competition. The real spirit lies
          in building your network
        </p>
      </div>

      <div className="team-grid">
        <div className="team-card" data-aos="fade-up">
          <div className="team-img">
            <img src={teamImg} alt="" className="team-pic" />
          </div>
          <div className="team-bottom">
            <h3 className="person-name">Sudhanshu Ranjan</h3>
            <p className="person-designation">Front End Developer</p>

            <div className="team-socials">
              <a href="/" className="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="/" className="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-link">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="team-card" data-aos="fade-up">
          <div className="team-img">
            <img src={teamImg} alt="" className="team-pic" />
          </div>
          <div className="team-bottom">
            <h3 className="person-name">Sudhanshu Ranjan</h3>
            <p className="person-designation">Front End Developer</p>

            <div className="team-socials">
              <a href="/" className="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="/" className="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-link">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="team-card" data-aos="fade-up">
          <div className="team-img">
            <img src={teamImg} alt="" className="team-pic" />
          </div>
          <div className="team-bottom">
            <h3 className="person-name">Sudhanshu Ranjan</h3>
            <p className="person-designation">Front End Developer</p>

            <div className="team-socials">
              <a href="/" className="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="/" className="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-link">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
