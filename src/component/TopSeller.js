import React from "react";
import { TopSellerData } from "./TopSellerData";
import Slider from "react-slick";
import {MdVerified} from 'react-icons/md'
const TopSeller = () => {





  var settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  
  return (
    <div className="w-[66vw] mt-5">
      <div className="text-xl my-5">Top Seller</div>
      <Slider {...settings} >
        {TopSellerData.map((data) => {
          return (
            <>
            <div className="flex items-center gap-x-5">

              <div>
                <img src="paplu.png" alt=""/>
              </div>
              <div>
                <div className="flex items-center">{data.name} <MdVerified color="blue"/></div>
                <div>{data.amt}</div>
              </div>
            </div>
            </>
          );
        })}
      </Slider>
      <div className="progress-bar" ></div>
    </div>
  );
};

export default TopSeller;

//   <div>
//     <img src={data.img} />
//   </div>
//   <div>
//     <div>{data.name}</div>
//     <div>{data.amt}</div>
//   </div>
