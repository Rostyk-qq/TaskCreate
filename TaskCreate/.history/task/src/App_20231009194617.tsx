import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import RenderPages from './Pages/render/renderPages';

function App() {
  return (
      <div className="page">
        <BrowserRouter></BrowserRouter>
        <RenderPages />
        </BrowserRouter>
      </div>  
  );
}

export default App;
