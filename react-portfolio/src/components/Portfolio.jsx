import React from 'react'
import Whitelist from "../images/Whitelist.PNG";
import Collection from "../images/NFT_Collection.PNG";
import Airbnb from "../images/airbnb.png";
import Sportify from "../images/sportify.png";
import Feedback from "../images/feedback.png";
import Exchange from "../images/payment.png";

const Portfolio = () => {
  return (
    <div name="Portfolio" className="w-full md:h-screen my-20 py-2 text-white">
      <div className="max-w-screen-lg pb-60 mt-70 flex flex-col mx-auto justify-center w-full ">
        <div className="pb-8">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            Project Portfolio
          </p>
          <p className="py-6 text-xl text-center">
            Sample of my projects live on testnets
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 px-14">
          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://whitelistd-app-dukepat.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Whitelist}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  NFT/Crypto Whitelist App
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://cryptodevs-nft-collection-dukepat.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Collection}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  NFT Collection App
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://crypto-dev-ico-dukepat.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Airbnb}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  Initial Coin Offering (ICO) App
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://spotifyclone-git-master-meshacharinze.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Sportify}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  NFT Gallery App
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://react-only.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Feedback}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />

              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  DAO App
                </button>
              </div>
            </a>
          </div>

          <div className="shadow-2xl shadow-[#1E293B] rounded-xl">
            <a
              href="https://651f1d8c64de0300907a6a31--graceful-empanada-d6ae4c.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Exchange}
                alt=""
                className="rounded-xl duration-200 hover:scale-105"
              />

              <div className="flex justify-center items-center">
                <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                  Crypto Exchange App
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
