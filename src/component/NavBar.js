import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import PopularNFT from "./PopularNFT";
import TopSeller from "./TopSeller";
import { HotBids } from "./HotBids";
import "animate.css";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [wth, setWth] = useState(false);
  const handleOnClick = () => {
    setOpen(!open);
  };
  const setWidth = () =>{
    setWth(!wth)
  }
  return (
    <>
      <div className="">
        <div className="flex justify-between gap-4 h-[55px] max-w-[800px]">
          <div className="flex gap-4">
            <div className="relative">
              <input
              
                className={`block lg:hidden  border ${wth ? "w-[50px] transition duration-300":"w-[150px] transition duration-300"}   ease-in-out rounded-xl p-2 lg:p-4 text-center bg-cyan-300 mt-2`}
                type="text"
                name="search"
                placeholder=""
              />
              <input
                className={`hidden lg:block border w-[300px] rounded-xl  p-2 lg:p-4 text-center`}
                type="text"
                name="search"
                placeholder="Search by creator or collection"
              />
              <FiSearch
              onClick={setWidth}
                color="black"
                size={20}
                className="absolute top-5 translate-x-4 lg:translate-x-5 "
              />
            </div>
            <div className="border-gradient flex items-center lg:border rounded-xl py-0 lg:py-2 lg:px-5 lg:ml-10 text-sm lg:text-lg">
              <button className="flex items-center whitespace-nowrap">
                <FaEthereum /> 3,25 ETH
              </button>
            </div>
            <div className="animate__animated animate__bounce border-gradient flex items-center lg:border rounded-xl lg:p-3">
              <IoMdNotificationsOutline size={30} className="hidden lg:block"/>
              <IoMdNotificationsOutline size={25} className="lg:hidden block"/>
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
              <div>mihirpathak35@gmail.com</div>
            </div>
            <div className="ml-4">
              <AiOutlineDown onClick={handleOnClick} />
            </div>
          </div>
          {open && (
            <div className="absolute top-[10%] rounded-lg  right-[25%] bg-white text-black">
              <div className="flex p-2 items-center flex-col">
                <div>Manage Account</div>
                <div>Log out</div>
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
