import React from "react";
import { projects } from "../data.js";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="body-text">
      <div className="container px-5 py-10 mx-auto text-center lg:px-20">
        <div className="mx-auto justify-center flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="sm:w-1/2 w-9/12 sm:p-8 p-6">
              <Link
                to={project.link}
                key={project.title}
                className="sm:w-1/2 w-9/12">
                  <div className="p-3 sm:h-96 flex relative rounded-2xl hover:duration-300 hover:scale-[1.03] hover:drop-shadow-md bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                      <img
                      alt="project-img"
                      className="p-10 absolute inset-0 w-full h-full object-scale-down object-center"
                      src={require("../assets/" + project.image)}
                      />
                      <div className="flex px-8 py-10 relative z-10 w-full rounded-2xl bg-white opacity-0 hover:opacity-[.97] hover:duration-300">
                        <div className="my-auto md:mx-4 lg:mx-8">
                          <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium mb-4">
                              {project.title}
                          </h1>
                          <h2 className="text-xs md:text-sm tracking-widest font-mono font-medium text-blue-400 mb-3">
                              {project.subtitle}
                          </h2>
                          <p className="text-sm md:text-base leading-relaxed">{project.description}</p>
                        </div>
                      </div>
                  </div>
              </Link>
              <div className="mx-2 mt-4 flex flex-row justify-between items-center">
                <h1 className="text-start text-gray-600 font-medium text-2xl">{project.title}</h1>
                <div className="flex flex-wrap justify-end gap-y-2">
                  {project.tags.map((tag) => (
                    <button className="rounded-full bg-indigo-100 text-gray-500 text-sm px-2 py-0.5 ml-2">{tag}</button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}