import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'
import RenderPages from './Pages/render/renderPages';
import { AppDispatch } from './Redux/store';

function App() {
  
  useEffect(() => {
    if(){

    }
  }, [])
  return (
      <div className="page">
        <BrowserRouter>
          <RenderPages />
        </BrowserRouter>
      </div>  
  );
}

export default App;
