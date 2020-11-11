import React from 'react'
import Routes from '../Routes'
import NavBar from './NavBar'
import '../styles/App.css';

function App() {
  return (
    <main>
      <NavBar />
      <div className='container'>
        <Routes />
      </div>
    </main>
  );
}

export default App;
