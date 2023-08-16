import Loguito from '../img/Softwash.jpg';
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const LoginAdmin = () => {
  const [EmailU, setEmailU] = useState('');
  const [password, setPassword] = useState('');
  const [ConfiPassword, setConfiPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [NombreU, setNombreU] = useState('');
  const [LastName, setLastName] = useState('')
  const [IdNumber, setIdNumber] = useState (''); 

  const handleEmailChange = (event) => {
    setEmailU(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfiPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleNameUChange = () => {
    setNombreU(Event.target.value)
  }
  
  const handleLastNameUChange = () => {
    setLastName(Event.target.value)
  }

  const handleIdNumberUChange = () => {
    setIdNumber(Event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar la lógica de inicio de sesión, por ejemplo, enviar datos al servidor
    console.log('Codigo:', CodigoU);
    console.log('Password:', password);
    console.log('Nombre', NombreU);
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
                Correo Electronico
              </label>
              <input
                id="Codigo"
                type="text"
                placeholder="Correo Eletronico"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={EmailU}
                onChange={handleEmailChange}
                required
              />
            </div>


            <div>
              <label htmlForm="name" className='block text-black font-bold content-center '>
                Ingrese Nombres
              </label>
              <input
                id="Name"
                type="text"
                placeholder="Nombre"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={setNombreU}
                onChange={handleNameUChange}
                required
              />
            </div>


            <div>
              <label htmlFor="lastName" className='block text-black font-bold content-center '>
                Ingrese Apellidos
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Apellidos"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={LastName}
                onChange={handleLastNameUChange}
                required
              />
            </div>
            <div>
              <label htmlFor="name" className='block text-black font-bold content-center '>
                Tipo de Documento
              </label>
              <select name="lenguajes" id="lang">
                <option value="Seleccionar">Seleccionar</option>
                <option value="Cédula Cuidadanía">Cédula Ciudadanía</option>
                <option value="Cédula Extranjera">Cédula Extranjera </option>
              </select>
              <div>
              <label htmlFor="name" className='block text-black font-bold content-center '>
                Tipo de Documento
              </label>
              <input
                id=""
                type="text"
                placeholder="Numero de Documento"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={IdNumber}
                onChange={handleIdNumberUChange}
                required
              />
            </div>
            </div>
            <div>
              <label htmlFor="name" className='block text-black font-bold content-center '>
                Ingrese Nombre
              </label>
              <input
                id="Name"
                type="text"
                placeholder="Nombre"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={NombreU}
                onChange={handleNameUChange}
                required
              />
              <div className=''>
                <input name = "Sexo" type="radio" />Femenino
                <input  name ="Sexo "type="radio" />Masculino
              </div>
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
              <label htmlForm="password" className="block text-black font-bold">
                Confirmar Contraseña
              </label>
              <div className="relative">
                <input
                  id="ConfiPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="contraseña"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md pr-10"
                  value={ConfiPassword}
                  onChange={handleConfirmPasswordChange}
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