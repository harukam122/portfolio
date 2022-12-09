import React from "react";
import { projects } from "../data.js";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects" className="text-slate-500 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-20">
        <div className="mx-auto justify-center flex flex-wrap -m-4">
          {projects.map((project) => (
            <Link
              to={project.link}
              key={project.title}
              className="sm:w-1/2 w-9/12 sm:p-8 p-6 hover:duration-300 hover:scale-110">
                <div className="p-3 sm:h-96 flex relative rounded-2xl drop-shadow-lg bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                    <img
                    alt="project-img"
                    className="p-10 absolute inset-0 w-full h-full object-scale-down object-center"
                    src={require("../assets/" + project.image)}
                    />
                    <div className="px-8 py-10 relative z-10 w-full rounded-2xl bg-white opacity-0 hover:opacity-95 hover:duration-500">
                        <h1 className="text-3xl font-medium mb-3">
                            {project.title}
                        </h1>
                        <h2 className="tracking-widest text-sm font-mono font-medium text-blue-400 mb-1">
                            {project.subtitle}
                        </h2>
                        <p className="leading-relaxed text-md">{project.description}</p>
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}