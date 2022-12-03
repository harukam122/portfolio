import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="text-slate-600 ml-3 text-3xl">
            HM
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-slate-500 hover:text-slate-700">
            Work
          </a>
          <a href="#about" className="mr-5 text-slate-500 hover:text-slate-700">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}