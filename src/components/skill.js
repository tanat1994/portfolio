import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';

import LaravelLogo from '../img/laravel.png';
import NodeJsLogo from '../img/nodejs.png';
import BootstrapLogo from '../img/bootstrap.png';
import ReactLogo from '../img/react-logo.png';
import MySqlLogo from '../img/mysql-logo.png';
import SlimLogo from '../img/slim-API.png';
import MongoLogo from '../img/mongo-logo.png';


class Skill extends Component {
  render () {
    const fixed_img_size = {

    };
    const fontTitle = {
      fontFamily: 'Comic Sans MS',
    };
    const headerTitle = {
      fontFamily: 'Comic Sans MS',
      fontSize: '2em'
    };
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 style={headerTitle} className="hvr-grow"><strong>My Skills</strong></h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Flip left big>
                  <div className="card">
                    <div className="card-content is-horizontal-center">
                      <figure class="image is-4by3">
                        <img src={ReactLogo} style={fixed_img_size} alt="Placeholder image" />
                      </figure>

                      <div class="content">
                        <h1 style={fontTitle}>React</h1>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>

              <div className="column">
                <Flip left big>
                  <div className="card">
                    <div class="card-content is-horizontal-center">
                      <figure class="image is-4by3">
                        <img src={NodeJsLogo} style={fixed_img_size} alt="Placeholder image" />
                      </figure>

                      <div class="content">
                        <h1 style={fontTitle}>Node.JS</h1>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>

              <div className="column">
                <Flip left big>
                  <div className="card">
                    <div class="card-content is-horizontal-center">
                      <figure class="image is-4by3">
                        <img src={BootstrapLogo} style={fixed_img_size} alt="Placeholder image" />
                      </figure>

                      <div class="content">
                        <h1 style={fontTitle}>Bootstrap</h1>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <Flip left big>
                  <div className="card">
                    <div className="card-content is-horizontal-center">
                      <figure class="image is-4by3">
                        <img src={LaravelLogo} style={fixed_img_size} alt="Placeholder image" />
                      </figure>

                      <div class="content">
                        <h1 style={fontTitle}>Laravel Framework</h1>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>

              <div className="column">
                <Flip left big>
                  <div className="card">
                    <div class="card-content is-horizontal-center">
                      <figure class="image is-4by3">
                        <img src={MySqlLogo} style={fixed_img_size} alt="Placeholder image" />
                      </figure>

                      <div class="content">
                        <h1 style={fontTitle}>MySql</h1>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>

              <div className="column">
                <Flip left big>
                  <div className="card">
                    <div class="card-content is-horizontal-center">
                      <figure class="image is-4by3">
                        <img src={SlimLogo} style={fixed_img_size} alt="Placeholder image" />
                      </figure>

                      <div class="content">
                        <h1 style={fontTitle}>Slim Framework</h1>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <Flip left big>
                  <div className="card">
                    <div className="card-content is-horizontal-center">
                      <figure class="image is-4by3">
                        <img src={MongoLogo} style={fixed_img_size} alt="Placeholder image" />
                      </figure>

                      <div class="content">
                        <h1 style={fontTitle}>Mongo DB</h1>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>

              <div className="column"></div>
              <div className="column"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Skill;
