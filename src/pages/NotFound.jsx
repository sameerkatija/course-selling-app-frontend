import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white px-4"
      style={{ backgroundColor: "var(--color-blue-900)" }}
    >
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="text-gray-200 mt-2 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-white text-blue-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
