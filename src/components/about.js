import React, { Component } from 'react';
import Timeline from './timeline';

class About extends Component {
  render () {
    const headerTitle = {
      fontFamily: 'Comic Sans MS',
      fontSize: '2em'
    };
    return(
      <div class="is-divider" data-content="OR">
        <section className="section">
          <div className="container">
            <h1 style={headerTitle} className="hvr-grow"><strong>About me</strong></h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Timeline />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
export default About;
