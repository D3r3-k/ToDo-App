import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { Alert } from '../Components/Alert'
import { Input } from '../Components/Input'
import { InputMid } from '../Components/InputMid'

export const Register = () => {
  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (user.password === user.confirmpassword) {
        const data = await signup(user.email, user.password);
        localStorage.setItem(data.user.uid, JSON.stringify({ id: data.user.uid, nombre: user.nombre, apellido: user.apellido, email: user.email, tareas: [] }));
        navigate('/')
      } else {
        setError('Las contraseñas deben ser iguales')
      }
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe ser mayor a 6 caracteres");
      } else if (error.code === "auth/email-already-in-use") {
        setError("El correo ya esta registrado");
      }
    }
  }

  return (
    <>
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl pt-10 my-28 py-2">
        <section className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert text-white'>
          <section className="bg-gray-800 rounded-lg">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <img src="./images/logo.svg" alt="Logotipo de la pagina" width={80} className='m-auto' />
              <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white text-center">Registrarse</h1>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <InputMid title="Nombre" type="text" placeholder="Nombre" name="nombre" id="nombre" handleChange={handleChange} />
                  <InputMid title="Apellido" type="text" placeholder="Apellido" name="apellido" id="apellido" handleChange={handleChange} />
                  <Input title="Correo Electronico" type="email" placeholder="correo@dominio.com" name="email" id="mail" handleChange={handleChange} />
                  <InputMid title="Contraseña" type="password" placeholder="************" name="password" id="password" handleChange={handleChange} />
                  <InputMid title="Confirmar Contraseña" type="password" placeholder="************" name="confirmpassword" id="confirmpassword" handleChange={handleChange} />
                </div>
                <p className='text-center mt-8'>¿Ya tienes una cuenta? <Link to='/login' className='text-blue-400 font-bold ml-5 rounded-lg px-4 py-2 border-sky-400 border'>Inicia Sesión!</Link></p>
                <div className="flex justify-center">
                  <button type="submit" className="px-5 py-2.5 mt-4 sm:mt-6 text-xl text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800">
                    Registrarse
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
