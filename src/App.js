import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Topbar from './components/topBar/Topbar';
import Single from './pages/single/Single';
import Home from './pages/home/Home';

class App extends Component {
  render() {
    return (
     <div>
       <Topbar/>
       <Single/>
     </div>
    );
  }
}

export default App;
