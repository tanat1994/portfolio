import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class Header extends Component {
    render () {
      const fontTitle = {
        fontFamily: 'Comic Sans MS',
        fontSize: '3em'
      };

      return (
        <div id="particles-js">
          <section className="hero is-dark is-large has-bg-img">
            <div className="hero-body">
              <div className="container">
                <h1 className="title hvr-grow" style={ fontTitle }>
                  THANUT WIRIYASATHIT ;~)
                </h1>
                <h1 className="subtitle">
                  <Typing speed={100}>
                    <span>Full Stack Dev | Web Developer | Blockchain Tech</span>
                  </Typing>
                </h1>
              </div>
            </div>
          </section>
        </div>
      );
    }
};

export default Header;
