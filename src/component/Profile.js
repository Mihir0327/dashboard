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
      <div className={`flex flex-col w-[400px] gap-y-5 p-5`}>
        <div className="mx-auto">
          <div className="mx-auto text-4xl font-bold">My Profile</div>

          <div className="">
            <img className="mx-auto" alt="" src="paplu.png" />
          </div>
          <div className="text-center">Mihir</div>
        </div>
        <div className="grid grid-cols-4 gap-5 justify-between">
          <div>
            <div className="border-2 rounded-xl text-center">120</div>
            <div className="text-center mt-2">assets</div>
          </div>
          <div>
            <div className="border-2 rounded-xl text-center">10K</div>
            <div className="text-center mt-2">Followers</div>
          </div>
          <div>
            <div className="border-2 rounded-xl text-center">70K</div>
            <div className="text-center mt-2">Likes</div>
          </div>
          <div>
            <div className="border-2 rounded-xl text-center ">60</div>
            <div className="text-center mt-2">Bidding</div>
          </div>
        </div>
        <div>
          <div className="mb-3 font-bold text-2xl">Your Balance</div>
          <div className="border rounded-2xl p-4 flex justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img className="w-12" src="Icon - Ethereum.svg" />
              </div>
              <div className="whitespace-nowrap text-2xl font-bold">4,666 ETH</div>
            </div>
            <button className="flex items-center text-lg "> Add <BsChevronRight /> </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 ">
            <div className="flex justify-between">
                <div>Revenue</div>
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
