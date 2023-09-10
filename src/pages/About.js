import React from "react";
import Gallery from '../components/Gallery';
import { useEffect } from 'react';

export default function About() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section>
            <div className="min-h-[90vh] body-text text-xl bg-white mx-auto flex px-16 sm:px-32 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-sm lg:w-full md:w-1/2 w-2/3 lg:mr-32 md:mr-16 mb-8">
                    <img
                        className="rounded-full object-cover object-center"
                        alt="profile"
                        src={require("../assets/profile.jpg")}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start items-center text-left mb-16 md:mb-0">
                    <h1 className="text-gray-600 mb-4 text-2xl md:text-4xl font-semibold align-top">
                        Hey there, I'm Haruka! 👋🏻
                    </h1>
                    <p className="mb-8">
                        I'm an aspiring software engineer, passionate about bridging the gap between 
                        engineering and creativity to bring user-centered solutions to the table!
                        <br/><br/>
                        This past summer, I worked as a full-stack Software Engineer Intern at 
                        {" "}<a className="underline decoration-2 decoration-indigo-300" href="https://sonyinteractive.com/en/">Sony Interactive Entertainment (PlayStation)</a>{" "}
                        to prototype a new feature for the PS5 software.
                    </p>
                    <p className="mb-8">
                        In my free time, I like to...
                        <ul>
                            <li>🎨 create digital food art</li>
                            <li>🍡 try new restaurants and eat lots of Japanese sweets</li>
                            <li>🏞 explore nature & go trekking up various mountains</li>
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