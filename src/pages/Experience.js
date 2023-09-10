import React, { useEffect } from "react";
import { experience } from "../experience";

export default function Experience() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="body-text">
      <div className="container px-5 lg:px-20 lg:pb-10 pt-8 md:pt-16 mx-auto">
        <h1 className="text-gray-600 mb-10 text-3xl md:text-4xl font-semibold text-start">
          Experience
        </h1>
        <div className="flow-root">
          <ul className="-mb-8">
            {experience.map((job, index) => (
              <li key={index}>
                <div className="relative pb-8">
                  {index !== experience.length - 1 ? (
                    <span
                      className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex items-start space-x-5">
                    <div className="relative">
                      <img
                        className="h-14 w-14 rounded-full bg-gray-100 border shadow flex items-center justify-center ring-8 ring-white"
                        src={require("../assets/experience/" + job.image)}
                        alt={job.company}
                      />
                    </div>
                    <div className="min-w-0 flex-1 text-start">
                      <h3 className="lg:text-2xl text-xl font-semibold text-gray-600">
                        {job.role}
                      </h3>
                      <p className="lg:text-medium text-base font-medium text-gray-500">
                        {job.company}
                      </p>
                      <p className="lg:text-base text-sm font-medium text-gray-400">
                        {job.start} - {job.end}
                      </p>
                      <p className="mt-2 lg:text-base text-sm text-gray-600">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
