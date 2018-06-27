import React, { Component } from 'react';
import MyImage from '../img/tanat_pic.jpg';

class Profile extends Component {
  render () {
    const circle_pic = {
      borderRadius: '50%'
    };
    return (
      <section className="section">
        <div className="container">
          <figure className="image is-128x128">
            <img src={MyImage} style={ circle_pic }/>
          </figure>
        </div>
      </section>
    );
  };
};

export default Profile;
