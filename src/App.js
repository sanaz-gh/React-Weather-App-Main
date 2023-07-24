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
          {/* <a
            href="https://lucent-faloodeh-e0374f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
               Hosted on Netlify
          </a> */}
          {" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
