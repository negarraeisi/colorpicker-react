import React, { useState } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default background color

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Pick a Color!</h1>
      <ColorPicker onColorChange={(color) => setBgColor(color)} />
    </div>
  );
}

export default App;
