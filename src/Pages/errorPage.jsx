import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPages = () => {
  const error = useRouteError();
  return (
    <>
    
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
          <p className="text-2xl md:text-3xl font-semibold mt-6">
            Oops! Page not found
          </p>
          <p className="mt-4 text-gray-600">
            The page you’re looking for doesn’t exist.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPages;
