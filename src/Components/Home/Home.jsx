import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext'
import { TaskList } from './Components/TaskList';
import { Header } from './Components/Header';

export const Home = ({ WebName }) => {
  document.title = "Home"
  const { user, logout } = useAuth();
  const navigate = useNavigate()

  const logOut = async () => {
    await logout();
    navigate('/login');
  }

  const data = JSON.parse(localStorage.getItem(user.uid));

  const [nuevaTarea, setNuevaTarea] = useState('');
  const [listaTareas, setListaTareas] = useState(data.tareas || []);

  const handleSubmit = e => {
    e.preventDefault();
    if (!listaTareas.find(item => item.name === nuevaTarea)) {
      setListaTareas([...listaTareas, { name: nuevaTarea, done: false }])
    }
    setNuevaTarea('')
  }

  const toggleTask = task => {
    setListaTareas(
      listaTareas.map((t) => t.name === task ? { ...t, done: !t.done } : t)
    )
  }

  useEffect(() => {
    if (data) {
      setListaTareas(data.tareas)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const handleDelete = (name) => {
    setListaTareas(listaTareas.filter(item => item.name !== name))
  }

  useEffect(() => {
    const nuevosDatos = {
      id: user.uid,
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      tareas: listaTareas
    }
    localStorage.setItem(user.uid, JSON.stringify(nuevosDatos))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listaTareas])


  return (
    <>
      <Header WebName={WebName} logOut={logOut} userData={data} />
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl pt-10">
        <section className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert text-white'>
          <div className="bg-gray-800 rounded-lg">
            <div className="py-4 px-4 mx-auto max-w-2xl">
              <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white text-center">Agregar Tarea</h2>
              <form onSubmit={handleSubmit} className='mb-4'>
                <div className="grid grid-flow-row-dense grid-cols-4 gap-5">
                  <div className="col-span-3">
                    <input type="text" name="task" id="task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500" placeholder="Agrega una tarea" required="" autoComplete='off' onChange={(e) => setNuevaTarea(e.target.value)} value={nuevaTarea} />
                  </div>
                  <button type="submit" className="px-5 py-2.5 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl pt-2">
        <section className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert text-white'>
          <div className="bg-gray-800 rounded-lg py-4 pr-4 pl-1 mx-auto max-w-2xl max-h-85 overflow-auto">
            <h2 className='text-center font-bold text-3xl'>Tareas</h2>
            <TaskList
              listaTareas={listaTareas}
              setListaTareas={setListaTareas}
              toggleTask={toggleTask}
              handleDelete={handleDelete} />
          </div>
        </section>
      </div>
    </>
  )
}
