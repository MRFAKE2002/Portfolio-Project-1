"use client";

//! React
import React, { useState } from "react";

//! Picture
import project1 from "../../public/assets/About/proj5.png";
import project2 from "../../public/assets/About/proj6.png";
import project3 from "../../public/assets/About/proj7.png";
import Image from "next/image";

//! Data
const projects = [
  {
    id: 1,
    year: 2024,
    title: "Customer support chatbot",
    description: "",
    image: project1,
  },
];

function Portfolio() {
  //! States

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="portfolio" className="p-32 text-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-purple-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-purple-400">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors ${
                  selectedProject.id === project.id ? "text-purple-200" : ""
                } duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-b-2 border-purple-200 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>
        <Image
          src={selectedProject.image.src}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={800}
          height={450}
        />
      </div>
    </section>
  );
}

export default Portfolio;
