import React from 'react';
import './App.css';
import Animation1 from './components/Animation1'
import Animation2 from './components/Animation2'
import Animation3 from './components/Animation3'

function App() {
  return (
      <div className="app-content">
        {/* <Animation1 /> */}
        {/* <Animation2 />     */}
        <Animation3 grid_size={10}/>
      </div>
  );
}

export default App;
