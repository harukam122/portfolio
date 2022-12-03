import React from "react";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="text-slate-500 body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="project-img"
                  className="absolute inset-0 w-full h-full object-cover object-center hover:blur-md"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm font-mono font-medium text-blue-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}