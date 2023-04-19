import React from "react";
import { IoHeart } from "react-icons/io5";
import Slider from "react-slick";
export const HotBids = () => {
  var settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    lazyLoad:"progressive"
  };

  return (
    <>
    <div className="mt-10">Hot Bids</div>
      <div className="flex justify-evenly ">
        <Slider className="w-[66vw]" {...settings}>
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <div className="mx-5 p-5 text-white ">
                <div className="someid flex items-center justify-between">
                  <div className=" w-1/2">02:32:07</div>
                  <div className="flex justify-end items-center w-1/2">
                    232
                    <IoHeart />
                  </div>
                </div>
                <div>
                  <img className="w-full" src="./hotBidsImages/hb1.png" alt=""/>
                </div>
                <div className="mt-2">
                  <div>Stretch Of Time</div>
                  <div className="flex relative">
                    <div className="text-sm">0.045 ETH</div>
                    <div className="flex">
                        <div><img src="Person1.png" alt="" className="w-5 absolute z-30 right-6"/></div>
                        <div><img src="Person2.png" alt="" className="w-5 absolute z-20 right-3"/></div>
                        <div><img src="Person3.png" alt="" className="w-5 absolute z-10 right-0"/></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
