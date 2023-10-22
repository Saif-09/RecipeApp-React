import React from 'react';
import Home from './components/Home';
import Recipe from './components/Recipe';
import './App.css';
import Catagory from './components/Catagory';
import SearchElement from './components/SearchElement';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<PageNotFound />} />
        <Route path='/:idMeal' element={<Recipe/>}/>
        <Route path='/category/:name' element={<Catagory/>}/>
        <Route path='/search/:item' element={<SearchElement/>}/>
        
      </Routes>
    </Router>
    
    </>
  )
}

export default App
