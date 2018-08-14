import React, { Component } from "react";
import AwardJpg from './Award.jpg'

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
                  <span class="point">Awards &amp; Stars</span>
                </h2>
                <div class="opacity-box">
                  <p>
                    It was never for awards and stars but it gives a boost of always giving the best,
                    performing much better.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-12 wow zoomIn">
                  <div class="advantages-box">
                    <h4>Emerging Mobile Internet Company - 2015</h4>
                    <div class="opacity-box">
                      <img src={AwardJpg} />
                    </div>
                  </div>
                <hr />
                </div>
                <div class="col-md-12 wow zoomIn">
                  <div class="advantages-box">
                    <h4>React/Redux Style Guide</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/iraycd/React-Redux-Styleguide" data-size="large" data-show-count="true" aria-label="Star iraycd/React-Redux-Styleguide on GitHub">Star</a>
                        <p>Written a working set of guidelines for developing React applications. Best practices, patterns and technology change over time, so this a living set of style guides for React Redux.</p>
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
