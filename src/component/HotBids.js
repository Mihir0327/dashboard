import React from "react";
import { IoHeart } from "react-icons/io5";
import Slider from "react-slick";
export const HotBids = () => {
  var settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    lazyLoad: "progressive",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows:false,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          arrows:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          arrows:false
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-5">Hot Bids</div>
      <div className="flex justify-evenly">
        <Slider className="w-[65vw] md:w-[90vw] lg:w-[66vw]" {...settings}>
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <div className=" p-5 text-white ">
                <div className="someid flex items-center justify-between">
                  <div className=" w-1/2">02:32:07</div>
                  <div className="flex justify-end items-center w-1/2">
                    232
                    <IoHeart />
                  </div>
                </div>
                <div>
                  <img
                    className="w-full"
                    src="./hotBidsImages/hb1.png"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <div className="text-sm lg:text-lg">Stretch Of Time</div>
                  <div className="flex relative">
                    <div className="text-xs">0.045 ETH</div>
                    <div className=" ">
                      <div>
                        <img
                          src="Person1.png"
                          alt=""
                          className="w-4 absolute z-30 right-6"
                        />
                      </div>
                      <div>
                        <img
                          src="Person2.png"
                          alt=""
                          className="w-4 absolute z-20 right-3"
                        />
                      </div>
                      <div>
                        <img
                          src="Person3.png"
                          alt=""
                          className="w-4 absolute z-10 right-0"
                        />
                      </div>
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
