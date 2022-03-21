import './App.css';
import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm';
import Rank from './components/Rank/rank';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles:{
    line_linked: {
      shadow: {
        enable: true,
        color:"#3CA9D1",
        blur: 5
      }
    }
  }
}
class App extends Component() {
  render () {
    return (
      <div className='App'>
        <Particles className='particles'
        params={particlesOptions}
        />
      <Navigation />
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      </div>
    );
  };
}

export default App;