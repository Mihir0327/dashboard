// import React, { useRef } from "react";
// import { TopSellerData } from "./TopSellerData";
// import Slider from "react-slick";
// import {MdVerified} from 'react-icons/md'
// import { useEffect } from "react";

// const TopSeller = () => {

//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const slider = sliderRef.current;
//         const progressBar = document.querySelector(".slider-progress");

//         const handleSlideChange = (currentSlide) => {
//             const progress = (currentSlide / TopSellerData.length) * 100;
//             progressBar.style.width = `${progress}%`;
//           };

//         sliderRef.current.innerSlider.on("beforeChange", handleSlideChange);

//         return () => {
//           sliderRef.current.innerSlider.off("beforeChange", handleSlideChange);
//         };
//       }, []);

//   var settings = {
//     dots: false,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="w-[66vw] mt-5">
//       <div className="text-xl my-5">Top Seller</div>
//       <Slider {...settings} ref={sliderRef}>
//         {TopSellerData.map((data) => {
//           return (
//             <>
//             <div className="slider-item flex items-center gap-x-5">

//               <div>
//                 <img src="paplu.png" alt=""/>
//               </div>
//               <div>
//                 <div className="flex items-center">{data.name} <MdVerified color="blue"/></div>
//                 <div>{data.amt}</div>
//               </div>
//             </div>
//             </>
//           );
//         })}
//       </Slider>
//       <div className="slider-progress" ></div>
//     </div>
//   );
// };

// export default TopSeller;

// //   <div>
// //     <img src={data.img} />
// //   </div>
// //   <div>
// //     <div>{data.name}</div>
// //   </div>

// //     <div>{data.amt}</div>

import { TopSellerData } from "./TopSellerData";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdVerified } from "react-icons/md";

const TopSeller = () => {
  const sliderRef = useRef(null);

  const handleSlideChange = (oldIndex, newIndex) => {
    const progressBar = document.querySelector(".slider-progress");
    const progress = ((newIndex + 1) / TopSellerData.length) * 100;
    progressBar.style.width = `${progress}%`;
  };

  useEffect(() => {
    sliderRef.current.slickGoTo(0); // Reset slide to first slide
  }, []);

  var settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows:false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      // You can also use the beforeChange prop to define the callback
      handleSlideChange(oldIndex, newIndex);
    },
  };

  return (
    <div className="w-[85vw] lg:w-[66vw] mt-5">
      <div className="text-xl my-5">Top Seller</div>
      <Slider {...settings} ref={sliderRef}>
        {TopSellerData.map((data) => {
          return (
            <div>
              <div className="flex slider-item gap-x-5" key={data.id}>
                <div>
                  <img src="paplu.png" alt="" />
                </div>
                <div>
                  <div className="flex items-center">
                    {data.name} <MdVerified color="blue" />
                  </div>
                  <div>{data.amt}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="mt-4 slider-progress"></div>
    </div>
  );
};

export default TopSeller;

// import React, { useRef, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MdVerified } from "react-icons/md";

// const TopSeller = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const progressBar = document.querySelector(".slider-progress");

//     const handleSlideChange = (currentSlide) => {
//       const progress = (currentSlide / TopSellerData.length) * 100;
//       progressBar.style.width = `${progress}%`;
//     };

//     sliderRef.current.slickGoTo(0); // Reset slide to first slide
//     sliderRef.current.on("beforeChange", (currentSlide, nextSlide) => {
//       handleSlideChange(nextSlide);
//     });

//     return () => {
//       sliderRef.current.unslick(); // Clean up slick carousel on unmount
//     };
//   }, []);

//   var settings = {
//     dots: false,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="w-[66vw] mt-5">
//       <div className="text-xl my-5">Top Seller</div>
//       <Slider {...settings} ref={sliderRef}>
//         {TopSellerData.map((data) => {
//           return (
//             <div className="slider-item flex items-center gap-x-5" key={data.id}>
//               <div>
//                 <img src="paplu.png" alt="" />
//               </div>
//               <div>
//                 <div className="flex items-center">
//                   {data.name} <MdVerified color="blue" />
//                 </div>
//                 <div>{data.amt}</div>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//       <div className="slider-progress"></div>
//     </div>
//   );
// };

// export default TopSeller;
