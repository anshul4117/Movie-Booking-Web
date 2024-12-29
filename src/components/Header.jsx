import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">

      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">bookmyshow</h1>
        <input
          type="text"
          placeholder="Search for Movies, Events..."
          className="border rounded px-4 py-2 w-1/2"
        />
        <button className="text-sm text-white bg-red-600 px-4 py-2 rounded">
          Sign In
        </button>
      </div>
      <div className="w-full mx-auto px-28 py-3  bg-gray-200 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Movies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Plays
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
