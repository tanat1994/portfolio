import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'hover.css/css/hover-min.css';
import 'bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css';
import 'bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css';
import Header from './components/header';
import MenuBar from './components/menu-bar';
import Skill from './components/skill';
import Fade from 'react-reveal/Fade';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
        <Header />
        <Skill />
        <About />
      </div>
    );
  }
}

export default App;
