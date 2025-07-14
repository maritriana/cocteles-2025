// DetalleCoctel.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const traducciones = {
  "Dark rum": "Ron oscuro",
  "Light rum": "Ron blanco",
  "Vodka": "Vodka",
  "Orange juice": "Jugo de naranja",
  "white Creme de Cacao": "Crema de cacao blanca",
  "Creme de Cacao": "Crema de cacao",
  "Roses sweetened lime juice": "Cordal de lima endulzada Roses",
  "Cranberry Juice": "Zumo de arándanos",
  "Top Sprite": "Sprite"
};

const traducir = (texto) => {
  return traducciones[texto] || texto;
};

const DetalleCoctel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coctel, setCoctel] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerDetalle = async () => {
      try {
        const respuesta = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const datos = await respuesta.json();
        setCoctel(datos.drinks[0]);
        setCargando(false);
      } catch (error) {
        console.error("Error al cargar detalle:", error);
        setCargando(false);
      }
    };
    obtenerDetalle();
  }, [id]);

  if (cargando) return <p className="text-center mt-8">Cargando...</p>;
  if (!coctel) return <p className="text-center mt-8">Cóctel no encontrado.</p>;

  const ingredientes = [];
  for (let i = 1; i <= 15; i++) {
    const ingrediente = coctel[`strIngredient${i}`];
    const medida = coctel[`strMeasure${i}`];
    if (ingrediente) {
      ingredientes.push(`${medida || ""} ${traducir(ingrediente)}`.trim());
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">{coctel.strDrink}</h2>
      <img
        src={coctel.strDrinkThumb}
        alt={coctel.strDrink}
        className="w-full rounded shadow mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-800">Instrucciones:</h3>
      <p className="mb-4">{coctel.strInstructionsES || coctel.strInstructions}</p>

      <h3 className="text-lg font-semibold text-blue-800">Ingredientes:</h3>
      <ul className="list-disc list-inside mb-6">
        {ingredientes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate('/cocteles')}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow-md"
        >
          ← Volver a Cócteles
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md"
        >
          🏠 Ir a Inicio
        </button>
      </div>
    </div>
  );
};

export default DetalleCoctel;
