import React from 'react';
import { Link } from 'react-router-dom';
import Logofooter from '../../assets/images/Logofooter.png'

const Footer = () => {
  return (
    <footer className="bg-beis rounded-lg shadow dark:bg-gray-900 flex items-center justify-center w-full fixed bottom-0 inset-x-0 p-0 m-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="md:flex sm:items-center sm:justify-between">
          <Link to="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logofooter} className="h-16" alt="Flowbite Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">Aviso Legal</Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">Aviso</Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">Política de Privacidad</Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
