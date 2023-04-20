import React from "react";
import {BiLogOut} from "react-icons/bi"

export default function Sidenavigation() {
  return (
    <>
    <div className='hidden border rounded-2xl w-fit p-5 lg:flex flex-col lg:gap-5 divide-y h-[96vh]'>
        <div>
            <div className="flex-col items-center mb-5">
                <img src="./sideNavigationImages/vector.svg" alt="" />
                <img src="./sideNavigationImages/vector 2.svg" alt="" />
            </div>

            <div className="flex flex-col items-center lg:gap-10 ">
                <img src="./sideNavigationImages/vector3.svg" alt="" />
                <img src="./sideNavigationImages/cart.svg" alt="" />
                <img src="./sideNavigationImages/activity.svg" alt="" />
                <img src="./sideNavigationImages/timer.svg" alt="" />
            </div>
        </div>
        <div className="flex flex-col items-center justify-between h-full"> 
            <div className="flex flex-col items-center gap-10 pt-6">
                    <img src="./sideNavigationImages/wallet.svg" alt="" />
                    <img src="./sideNavigationImages/people.svg" alt="" />
                    <img src="./sideNavigationImages/setting.svg" alt="" />
            </div> 
            <div className="text-[#02AAB0]">
                 <BiLogOut size={25}/>       
            </div>
        </div>
    </div>
    </>
  );
}
