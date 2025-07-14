import React from "react";

const InfoAPI = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-pink-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Información de la API</h1>
      <p className="text-lg max-w-xl">
        Esta aplicación utiliza la API pública <strong>TheCocktailDB</strong> para obtener recetas e información
        sobre cócteles. Esta API proporciona imágenes, ingredientes, instrucciones y detalles útiles para los usuarios
        que buscan inspiración o información sobre bebidas.
      </p>
      <p className="mt-4 text-lg">
        Puedes explorar más en su sitio oficial:
        <a
          href="https://www.thecocktaildb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline ml-2"
        >
          thecocktaildb.com
        </a>
      </p>
    </div>
  );
};

export default InfoAPI;
