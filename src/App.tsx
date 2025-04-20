import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UnderstandingText from './components/UnderstandingText';
import Crousal from './components/Crousal';
import Organize from './components/Organize';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="layout">
      <Navbar />
      <UnderstandingText/>
      <Crousal/>
      <Organize/>
      <Footer/>
      </div>
     
    </div>
  );
}

export default App;
