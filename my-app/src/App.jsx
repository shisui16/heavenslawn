import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import Navigation from './components/navigation'; // ✅ Import the component
import Layout from './components/Layout';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navigation />

      {/* Route Components */}
      <AppRoutes />

      {/* Static Content */}
      
    </div>
  );
}

export default App;
