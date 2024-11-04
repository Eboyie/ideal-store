import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import NavLinks from './NavLinks';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className=" bg-slate-700 text-white shadow hover:shadow-lg transition duration-300 ">
      <div className="flex items-center justify-between mb-4 font-medium align-elements ">
        <Link to="/">
          <p className="text-2xl font-bold font-serif tracking-wide text-teal-400 sm:text-3xl py-2">
            IdealStore
          </p>
        </Link>

        <NavLinks />

        <div className="flex justify-between items-center gap-2">
          <Link
            to="/story"
            className="flex flex-col items-center text-emerald-400 "
          >
            <p>Blog</p>
          </Link>

          <div className="hidden md:block">
            <button>Login/Register</button>
          </div>

          <div>
            <MdMenu
              size={24}
              className="cursor-pointer md:hidden hover:scale-125 transition-all duration-300"
              onClick={() => setVisible(!visible)}
            />
          </div>
        </div>

        {/* Sidebar Menu for small screens */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white translate-all ${
            visible ? 'w-full h-full z-20' : 'w-0'
          }`}
        >
          <div className="flex flex-col text-gray-700">
            <div
              className="flex items-center gap-5 p-3 cursor-pointer hover:bg-gray-200 transition-all duration-300"
              onClick={() => setVisible(!visible)}
            >
              <p>Back</p>
            </div>

            <NavLink
              onClick={() => setVisible(!visible)}
              className="py-2 pl-6 border hover:bg-gray-200 transition-all duration-300"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(!visible)}
              className="py-2 pl-6 border hover:bg-gray-200 transition-all duration-300"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(!visible)}
              className="py-2 pl-6 border hover:bg-gray-200 transition-all duration-300"
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(!visible)}
              className="py-2 pl-6 border hover:bg-gray-200 transition-all duration-300"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
