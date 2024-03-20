// App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conoceme from "../components/views/Conoceme";
import Salud from '../components/views/Salud';
import Nutricion from "../components/views/Nutricion";
import Autocuidado from "../components/views/Autocuidado";

const App = () => {
  return (
    <BrowserRouter>
    
       
        <Routes>
          <Route path='/conoceme' element={<Conoceme/>} />
          <Route path='/salud' element={<Salud/>} />
          <Route path='/nutricion' element={<Nutricion/>} />
          <Route path='/autocuidado' element={<Autocuidado/>} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;