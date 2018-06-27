import React, { Component } from 'react';
import Timeline from './timeline';

class About extends Component {
  render () {
    const headerTitle = {
      fontFamily: 'Comic Sans MS',
      fontSize: '2em'
    };
    return(
      <div>
        <section className="section">
          <div className="container">
            <h1 style={headerTitle} className="hvr-grow"><strong>About me ~.</strong></h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Timeline />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h3><strong>Hola!</strong> my name is Thanut Wiriyasathit you can call me Nat from Thailand. I am 23 years old and working at TraceoN co.ltd for about 1 year as a Junior Full stack developer.
              I loves programming, technology, gaming, football, and traveling. I always practice to get better in English communication skills and Programming skills because when I studied in college I did not pay attention much on these class,
              so I have to tried harder and harder to follow the technology trends.
            </h3>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h1 style={headerTitle} className="hvr-grow">Created by <tab/> React & Bulma
            </h1>
          </div>
        </section>
      </div>
    );
  }
};
export default About;
