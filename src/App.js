// src/App.js
import React, { useState } from 'react';
import quotes from './quotes';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Random Quote Generator</h1>
        <p>{quote}</p>
        <button onClick={generateRandomQuote}>Generate Quote</button>
      </div>
    </div>
  );
}

export default App;
