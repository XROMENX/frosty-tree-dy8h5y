import React, { useState } from 'react';

// Define the GenerateButton and GeneratedCodeBox components
function GenerateButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Generate
    </button>
  );
}

function GeneratedCodeBox({ code }) {
  return (
    <div>
      <h2>Generated Code:</h2>
      <p>{code}</p>
    </div>
  );
}

// Function to generate code
function generateCode() {
  var list = [],
    sum = 0;

  for (var i = 10; i > 1; i--) {
    var j = Math.floor(Math.random() * Math.floor(10));
    list.push(j);
    sum += j * i;
  }

  var s = sum % 11;
  if (s < 2) {
    list.push(s);
  } else if (s >= 2) {
    list.push(11 - s);
  }

  return list.join('');
}
 

// Define the App component that uses App1 and manages state
function App() {
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerateClick = () => {
    const code = generateCode();
    setGeneratedCode(code);
  };

  return (
    <div>
      <App1 handleGenerateClick={handleGenerateClick} generatedCode={generatedCode} />
    </div>
  );
}

export {  generateCode, App }; // Export App1, generateCode, and App
