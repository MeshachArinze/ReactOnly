import React from "react";
import Html from "../images/html.png";
import Css from "../images/css.png";
import Github from "../images/github.png";
import Tailwind from "../images/tailwind.png";
import Reactlogo from "../images/react.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
    },
    {
      id: 3,
      src: Reactlogo,
      title: "React",
    },
    {
      id: 4,
      src: Tailwind,
      title: "Tailwind",
    },
    {
      id: 5,
      src: Github,
      title: "GitHub",
    },
  ];
  return (
    <div
      name="Experience"
      className="w-full h-screen pt-2 py-10 mt-40 text-white"
    >
      <div className="max-w-screen-lg py-10 flex mb-40 flex-col mx-auto justify-center w-full h-full ">
        <div className="pb-5 mt-60">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            Experiences
          </p>
          <p className="py-6 text-xl text-center">
            Technologies I have worked with
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 text-center items-center gap-40 px-10">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md rounded-xl duration-200 hover:scale-105"
            >
              <img src={src} alt="" className="" />
              <p className="font-bold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
