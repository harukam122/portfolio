import React from "react";
import Gallery from '../components/Gallery';

export default function About() {
  return (
    <section>
        <div className="min-h-[90vh] body-text text-xl bg-white mx-auto flex px-16 sm:px-32 py-20 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center"
                    alt="memoji"
                    src={require("../assets/memoji.png")}
                />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start items-center text-left mb-16 md:mb-0">
                <h1 className="text-slate-800 mb-4 text-2xl md:text-4xl font-semibold align-top">
                    Hey there, I'm Haruka! 👋🏻
                </h1>
                <p className="mb-8">
                    I'm an aspiring software engineer, passionate about bridging the gap between 
                    engineering and creativity to bring user-centered solutions to the table!
                </p>
                <p className="mb-8">
                    In my free time, I like to...
                    <ul>
                        <li>🎨 create digital food art</li>
                        <li>🍡 try new restaurants and eat lots of Japanese sweets</li>
                        <li>🏞 explore nature & go hiking and white-water rafting</li>
                    </ul>
                    <br/>
                    Check out some of my artworks below! ⬇️
                </p>
            </div>
        </div>
        <Gallery/>
    </section>
  );
}