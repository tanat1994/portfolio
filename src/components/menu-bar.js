import React, { Component } from 'react';

class MenuBar extends Component {
  render () {
    const social_icon = {
      color: 'black',
      fontSize: '1.8em',
      marginRight: '1em'
    };

    return (
      <nav className="navbar is-light">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">

              <div className="columns">
                <div className="column">
                  <p className="control">
                    <a className="" href="https://github.com/tanat1994" target="_blank">
                        <h2>
                          <span className="icon"><i className="fa fa-github hvr-grow" style={ social_icon }></i></span>
                        </h2>
                    </a>
                  </p>
                </div>

                <div className="column">
                  <p className="control">
                    <a className="" href="https://twitter.com/tanat1994" target="_blank">
                        <h2>
                          <span className="icon"><i className="fa fa-twitter hvr-grow" style={ social_icon }></i></span>
                        </h2>
                    </a>
                  </p>
                </div>

                <div className="column">
                  <p className="control">
                    <a className="" href="https://www.facebook.com/profile.php?id=100012679980448" target="_blank">
                        <h2>
                          <span className="icon"><i className="fa fa-facebook hvr-grow" style={ social_icon }></i></span>
                        </h2>
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    );
  };
};

export default MenuBar;
