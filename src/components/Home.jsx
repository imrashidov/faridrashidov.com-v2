import React from "react";
import Type from "./Type.jsx";
import homeImage from "../assets/home-image.svg";
export default function Home() {
  return (
    <section className="">
      <div className="home-content box-border px-80 h-full py-12 flex justify-between">
        <div className="home-left pt-52 w-full text-center  ">
          <h1 className="home-heading text-4xl font-semibold pb-4 ">
            Hi! <span className="wave">👋🏻</span>
          </h1>
          <h1 className="heading-name text-4xl font-semibold">
            I'M{" "}
            <strong className="main-name text-violet-700 font-semibold">
              FARID RASHIDOV
            </strong>
          </h1>
          <div className="typewriter pt-20 text-violet-700 text-4xl font-semibold">
            <Type />
          </div>
        </div>
        <div className="home-right flex-shrink-0">
          <img src={homeImage} className="w-[600px] h-[600px]" />
        </div>
      </div>
      <div className="about"></div>
    </section>
  );
}
