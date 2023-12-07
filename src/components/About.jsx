import React from "react";
import { SkillsData } from "../data/SkillsData.jsx";
import { ToolsData } from "../data/ToolsData.jsx";
import aboutImage2 from "../assets/about-image2.svg";

export default function About() {
  return (
    <div className="about-section h-full pt-28 max-lg:pt-20">
      <div className="about-body px-80 lg:px-44 sm:max-lg:px-2 max-lg:px-2 pt-14  h-full flex justify-center max-lg:flex-col">
        <div className="about-left w-full flex items-center justify-center flex-col text-center pt-20">
          <h1 className="about-heading pb-10 text-4xl max-lg:text-3xl font-semibold  ">
            Know Who <strong className="strong">I'M</strong>
          </h1>
          <div className="about-card">
            <p className="about-card-body text-lg font-semibold text-left ">
              Hi Everyone, I am{" "}
              <strong className="strong-description">Farid Rashidov</strong>{" "}
              from{" "}
              <strong className="strong-description">Baku, Azerbaijan.</strong>
              <br />
              <br /> My self-study adventure commenced with an insatiable desire
              to understand the intricacies of web development. I immersed
              myself in the{" "}
              <strong className="strong-description">
                MERN Stack, MongoDB, Express.js, React.js, and Node.js
              </strong>{" "}
              through online resources, documentation, and real-world projects.{" "}
              <br />
              <br /> In the realm of front-end development, I've delved deep
              into{" "}
              <strong className="strong-description">
                HTML, CSS, and JavaScript,
              </strong>{" "}
              using these languages to craft visually appealing and responsive
              user interfaces. I'm well-versed in modern front-end libraries and
              frameworks, ensuring a seamless blend of aesthetics and
              functionality in every project.
            </p>
          </div>
        </div>
        <div className="about-right w-full flex justify-center items-center ">
          <img
            src={aboutImage2}
            className="about-image max-lg:w-[400px] max-lg:h-[400px] w-[600px] h-[600px]"
          />
        </div>
      </div>
      <h1 className="skills-heading pt-10 text-4xl font-semibold text-violet-700 text-center">
        Skills
      </h1>
      <div className="skills px-60 max-lg:px-2 box-border">
        <div className="skills-body flex flex-wrap justify-center   py-10  gap-10">
          {SkillsData.map((item, index) => {
            return (
              <div
                key={index}
                className="skills-content text-7xl max-lg:text-5xl border-violet-700  rounded-xl w-max  p-12 max-lg:p-10 border-2 shadow-md  shadow-violet-500 hover:shadow-skills hover:shadow-violet-500 duration-150 transition-all "
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="tools-heading pt-10 text-4xl font-semibold text-violet-700 text-center">
        Tools
      </h1>
      <div className="tools px-28 max-lg:px-2">
        <div className="tools-body flex flex-wrap justify-center pt-10 pb-20  gap-10">
          {ToolsData.map((item, index) => {
            return (
              <div
                key={index}
                className="tools-content text-7xl max-lg:text-5xl border-violet-700  rounded-xl w-max  p-12 max-lg:p-10 border-2 shadow-md  shadow-violet-500  hover:shadow-skills hover:shadow-violet-500 duration-150 transition-all duration-1000 "
              >
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
