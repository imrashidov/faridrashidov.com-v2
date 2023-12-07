import React from "react";
import { ProjectsData } from "../data/ProjectsData.jsx";
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="projects-section py-36 max-lg:py-28 w-full flex flex-col justify-center items-center ">
      <h1 className="projects-heading p-2 text-4xl max-lg:text-3xl font-semibold">
        My <strong className="strong">Works</strong>
      </h1>
      <div className="projects-content mt-10 max-lg:mt-2 flex flex-wrap justify-center pb-10 gap-1 px-64 max-lg:px-6">
        {ProjectsData.map((item, index) => {
          return (
            <div
              className="project-card  justify-center flex m-5 mb-14 shadow-violet-600 shadow-project  p-3 rounded-lg w-96 max-lg:w-72 h-37.5 max-lg:h-fit hover:border-blue-500 hover:shadow-projectHover hover:shadow-violet-600 transition-all duration-300"
              key={index}
            >
              <div className="project-card-body flex flex-col justify-center items-center w-full max-lg:h-fit ">
                <img
                  src={item.image}
                  className="project-image p-5 max-lg:p-3 "
                />
                <div className="card-body  ">
                  <div className="card-title text-center font-bold text-xl max-lg:text-base text-violet-600  ">
                    <h5>{item.title}</h5>
                  </div>

                  <div className="card-description text-justify py-4 px-3 w-80 max-lg:w-52 h-60">
                    <h6 className="pt-4 max-lg:pt-0 font-semibold text-violet-600">
                      Built With
                    </h6>
                    {item.description} <br />
                    <h6 className="pt-4 max-lg:pt-0 font-semibold text-violet-600">
                      Features
                    </h6>
                    {item.features}
                    <br />
                    {item.features2}
                  </div>

                  <div className="card-buttons flex justify-center">
                    <a
                      href={item.github}
                      className="flex card-button justify-center items-center bg-violet-700 p-2 rounded-md m-2 gap-2"
                    >
                      <FaGithub className="w-5 h-5" /> GitHub
                    </a>
                    <a
                      href={item.demo}
                      className="flex card-button  justify-center items-center bg-violet-700 p-2 rounded-md m-2 gap-2 "
                    >
                      <TfiWorld className="w-5 h-5" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
