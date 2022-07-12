import React, { useContext, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Authentication from './components/Authentication/Authentication';
import Nav from './components/Nav/Nav';
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import TvPage from './Pages/TvPage';
import AlertData from './components/Alert/Alert';
import { Movie } from './Context';


function App() {

  
  const [alert, setAlert] = useState({
    ope: false,
    message: '',
    type: 'success'
  })
  
  const { user } = useContext(Movie)


  return (
    <div className='app'>
      {user  ? (<BrowserRouter>
        <Nav   setAlert={setAlert}/>
        <Routes>  
          <Route path="/" element={ <HomePage  /> } />
          <Route path="/movie/:movie_id" element={ <MoviePage /> } />
          <Route path="/tv/:tv_id" element={ <TvPage /> } />
        </Routes>
      </BrowserRouter>): (<Authentication setAlert={setAlert} />)}
      <AlertData alert={alert} setAlert={setAlert} />
    </div>
  );
}

export default App;
