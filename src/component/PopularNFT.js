import React from "react";
import Slider from "react-slick";
import { CgSandClock } from "react-icons/cg";

const PopularNFT = () => {
  var settings = {
    dots: false,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[66vw] mt-5">
      <div className="text-4xl my-5">Popular NFT's Live Auction</div>
      <Slider {...settings}>
        {[1, 1, 1, 1, 1, 1].map(() => {
          return (
            <>
              <div className="relative p-2">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    className="hover:scale-110 transition delay-200"
                    src="sliderImage1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="absolute w-[3%] top-[50%]">
                <div className="px-5 py-3 bg-black/70 text-white rounded-lg border-[1.5px] border-cyan-300 translate-x-10 ">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center ">
                        <div>
                          <CgSandClock />
                        </div>
                        <div>Countdown</div>
                      </div>
                      <div className="text-xs whitespace-nowrap">
                        time remaining
                      </div>
                    </div>
                    <div>
                      <div className="whitespace-nowrap">17.52 ETH</div>
                      <div className="text-xs whitespace-nowrap">
                        Highest Bid
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-500 rounded-xl border-2 border-cyan-300 mt-4 ">
                    <button className="text-md flex mx-auto my-1">
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default PopularNFT;
