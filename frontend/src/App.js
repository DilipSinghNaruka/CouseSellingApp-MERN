import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './Layout/Header';
import Courses from './Courses/Courses';
import Footer from './Layout/footer';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/courses" element={<Courses/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
