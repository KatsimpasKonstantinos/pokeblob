import React from 'react';
import './App.css';
import CardCanvas from './Pages/CardCanvas';

function App() {

  return (
    <div className="App">
      <h1 >Card Canvas</h1>
      <div className='CanvasGallery'>
        <CardCanvas />
      </div>
    </div>
  );
}

export default App;
