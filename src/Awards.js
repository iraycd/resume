import React, { Component } from "react";
import AwardJpg from './Award.jpg'

class Awards extends Component {
  render() {
    return (
      <section id="awards" class="section">
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
            <div class="col-md-3 wow slideInLeft">
              <div class="section-sidebar">
                <h2>
                  <span class="point">Awards &amp; Open Source </span>
                </h2>
                <div class="opacity-box">
                  <p>
                    It was never for awards and stars but it gives a boost of always giving the best,
                    performing much better.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-12 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>Emerging Mobile Internet Company - 2015</h4>
                    <div class="opacity-box">
                      <img src={AwardJpg} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>React/Redux Style Guide</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/iraycd/React-Redux-Styleguide" data-size="large" data-show-count="true" aria-label="Star iraycd/React-Redux-Styleguide on GitHub">Star</a>
                        <p>Written a working set of guidelines(Best practices, patterns and technology) for developing React applications.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>Brickworks - 2014 Deprecated</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/iraycd/brickwork" data-size="large" data-show-count="true" aria-label="Star iraycd/brickwork on GitHub">Star</a>
                        <p>BrickWork is a reponsive jQuery plugin to create Dynamic layouts.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>Django Phone Login</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/wejhink/django-phone-login" data-size="large" data-show-count="true" aria-label="Star wejhink/django-phone-login on GitHub">Star</a>
                        <p>Phone number login with no additional passwords to remember.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>Node gRPC Boilerplate</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/iraycd/node-grpc-boilerplate" data-size="large" data-show-count="true" aria-label="Star iraycd/node-grpc-boilerplate on GitHub">Star</a>
                        <p>Rich content editing entirely re-imagined for the web</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>django-video-encoding</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/escaped/django-video-encoding" data-size="large" data-show-count="true" aria-label="Star escaped/django-video-encoding on GitHub">Star</a>
                        <p>django-video-encoding helps to convert your videos into different formats and resolutions.</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>Django Video Encoding</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/escaped/django-video-encoding" data-size="large" data-show-count="true" aria-label="Star escaped/django-video-encoding on GitHub">Star</a>
                        <p>django-video-encoding helps to convert your videos into different formats and resolutions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>Django Videokit</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/pstreck/django-videokit" data-size="large" data-show-count="true" aria-label="Star pstreck/django-videokit on GitHub">Star</a>
                        <p>Video storage and processing for Django</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 wow zoomIn">
                  <hr />
                  <div class="advantages-box">
                    <h4>sir-trevor-js - Early Contributor</h4>
                    <div class="opacity-box">
                        <a class="github-button" href="https://github.com/madebymany/sir-trevor-js" data-size="large" data-show-count="true" aria-label="Star madebymany/sir-trevor-js on GitHub">Star</a>
                        <p>Rich content editing entirely re-imagined for the web</p>
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

export default Awards;
