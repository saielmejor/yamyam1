// add the boot strap css in App js  
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import React from 'react';
import Store from './pages/Store';
import { BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom';
import Pickup from './pages/Pickup';

import HeaderRewards from './components/HeaderRewards';

function App() {
  return (
    <div className='App'>
    
    <NavigationBar/>
    <Home/>
    <HeaderRewards/> 
    <Store/>
    <Pickup/>
    
    
      
    </div>
  );
}

export default App;
