import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {
  return (
    <section>
        <div className="bg-white mx-auto flex px-16 sm:px-32 py-20 md:flex-row flex-col items-center min-h-[90vh]">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="text-slate-800 mb-4 text-4xl md:text-6xl font-bold">
                    Hi, I'm Haruka! 👋🏻
                </h1>
                <TypeAnimation
                    sequence={[
                        'a curious designer', 
                        2000,
                        'a curious developer',
                        2000,
                        'a curious artist', 
                        2000,
                    ]}
                    wrapper="div"
                    cursor={false}
                    repeat={Infinity}
                    className="title-font text-slate-800 mb-4 text-3xl md:text-5xl font-bold"
                />
                <p className="mb-8 text-slate-500 text-base md:text-xl leading-loose">
                    I'm a sophomore at Brown University studying Computer Science.
                    <br/>
                    My interests lie at the intersection of technology, design, and business, and I'm passionate about creating user-centered solutions for businesses!
                </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="memoji"
                    src={require("../assets/memoji.png")}
                />
            </div>
        </div>
    </section>
  );
}