import Loguito from '../img/Softwash.jpg';
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const LoginAdmin = () => {
  const [CodigoU, setCodigoU] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setCodigoU(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar la lógica de inicio de sesión, por ejemplo, enviar datos al servidor
    console.log('Codigo:', CodigoU);
    console.log('Password:', password);
  };

  return (
    <>

      <div className="flex items-center justify-center h-screen bg-gray-100">

        <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded-lg w-full md:w-1/2 p-4 flex flex-col items-center justify-center">



          <div className="forn-container">
            <h2 className="text-2xl font-semibold mb-6 text-center">Registrarse como Cliente</h2>
            <div className=''>
              <img className='h-16 w-16 object-cover rounded-full bg-left-top mb-2' src={Loguito} alt="Logo_img/" />
            </div>
            <div className="mb-4">
              <label htmlForm="correo" className="block text-black font-bold content-center ">
                Codigo Usuario
              </label>
              <input
                id="Codigo"
                type="text"
                placeholder="Codigo Usuario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={CodigoU}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className='ml-60'>
            <label className='flex items-center'>
                  <input name='role' type="radio" /> Administrador
                </label > 
                <label className='flex items-center '>
                  <input name='role' type="radio" /> Usuario
                </label>
            </div>
            <div className="mb-4">
              <label htmlForm="password" className="block text-black font-bold">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="contraseña"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md pr-10"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  type="button"
                  className="absolute top-5 right-2 text-gray-500 aling-items-center"
                  onClick={handleShowPasswordToggle}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 w-full"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </>

  );
};

export default LoginAdmin;