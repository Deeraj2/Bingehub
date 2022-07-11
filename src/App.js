import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import TvPage from './Pages/TvPage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes>  
          <Route path="/" element={ <HomePage /> } />
          <Route path="/movie/:movie_id" element={ <MoviePage /> } />
          <Route path="/tv/:tv_id" element={ <TvPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
