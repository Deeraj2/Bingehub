import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes>  
          <Route path='/' element={ <HomePage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
