import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Prediction from './Components/Prediction';
import Footer from './Components/Footer';

import { BrowserRouter , Routes,Route } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>


    <Routes>
      <Route exact path='/' element={  <Home/>}/>
      <Route exact path='/prediction' element={  <Prediction/>}/>


       
      
    </Routes>
    <Footer/>
    

    </BrowserRouter>
      
      
      
    
  );
}

export default App;
