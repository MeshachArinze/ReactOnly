import React from "react";

const About = () => {
  return (
    <div  name="About" className="w-full h-screen mt-20 text-white">
      <div className="max-w-screen-lg p-6 flex flex-col mx-auto justify-center w-full ">
        <div className="pb-5">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            About
          </p>
        </div>

        <p className="text-xl mt-10 hover:scale-110 duration-300">
          Who Am I?
          I am a Blockchain Developer from Lagos, Nigeria
          I have spent the last 2 years building smart contracts and full dapps. 
          I have always had a knack for technology and working with computer programs.
          I also proud myself in knowledge of python and cloud technologies like AWS at advanced levels.  
        </p>
        <br />
        <p className="text-xl mt-2 hover:scale-110 duration-300">
          My love for programming dates back to 2003 when I first had my hands on QBasic.
          This interest was further fired up when I started playing with web technologies like HTML, CSS and Javascript.
          I am now expanding my learning of Javascript and building web3 projects with ReactJs, NextJs and learning new technologies.
        </p>

        <br />
        <p className="text-xl mt-2 hover:scale-110 duration-300 mb-80">
          Don't get it twisted, I am a trained GIS and Remote sensing specialist and graduated as a historical topper (9.92/10 CGPA).
          My MSc Geoinformatics program gave me more opportunity to get familiar with python, javascript and other technologies.
          Aside my core web3 development activities, I sometime carry out research activities on ML application for remote sensing.
        </p>
      </div>
    </div>
  );
};

export default About;
