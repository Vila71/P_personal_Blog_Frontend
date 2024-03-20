import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (


<footer class="bg-beis rounded-lg shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="src\assets\images\B(1) 1.png" class="h-16" alt="Flowbite Logo" />
                
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Aviso Legal</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Aviso</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">politica de Privacidad</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
      
        
    </div>
</footer>


  )
}

export default Footer