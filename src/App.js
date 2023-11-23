import React from 'react';
import './styles.css'; // Import the CSS file for styling
import { App , generateCode } from './Components'; // Import the App component from Components.js

function MainApp() {
  return (
    <div className="retro-container">
      <div className="retro-border">
        <div className="notebook">
          <App /> {/* Render the App component here */}
        </div>
      </div>
    </div>
  );
}

export default MainApp;
