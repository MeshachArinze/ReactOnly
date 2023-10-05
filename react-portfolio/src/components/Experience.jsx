import React from 'react'
import Html from "../images/html.png";
import Css from "../images/css.png";
import Github from "../images/github.png";
import Tailwind from "../images/tailwind.png";
import Reactlogo from "../images/react.png";
import Bootstrap from "../images/bootstrap.png";
import Solidity from "../images/solidity.png";
import Besu from "../images/besu.png";
import Polygon from "../images/polygon.png";

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
        {
            id: 6,
            src: Bootstrap,
            title: "Bootstrap",
      
          },
          {
            id: 7,
            src: Solidity,
            title: "Solidity",
      
          },
          {
            id: 8,
            src: Besu,
            title: "Hyperledger Besu",
      
          },
          {
            id: 9,
            src: Polygon,
            title: "Polygon",
      
          },
      ];
  return (
    <div name="Experience" className="w-full h-screen mt-40 pt-2 py-10 mt-40 text-white">
          <div className="max-w-screen-lg py-10 flex mb-40 flex-col mx-auto justify-center w-full h-full ">
              <div className="pb-5 mt-60">
                  <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">Experiences</p>
                  <p className='py-6 text-xl text-center'>Technologies I've worked with</p>
              </div>
              <div className='grid grid-cols-4 md:grid-cols-5 text-center items-center gap-40 px-10'>
                  {techs.map(({ id, src, title }) => (
                          
                        <div key={id} className='shadow-md rounded-xl duration-200 hover:scale-105'>
                        <img src={src} alt="" className='' />
                        <p className='font-bold'>{title}</p>
                        </div>
                      ))}
                    
              </div>
      </div>
    </div>
  )
}

export default Experience
