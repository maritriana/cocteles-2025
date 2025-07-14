import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6 text-center">
      <h1 className="text-5xl font-bold text-pink-600 mb-4">404</h1>
      <p className="text-xl mb-6 text-gray-700">¡Oops! Página no encontrada.</p>
      <Link
        to="/"
        className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;