import React from "react";
import { FiSearch } from "react-icons/fi";
import {FaEthereum} from "react-icons/fa"
import {IoMdNotificationsOutline} from "react-icons/io"
import {AiOutlineDown} from "react-icons/ai"
import PopularNFT from "./PopularNFT"
import TopSeller from "./TopSeller";
import { HotBids } from "./HotBids";
import 'animate.css';
import { useState } from "react";


const NavBar = () => {
    const [open,setOpen] = useState(true)
    const handleOnClick = () => {
        setOpen(!open)
    }
  return (
  <>
  <div className="">

    <div className="flex gap-4 h-[55px] max-w-[500px]">  
        <div className="flex gap-4">
            <div className="relative">
                <input 
                className=" border w-[400px] rounded-xl p-4 text-center"
                type="text" name="search" placeholder="Search by creator or collection"/>
                <FiSearch color="black" size={20} className="absolute top-5 translate-x-5 " />
            </div>
            <div className="border-gradient flex items-center border rounded-xl py-2 px-5 ml-10 text-lg">
                <button className="flex items-center whitespace-nowrap"><FaEthereum/> 3,25 ETH</button>
            </div>
            <div className="animate__animated animate__bounce border-gradient flex items-center border rounded-xl p-3">
                <IoMdNotificationsOutline size={30}/>
            </div>
            <div className=" border-gradient  flex items-center border rounded-xl py-2 px-5 text-lg">
                <button>Create</button>
            </div>
            <div className="border-gradient flex items-center border rounded-xl text-lg py-2 px-5">
                <button className="whitespace-nowrap">Connect wallet</button>
            </div>
        </div>

        <div className="flex items-center ml-10">
            
                <img alt="" src="paplu.png"/>
           
            <div className="flex-col ml-4">
                <div>Mihir Pathak</div>
                <div>mihirpathak35@gmail.com</div>
            </div>
            <div className="ml-4"><AiOutlineDown onClick={handleOnClick}/></div>
        </div>
        {
            open &&
            <div className="absolute top-[10%] rounded-lg  right-[25%] bg-white text-black">
                <div className="flex p-2 items-center flex-col">
                    <div>Manage Account</div>
                    <div>Log out</div>
                </div>

            </div>
            }
    </div>
    <PopularNFT/>
    <TopSeller/>
    <HotBids/>
  </div>
    </>
  );
};

export default NavBar;
