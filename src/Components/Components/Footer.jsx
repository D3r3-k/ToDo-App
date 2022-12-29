import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = ({ WebName }) => {
    return (
        <>
            <footer className="p-4 bg-white shadow md:px-6 md:py-4 dark:bg-gray-900">
                <div className="sm:flex sm:items-center sm:justify-center">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <img src="./images/logo.svg" className="mr-2 h-10" alt="Logotipo en blanco" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{WebName}</span>
                    </div>
                </div>
                <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link to="/" className="hover:underline">Vargas Inc</Link>. All Rights Reserved.
                </span>
            </footer>
        </>
    )
}
