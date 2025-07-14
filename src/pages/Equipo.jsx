// Equipo.jsx
import React from 'react';

const integrantes = [
  {
    nombre: "Kymberly Aguilera",
    rol: "Trello, Sigma y diseño de página"
  },
  {
    nombre: "María Triana",
    rol: "Diseño de página y creación de códigos"
  }
];

const Equipo = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Nuestro Equipo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {integrantes.map((persona, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">{persona.nombre}</h3>
            <p className="mt-2 text-gray-600">{persona.rol}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;
