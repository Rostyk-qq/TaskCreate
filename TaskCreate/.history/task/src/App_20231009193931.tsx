import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import RenderPages from './Pages/render/renderPages';

function App() {
  return (
    <div className="page">
      
      <RenderPages />
    </div>  
  </BrowserRouter>
  );
}

export default App;
