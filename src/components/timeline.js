import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';

class Timeline extends Component {
  render () {
    const heading_title = {
      fontSize: '1.2em'
    };
    const timeline_title = {
      fontSize: '2em'
    };
    return (
      <Flip left big>
        <div className="timeline is-centered">

          <div className="timeline-item is-grey">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content is-pulled-left">
              <p className="heading"><p className="is-pulled-left">August 2013 - May 2017</p></p>
              <p style={ timeline_title }><strong>Mahidol University</strong></p>
              <p className="is-pulled-left">Faculty of ICT (Com Sci.)</p>
            </div>
          </div>

          <div className="timeline-item is-grey">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading">June 2017 - August 2017</p>
              <p style={ timeline_title }><strong>Agoda Training</strong></p>
              <p>Training in Quality Assurance position</p>
            </div>
          </div>

          <div className="timeline-item is-grey">
            <div className="timeline-marker is-primary"></div>
            <div className="timeline-content">
              <p className="heading"><p className="is-pulled-left">September 2017 - Current</p></p>
              <p style={ timeline_title }><strong>TraceoN co.ltd</strong></p>
              <p className="is-pulled-left">Full Stack Developer</p>
            </div>
          </div>

        </div>
      </Flip>
    );
  };
};

export default Timeline;
