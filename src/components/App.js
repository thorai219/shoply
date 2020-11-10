import React from 'react'
import Routes from '../Routes'
import NavBar from './NavBar'
import '../styles/App.css';

function App() {
  return (
    <main>
      <NavBar />
      <div className='container'>
        <h2>Shoply</h2>
        <Routes />
      </div>
    </main>
  );
}

export default App;
