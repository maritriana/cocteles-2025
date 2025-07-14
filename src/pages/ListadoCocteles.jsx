import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoCocteles = () => {
  const [cocteles, setCocteles] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    // Al cargar por primera vez: trae cócteles populares
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => setCocteles(data.drinks || []));
  }, []);

  const handleChange = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    if (valor === "") {
      // Si está vacío, volver a mostrar lista estándar
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then((res) => res.json())
        .then((data) => setCocteles(data.drinks || []));
    } else {
      // Buscar por texto
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${valor}`)
        .then((res) => res.json())
        .then((data) => setCocteles(data.drinks || []));
    }
  };

  return (
    <div className="bg-pink-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-4 text-pink-700">Lista de Cócteles</h1>

      <input
        type="text"
        value={busqueda}
        onChange={handleChange}
        placeholder="Buscar cóctel..."
        className="block w-full p-2 mb-6 border border-pink-300 rounded"
      />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cocteles.map((coctel) => (
          <Link
            key={coctel.idDrink}
            to={`/detalle/${coctel.idDrink}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
          >
            <img
              src={coctel.strDrinkThumb}
              alt={coctel.strDrink}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-semibold text-center mt-2">{coctel.strDrink}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListadoCocteles;
