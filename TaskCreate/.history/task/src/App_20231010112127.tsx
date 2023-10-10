import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom'
import RenderPages from './Pages/render/renderPages';
import { AppDispatch } from './Redux/store';
import { pageRenderCreator } from './Redux/Reducers/ActionCreators';
import useDispatch from 

function App() {
  const dispatch = <AppDispatch>useDispatch()
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
