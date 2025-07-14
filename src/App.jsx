import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import ListadoCocteles from './pages/ListadoCocteles';
import InfoAPI from './pages/InfoAPI';
import Equipo from './pages/Equipo';
import Login from './pages/Login';
import NotFound from './pages/NotFound'; // ✅ Importación correcta

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-pink-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocteles" element={<ListadoCocteles />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/infoapi" element={<InfoAPI />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
