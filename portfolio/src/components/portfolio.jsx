
import Whitelist from "../images/Whitelist.PNG";
import Collection from "../images/NFT_Collection.PNG";
import ICO from "../images/ico.PNG";
import Gallery from "../images/NFT_Gallery.PNG";
import DAO from "../images/dao.PNG";
import Exchange from "../images/exchange.PNG";

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
                src={ICO}
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
              href="https://nft-gallery-dukepat.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Gallery}
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
              href="https://dukedao-project-dukepat.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={DAO}
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
              href="https://defi-exchange-dukepat.vercel.app/"
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
