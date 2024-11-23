import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-emerald-200">
      <h1 className="text-3xl font-bold mb-4 text-black">Master-Detail Management</h1>
      <div className="flex gap-4">
        <Link
          to="/categories"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Manage Categories
        </Link>
        <Link
          to="/certificates"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Manage Certificates
        </Link>
      </div>
    </div>
  );
};

export default App;
