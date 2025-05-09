import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/Ddetails';
import About from './pages/about';
import Nav from './Components/navbar/nav';
import Contact from './pages/contact';
 

import Footer from './Components/footer/Footer';
import PopupBookingForm from './Components/contact/Popform';
 
 

const App = () => {
  return ( 
    <div>
        <BrowserRouter>
   <Nav />
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details' element={<Details/>} /> 
      <Route path='/about' element={<About/>} />

      <Route path='/contact' element={<Contact/>} />
  </Routes>
   
  </BrowserRouter>

   
  <PopupBookingForm/>
   <Footer/>
    </div>
   
  );
}

export default App

