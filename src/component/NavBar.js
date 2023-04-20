import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";
import { IoMdNotificationsOutline ,IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import PopularNFT from "./PopularNFT";
import TopSeller from "./TopSeller";
import { HotBids } from "./HotBids";
import "animate.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {


  const [open, setOpen] = useState(false);
  const [wth, setWth] = useState(false);
  const navigate = useNavigate()

  const handleOnClick = () => { 
    setOpen(!open);
  };
  const setWidth = () => {
    setWth(!wth);
  };



  return (
    <>
      <div className="">
        <div className="flex justify-between gap-4 max-h-[45px] max-w-[800px]">
          <div className="flex gap-4">
            <div className="relative">
              <input
                className={`block lg:hidden border ${
                  wth
                    ? "w-[50px] transition duration-1000 ease-in-out"
                    : "w-[200px] z-40 transition duration-1000 ease-in-out"
                } rounded-xl p-2 lg:p-4 text-center bg-cyan-300 mt-2`}
                // className={`block lg:hidden  border ${wth ? "w-[50px] transition duration-1000 ease-in-out":"w-[150px] transition duration-1000 ease-in-out"}    rounded-xl p-2 lg:p-4 text-center bg-cyan-300 mt-2`}
                type="text"
                name="search"
                placeholder=""
              />
              <input
                className={`hidden lg:block border w-[300px] rounded-xl  p-2 lg:p-2 text-center`}
                type="text"
                name="search"
                placeholder="Search by creator or collection"
              />
              <FiSearch
                onClick={setWidth}
                color="black"
                size={20}
                className="absolute top-5 lg:top-3 z-50 translate-x-4 lg:translate-x-3 "
              />
            </div>


            <div
              className={`border-gradient flex items-center ${
                wth ? "block" : "hidden md:flex "
              } lg:border rounded-xl py-0 lg:py-2 lg:px-5 lg:ml-10 text-sm lg:text-lg`}
            >
              <button className="flex items-center whitespace-nowrap">
                <FaEthereum /> 3,25 ETH
              </button>
            </div>

            <div className="border-gradient flex items-center lg:border rounded-xl lg:p-3">
              <IoMdNotificationsOutline size={30} className="hidden lg:block" />
              <IoMdNotificationsOutline size={25} className="lg:hidden block" />
            </div>

            <div className="lg:flex gap-4 hidden">
              <div className=" border-gradient  flex items-center border rounded-xl py-2 px-5 text-lg">
                <button>Create</button>
              </div>
              <div className="border-gradient flex items-center border rounded-xl text-lg py-2 px-5">
                <button className="whitespace-nowrap">Connect wallet</button>
              </div>
            </div>

         
            {/* <div className=" lg:hidden flex flex-col gap-4 absolute">
              <div className=" border-gradient  flex items-center border rounded-xl py-2 px-5 text-lg">
                <button>Create</button>
              </div>
              <div className="border-gradient flex items-center border rounded-xl text-lg py-2 px-5">
                <button className="whitespace-nowrap">Connect wallet</button>
              </div>
            </div> */}
          </div>

          <div className="flex items-center ml-0 lg:ml-10">
            <img alt="" src="paplu.png" />

            <div className="hidden lg:flex-col ml-4">
              <div>Mihir Pathak</div>
              <div>mihirpathak35@gmail.com</ div>
            </div>
            <div className="ml-4 lg:hidden">
              {open ? (
                <IoIosArrowUp onClick={handleOnClick} />
              ) : (
                <IoIosArrowDown onClick={handleOnClick} />
              )}
            </div>
          </div>
          {open && (
            <div className="absolute top-[0%] w-[70%] md:w-[50%] h-[100%] z-50 right-[0%] bg-[#08083B]/[.80] text-white">
              <div className="flex text-lg p-2 flex-col">
                <div className="my-5 mx-auto"><RxCross1 onClick={handleOnClick}/></div>
                <div className="flex flex-col text-center gap-y-5 ">
                  <button
                  onClick={() => navigate("/myprofile")}
                  className="hover:animate-pulse">My Profile</button >
                  <button className="hover:animate-pulse">Connect Wallet</button>
                  <button className="hover:animate-pulse">Create</button>
                  <button className="hover:animate-pulse">Log out</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <PopularNFT />
        <TopSeller />
        <HotBids />
      </div>
    </>
  );
};

export default NavBar;
