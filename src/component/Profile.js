import React from "react";
import { BsChevronRight } from "react-icons/bs";
import BarChart from "./Barchart";
import RecentActivity from "./RecentActivity";
import { useState } from "react";
import { datanakamo } from "./DataBarChart";


const Profile = () => {

    const [val,setVal] = useState(0)
    const handleChange = (e) => {
        setVal(e.target.value)
    }
 
  return (
    <>
      <div className={`hidden lg:flex flex-col w-[fit] gap-y-2 h-fit p-5 border-2 border-cyan-500 rounded-xl`}>
        <div className="mx-auto">
          <div className="mx-auto text-lg lg:text-3xl font-bold my-5">My Profile</div>

          <div className="">
            <img className="mx-auto" alt="" src="paplu.png" />
          </div>
          <div className="text-center my-2 lg:text-xl">Mihir</div>
        </div>
        <div className="grid grid-cols-4 gap-3 justify-between">
          <div>
            <div className="border-2 rounded-xl text-center p-1 text-xs lg:text-sm">120</div>
            <div className="text-center mt-1 text-xs lg:text-[11px]">assets</div>
          </div>
          <div>
            <div className="border-2 rounded-xl text-center p-1 text-xs lg:text-sm">10K</div>
            <div className="text-center mt-1 text-xs lg:text-[11px]">Followers</div>
          </div>
          <div>
            <div className="border-2 rounded-xl text-center p-1 text-xs lg:text-sm">70K</div>
            <div className="text-center mt-1 text-xs lg:text-[11px]">Likes</div>
          </div>
          <div>
            <div className="border-2 rounded-xl text-center p-1 text-xs lg:text-sm ">60</div>
            <div className="text-center mt-1 text-xs lg:text-[11px]">Bidding</div>
          </div>
        </div>
        <div>
          <div className="mb-3 text-xl">Your Balance</div>
          <div className="border rounded-2xl p-2 flex justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img className="w-7" alt="" src="Icon - Ethereum.svg" />
              </div>
              <div className="whitespace-nowrap text-lg font-bold">4,666 ETH</div>
            </div>
            <button className="flex items-center text-md gap-x-2 "> Add <BsChevronRight /> </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2 ">
            <div className="flex justify-between">
                <div className="text-xl">Revenue</div>
                <div className="text-black bg-[#08083B]">
                    <select onChange={(e)=>handleChange(e)} className="text-white bg-[#08083B]"> 
                        <option value={0} label="January"></option>
                        <option  value={1} label="February" ></option>
                        <option value={2} label="March" ></option>
                        <option value={3} label="April" ></option>
                        <option value={4} label="May" ></option>
                        <option value={5} label="June" ></option>
                        <option value={6} label="July" ></option>
                        <option value={7} label="August" ></option>
                        <option value={8} label="September" ></option>
                        <option value={9} label="October" ></option>
                        <option value={10}label="November"  ></option>
                        <option value={11}label="December"  > </option>
                    </select>
                </div>
            </div>
      <BarChart data={datanakamo[val]}/>
        </div>
      <RecentActivity />
      </div>
    </>
  );
};

export default Profile;
