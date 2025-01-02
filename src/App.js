import React from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import Introduction from './components/Introductio';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Introduction/>
    </div>
  );
}

export default App;
