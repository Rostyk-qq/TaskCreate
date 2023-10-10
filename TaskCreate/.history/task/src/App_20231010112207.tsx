import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'
import RenderPages from './Pages/render/renderPages';
import { AppDispatch } from './Redux/store';
import { pageRenderCreator } from './Redux/Reducers/ActionCreators';
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if(localStorage.getItem('registred')){
        
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
