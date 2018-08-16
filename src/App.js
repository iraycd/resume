import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Skills from './Skills';
import Experience from './Experience';
import Awards from './Awards';
class App extends Component {
  render() {
    return (    
      <div>  
        <Header/>
        <Intro />
        <Skills />
        <Experience />
        <Awards />
      </div>
    )
  }
}

export default App;
