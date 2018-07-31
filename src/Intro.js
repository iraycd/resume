import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <section id="hello" class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 about-img-wrap">
              <div class="about-img wow slideInRight">
                <img
                  src="https://lh3.googleusercontent.com/mtrE2K97u-5x5I28dqcHF-J8OKvU_NVPe5983QL6Bpg-7dMiMT9GG1LfhZ7w-4DH8wKmifTUEZFBbo9o5uUlxOgO3ORy2CuqoJWu4qk0yvwpRxRQoTLA2tDQEBAdsbeosFGSApmaSHGW81zKrbbvckoCloqKMlPJv2BDzToayWrfJeru7uJ7DXKS31EqiPDjEP7WIo35l93z6BM0sorD7CF6rMnf7CEKUQPqQVl_nkHjjjkqdk_Y6v2DmFcsF-NJvBGJYKLJzf4YUXFbfmb8bLABscUqcL_K6hdLmal1dXPvdQH9j3N_KPRAgffSsXOcusSfbt24N30LEEZhwqXyP43sZ7HSNNCxtdSB2Ewal2Q3TuJnh-2YfSpn3xSS4dcp4fujAZcYlAR9jQXV9IGjyVZ9paj2Lhz_L0SLwMmvgQOM-aIaBqX4CTsB54RIzzmwYtu1p-B57KpSStjkBmfTGF7UX9lfUSQZkzdaNq2BIxdC7oYi_HorK_F6JMcURSneweh9_NqSho1H1eiqpgXCU7ZHzeg_kd7ekWR9oUBy4y_dsoDeqZBoScH0WcYPy7GBEP6b6_uYtUVFqicLQHovoxAmiZ11AdXaWJTsO-kG=w2048-h1150-no"
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
                    data-toggle="modal"
                    data-target="#contact-modal"
                    href="#"
                    class="site-btn"
                  >
                    Contact me
                  </a>
                  <a href="download/example.pdf" class="site-btn gray-btn">
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
