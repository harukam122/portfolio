import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {
  return (
    <section className="flex justify-center mx-auto">
        <div className="bg-white flex sm:max-w-[80%] max-w-[80%] py-20 md:flex-row flex-col md:justify-between items-center min-h-[90vh]">
            <div className="lg:flex-grow md:w-1/2 lg:pr-36 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="text-gray-700 mb-4 text-4xl md:text-5xl lg:text-6xl font-bold">
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
                    className="text-gray-700 mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
                />
                <p className="mb-8 text-gray-500 text-base md:text-xl leading-loose">
                    I'm a sophomore at Brown University studying Computer Science.
                    <br/>
                    My interests lie at the intersection of technology and design, and I'm passionate about creating user-centered solutions using tech!
                    <br/>
                    <br/>
                    Scroll down &#11015;&#65039; to see some of my projects :)
                </p>
            </div>
            <div className="lg:max-w-[50%] md:max-w-[40%] max-w-[60%]">
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