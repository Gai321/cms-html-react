import { useState } from 'react'
import './App.css'
import Carousel from './Components/Carousel';
import Cards from './Components/Cards';//
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Signin from'./Components/Signin';
//import Form from './Components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Placement from './Pages/Placement';
import Login from './Pages/Login';
import Campus from './Pages/Campus';
import Careers from './Pages/Careers';

export default function App() {
  
  return (
    <>       
  
 <BrowserRouter>
 <Header/>
    <Routes>
      <Route path='/home' element = {<Homepage/>}/>
      <Route path='/campus' element = {<Campus/>}/>
      <Route path='/careers' element = {<Careers/>}/>
      <Route path='/placement' element = {<Placement/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/login' element = {<Login/>}/>

 </Routes>
 <Footer/>
 </BrowserRouter>
{/*  
<Form/> */}
    </>
  );

};



















































































