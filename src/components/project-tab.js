import React, { Component } from 'react';

class ProjectTable extends Component {
  render () {
    const headerTitle = {
      fontFamily: 'Comic Sans MS',
      fontSize: '2em'
    };
    return (
      <section className="section">
        <div className="container">
          <h1 style={headerTitle} className="hvr-grow"><strong>Education & Job exp.</strong></h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
          </div>
        </div>
      </section>
    );
  };
};
export default ProjectTable;
