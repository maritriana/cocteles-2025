import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import ListadoCocteles from './ListadoCocteles';
import Detalle from './Detalle';
import Equipo from './Equipo';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-green-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<ListadoCocteles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="*"element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
