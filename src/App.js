import React from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
        <div className="container">
        <Weather defaultCity="Tehran" />

        <footer>
          This project was coded by {" "}
          Sanaz-Gh 
          {" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
