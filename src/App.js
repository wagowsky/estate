import React from 'react';

import './App.css';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
// import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JustInvest</h1>
      <Nav/>
      </header>
      <main className="main">
        <Portfolio />
     {/* <About/> */}
      </main>
      <footer>
        <Contact/>
      </footer>
    </div>
  );
}

export default App;
