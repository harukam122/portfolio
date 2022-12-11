import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container m-auto flex flex-wrap px-5 py-7 flex-col md:flex-row items-center">
        <nav className="md:mr-auto w-full flex flex-wrap items-center justify-between">
            <div>
                <Link to="/" className="mr-6 text-slate-600 text-3xl">HM</Link>
            </div>
            <div>
                <Link to="/" className="mr-5 text-slate-500 hover:text-slate-700">Home</Link>
                <Link to="/about" className="mr-5 text-slate-500 hover:text-slate-700">About</Link>
            </div>
        </nav>
      </div>
    </header>
  );
}