import React from 'react'
import './style.css'
import aboutImage from '../../assets/aboutImage.jpg'

export default function Contact() {
  return (
      <div>
          <section>
              <h2>Our Team</h2>
              <div className="team-container">
                  <img src={aboutImage} alt="About" className="about-image" />
                  <div className="team-content">
                      <p>
                          Meet our talented and dedicated team at EduSpace. We are passionate about providing exceptional education experiences and making a positive impact in [your website's niche]. With our combined expertise and commitment to excellence, we strive to create a valuable learning platform for all our users.
                      </p>
                  </div>
              </div>
          </section>
      </div>
  )
}
