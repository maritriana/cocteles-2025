import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => setIsRegistering(!isRegistering);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Guardar datos al registrar
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Cuenta creada con éxito. Ahora puedes iniciar sesión.");
      setIsRegistering(false);
    } else {
      // Verificar datos al iniciar sesión
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email === email && user.password === password) {
        alert("Inicio de sesión exitoso");
        navigate("/"); // Redirigir al Home
      } else {
        alert("Correo o contraseña incorrectos");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? "Crear cuenta" : "Iniciar sesión"}
        </h2>

        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">Nombre completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre completo"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
          >
            {isRegistering ? "Registrarse" : "Ingresar"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
          <span
            onClick={toggleForm}
            className="text-pink-600 cursor-pointer hover:underline"
          >
            {isRegistering ? "Iniciar sesión" : "Crear cuenta"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
