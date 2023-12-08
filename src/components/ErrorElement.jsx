import React from "react";
import errorImage from "../assets/404-image.svg";
import { NavLink } from "react-router-dom";

function ErrorElement() {
  return (
    <div className="error-section w-full  min-h-full pb- ">
      <div className="error-content  flex flex-row max-lg:flex-col justify-center items-center max-lg:p-24 p-32 max-lg:gap-0 lg:max-2xl:gap-2 gap-56">
        <div className="error-left flex items-center flex-shrink-0 max-lg:w-80 ">
          <img
            src={errorImage}
            className="error-image max-lg:w-[400px] max-lg:h-[400px] w-[600px] h-[600px] "
          />
        </div>
        <div className="error-right flex flex-col max-lg:gap-5  gap-10 flex-shrink-0 max-lg:w-80 max-lg:text-center ">
          <h1 className="error-right-header  max-lg:text-3xl text-7xl text-violet-600 lg:max-2xl:text-4xl ">
            Lost in space?
          </h1>
          <p className="error-left-description text-4xl max-lg:text-3xl lg:max-2xl:text-2xl">
            It looks like that page doesn't exist <br />
            please check the URL and try again.{" "}
          </p>
          <NavLink
            to="/"
            className="bg-violet-600 p-2 rounded-md w-fit max-lg:m-auto "
          >
            Go Back Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ErrorElement;
