import React from 'react';
import Home from './components/Home';
import Recipe from './components/Recipe';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:idMeal' element={<Recipe/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
