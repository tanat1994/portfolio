import React, { Component } from 'react';
import LaravelLogo from '../img/laravel.png';

class Card extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-image">
          <figure class="image is-4by3">
            <img src={ LaravelLogo } alt="Placeholder image">
          </figure>
        </div>
      </div>
    );
  };
};

export default Card;
