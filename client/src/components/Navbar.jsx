import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="py-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="flex flex-wrap items-center justify-between">
        {/* Brand Logo */}
        <img className="w-36" src="/images/branding/official-logo.png" />
        {/* Toggler */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Links */}
        <div
          className={`w-full md:block md:w-auto ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium text-center flex flex-col p-4 md:p-0 md:border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="hover:text-[#34CC98] ease-in-out duration-100"
              >
                Home
              </a>
            </li>
            <li className="md:mt-0 mt-3">
              <a
                href="#"
                className="hover:text-[#34CC98] ease-in-out duration-100"
              >
                Features
              </a>
            </li>
            <li className="md:mt-0 md:mb-0 mt-6 mb-3">
              <a
                href="#"
                className="border-2 rounded-3xl border-[#34CC98] px-8 py-3 bg-[#34CC98] text-white hover:text-[#34CC98] hover:bg-transparent ease-in-out duration-200"
              >
                Early Access
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
