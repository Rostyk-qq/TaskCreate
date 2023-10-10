import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import RenderPages from './Pages/render/renderPages';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <RenderPages />
      </div>  
    </BrowserRouter>
  );
}

export default App;
