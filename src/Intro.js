import React from "react";
import RayChintalapatiResume from './RayChintalapatiResume.jpg'

class Intro extends React.Component {
  render() {
    return (
      <section id="hello" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 about-img-wrap">
              <div class="about-img wow slideInRight">
                <img
                  src={RayChintalapatiResume}
                  alt=""
                  class="img-responsive"
                />
              </div>

              <div class="about-me-info">
                <p>
                  <span class="span-title">Phone</span>
                  <span>+91-90525-00315</span>
                </p>
                <p>
                  <span class="span-title">Email</span>
                  <span>i@iraycd.com</span>
                </p>
                <p>
                  <span class="span-title">Address</span>
                  <span>Hyderabad, India - 04</span>
                </p>
                <p>
                  <span class="span-title">Social</span>
                  <span class="span-icons">
                    <a
                      target="_blank"
                      href="https://github.com/iraycd"
                      class="mdi fonts-icons mdi-github-circle"
                    />
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/iraycd"
                      class="mdi fonts-icons mdi-linkedin"
                    />
                    <a
                      target="_blank"
                      href="https://www.facebook.com/iraycd"
                      class="mdi fonts-icons mdi-facebook"
                    />
                    <a
                      target="_blank"
                      href="https://twitter.com/iraycd"
                      class="mdi fonts-icons mdi-twitter"
                    />
                    <a
                      target="_blank"
                      href="https://www.behance.net/iraycd"
                      class="mdi fonts-icons mdi-behance"
                    />
                    <a
                      target="_blank"
                      href="https://dribbble.com/iraycd"
                      class="mdi fonts-icons mdi-dribbble"
                    />
                    <a
                      target="_blank"
                      href="https://medium.com/@iraycd"
                      class="mdi fonts-icons mdi-medium"
                    />
                  </span>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="about-me wow slideInLeft">
                <div class="about-me-title">
                  <h1>
                    <span class="point">I am Ray Chintalapati</span>
                  </h1>
                </div>
                <div class="about-me-text">
                  <div class="opacity-box">
                    <p>
                      I am a Polymath - Technocrat Entrepreneur, Manager,
                      Creative Visualiser, Innovator, and Leader - having a very
                      rich and varied experience of 9 years on a wide range of
                      Technologies, Domains, Managerial and Functional
                      specialties.
                    </p>
                    <br />
                    <p>
                      Since childhood, I am exposed to a broad business milieu
                      that offered me a wide gamut of Technological Skills,
                      Creative Faculties, Cerebral Abilities, Managerial
                      Capabilities, Leadership Gut, Innovative Mindset and
                      Entrepreneurial Attitude enabled me to deliver solutions
                      to the complex problems creatively.{" "}
                    </p>
                    <br />
                    <p>
                      I have executed Projects, developed Products and delivered
                      Innovative Solutions. I have been Managing, Leading,
                      Architecting, Developing, Delivering and Servicing Highly
                      Scalable, Real-Time and Mission-Critical Enterprise
                      Applications from the front.{" "}
                    </p>
                  </div>
                </div>
                <div class="about-btns">
                  <a
                    id="emailMe"
                    data-toggle="modal"
                    data-target="#contact-modal"
                    href="mailto:Ray Ch<i@iraycd.com>"
                    class="site-btn"
                  >
                    Contact me
                  </a>
                  <a href="Resume.pdf" id="downloadCV" target='_blank' class="site-btn gray-btn">
                    Download cv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
