import React from "react";

export default function About() {
  return (
    <section id="about">
        <div className="bg-white mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font text-slate-800 mb-4 text-4xl md:text-6xl font-bold">
                    Hi, I'm Haruka! 👋🏻
                </h1>
                <h1 className="title-font text-slate-800 mb-4 text-3xl md:text-5xl font-bold">
                    a curious designer and developer creating user-centered solutions.
                </h1>
                <p className="mb-8 text-slate-500 text-xl md:text-2xl leading-relaxed">
                    I'm a sophomore at Brown University studying Computer Science. I'm particularly interested in the intersection
                    of technology, design, and business.
                </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="memoji"
                    src="../assets/memoji.png"
                />
            </div>
        </div>
    </section>
  );
}