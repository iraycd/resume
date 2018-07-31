import React, { Component } from "react";
class Skills extends Component {
  render() {
    return (
      <section id="skills" class="section">
        <div class="container">
          <div class="row wave-bg">
            <div class="zigzag wow slideInLeft">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect class="st0" width="105" height="20" />
                  <g>
                    <polyline
                      class="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect class="st0" width="105" height="20" />
                  <g>
                    <polyline
                      class="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div class="col-md-4 wow slideInLeft">
              <div class="section-sidebar">
                <h2>
                  <span class="point">Skills</span>
                </h2>
                <div class="opacity-box">
                  <p>
                    I am inspired by creating great work with people who are as
                    passionate as I am about building something awesome.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-6 wow zoomIn">
                  <div class="advantages-box">
                    <h4>Leadership</h4>
                    <div class="opacity-box">
                      <p>
                        Lean &amp; Agile, Agile development, Sprint Management,
                        Kandan Boards, Startup Mindset, Empathetic, Team
                        Oriented, Always On
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 wow zoomIn">
                  <div class="advantages-box">
                    <h4>Web Development</h4>
                    <div class="opacity-box">
                      <p>
                        Javascript, Node.js, Express.js, TypeScript, Koa,
                        Python, Django, Flask, Go, MongoDB, Redis, PostgreSQL,
                        MySQL.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>UI\UX Design</h4>
                    <div class="opacity-box">
                      <p>
                        Sketching, Sketch, Mindnode, Prototyping, Wireframing,
                        User Research, Usability Testing.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>Frontend Development</h4>
                    <div class="opacity-box">
                      <p>
                        HTML, CSS, LESS, SASS, Bootstrap, React.js, Flux with
                        Redux, CSS with JS, JEST, React Native, Phonegap /
                        Cordova, Ionic, Foundation, Angular.js.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>Technologies</h4>
                    <div class="opacity-box">
                      <p>
                        Desktop Application, Mac, Windows, Linux, Electron,
                        Virtualization, Docker and Kubernetes, CI and CD,
                        Gitlab-CI, Travis and Jenkins
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
