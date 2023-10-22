import React from 'react';
import Home from './components/Home';
import Recipe from './components/Recipe';
import './App.css';
import Catagory from './components/Catagory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:idMeal' element={<Recipe/>}/>
        <Route path='/category/:name' element={<Catagory/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
