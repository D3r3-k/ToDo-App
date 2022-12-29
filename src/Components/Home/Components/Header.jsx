import React from 'react'

export const Header = ({ WebName, logOut, userData: { nombre, apellido, email } }) => {
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex items-center">
                            <img src="./images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{WebName}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                </svg>
                            </div>
                            {(nombre && apellido) ?
                                <p className="text-gray-800 dark:text-white font-medium text-sm pl-2 pr-4 lg:pr-5 lg:pl-2 py-2 lg:py-2.5 mr-2">{nombre} {apellido}</p>
                                :
                                <p className="text-gray-800 dark:text-white font-medium text-sm pl-2 pr-4 lg:pr-5 lg:pl-2 py-2 lg:py-2.5 mr-2">{email}</p>
                            }
                            <button onClick={logOut} className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-primary-800">Cerrar Sesion</button>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
