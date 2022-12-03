import React from "react";

export default function About() {
  return (
    <section id="about">
        <div className="bg-white mx-auto flex px-20 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font text-slate-600 mb-4 text-5xl font-semibold">
                    Hi, I'm Haruka! 👋🏻 
                    <br className="hidden lg:inline-block" />I design and create things for the web.
                </h1>
                <p className="mb-8 text-slate-500 text-2xl leading-relaxed">
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