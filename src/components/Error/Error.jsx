import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-9xl font-extrabold text-gray-900 dark:text-white tracking-widest">404</h1>
      <div className="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          to="/"
          className="relative inline-block text-sm font-medium text-indigo-600 group focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-gray-100 border border-current dark:bg-gray-900">
            Go Home
          </span>
        </Link>
      </button>
    </div>
    );
};

export default Error;