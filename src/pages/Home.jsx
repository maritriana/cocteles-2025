import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-700">
        Bienvenid@ a la App de Cócteles 🍹
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Explora recetas, ingredientes y prepara tu cóctel favorito.
      </p>
      <Link
        to="/cocteles"
        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-xl"
      >
        Ver Cócteles
      </Link>
    </div>
  );
};

export default Home;
