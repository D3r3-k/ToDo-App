import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { Alert } from '../Components/Alert'
import { Input } from '../Components/Input'

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await login(user.email, user.password);
      const local = localStorage.getItem(data.user.uid)
      if (!local) {
        localStorage.setItem(data.user.uid, JSON.stringify({ id: data.user.uid, nombre: user.nombre, apellido: user.apellido, email: user.email, tareas: [] }));
      }
      navigate('/')
    } catch (error) {
      console.log(error);
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta.");
      } else if (error.code === "auth/user-not-found") {
        setError("El correo no existe");
      } else if (error.code === "auth/invalid-email") {
        setError("Correo invalido")
      } else if (error.code === "auth/internal-error") {
        setError("Error interno")
      }
    }
  }

  return (
    <>
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl pt-10 my-40 py-2">
        <section className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert text-white'>
          <section className="bg-gray-800 rounded-lg">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <img src="./images/logo.svg" alt="Logotipo de la pagina" width={80} className='m-auto' />
              <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white text-center">Inicia Sesion</h1>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <Input title="Correo Electronico" type="email" placeholder="correo@dominio.com" name="email" id="mail" handleChange={handleChange} />
                  <Input title="Contraseña" type="password" placeholder="************" name="password" id="pass" handleChange={handleChange} />
                </div>
                <p className='text-center mt-8'>¿No tienes una cuenta? <Link to='/register' className='text-blue-400 font-bold ml-5 rounded-lg px-4 py-2 border-sky-400 border'>Registrate!</Link></p>
                <div className="flex justify-center">
                  <button type="submit" className="px-5 py-2.5 mt-4 sm:mt-6 text-xl text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800">
                    Iniciar Sesion
                  </button>
                </div>
              </form>
              {error && <Alert error={error} />}
            </div>
          </section>
        </section>
      </div>
    </>
  )
}
