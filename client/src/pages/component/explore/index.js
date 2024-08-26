import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Explore = (props) => {
  return (
    <main className="border-4 h-[25vh]  shadow-lg">
      {/* <div className="text-[6rem] font-semibold">
        <p>Explore </p>
      </div> */}
      <div className=" flex  h-[25vh]">
        <Swiper
         breakpoints={{
          // when window width is >= 640px
          300: {
            width: 300,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
          slidesPerView={6}
          centeredSlides={true}
          spaceBetween={0}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide >
            {" "}
            <div className="title bg-[url('https://images.unsplash.com/photo-1529749549222-fd7475f997a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] w-[15vw] sm:w-[100%] shadow-2xl border-2">
              <div className="">
                <div className="text text-center" data-swiper-parallax="-100 sm:w-[100%]">
                  <p className="text-2xl p-4">
                  Over-ear headphones
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide> <div className="title bg-[url('https://cdn.mos.cms.futurecdn.net/G2tkejSnZbXiVgHYjCJb9J.jpg')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] w-[15vw] sm:w-[100%] shadow-2xl border-2">
              <div className="">
                <div className="text" data-swiper-parallax="-100 sm:w-[100%]">
                <p className="text-2xl p-4">
                  On-ear headphones
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="title bg-[url('https://th.bing.com/th/id/OIP.TtpxtlYiwDTVzn2vw96tWAHaEK?rs=1&pid=ImgDetMain')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] w-[15vw] shadow-2xl sm:w-[100%] border-2">
              <div className="">
                <div className="text" data-swiper-parallax="-100 sm:w-[100%]">
                <p className="text-2xl p-4">
                  Open-ear headphones
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="title bg-[url('https://th.bing.com/th/id/OIP.T518sPXZtZ2dLt77Om3LzQHaFV?rs=1&pid=ImgDetMain')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] w-[15vw] shadow-2xl sm:w-[100%] border-2">
              <div className="">
                <div className="text" data-swiper-parallax="-100 sm:w-[100%]">
                <p className="text-2xl p-4">
                  Clip-on headphones
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="title bg-[url('https://th.bing.com/th/id/OIP.f0FQ70ey9zMtnjfKBwmrgAHaE8?rs=1&pid=ImgDetMain')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] w-[15vw] shadow-2xl sm:w-[100%] border-2">
              <div className="">
                <div className="text" data-swiper-parallax="-100 sm:w-[100%]">
                <p className="text-2xl p-4">
                  Classic earbuds
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="title bg-[url('https://g-rafa.co.il/wp-content/uploads/2021/12/Jabra-Elite-4-Active-Black-Lifestyle-Female-Close-up-Small.jpg')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] w-[15vw] shadow-2xl sm:w-[100%] border-2">
              <div className="">
                <div className="text" data-swiper-parallax="-100 sm:w-[100%]">
                <p className="text-2xl p-4">
                    EarBud
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="title bg-[url('https://images.unsplash.com/photo-1511025998370-7d59f82e9c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8ZWFyJTIwYnVkc3x8MHx8fHwxNjI4ODkyNzUy&ixlib=rb-1.2.1&q=80&w=1080')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] w-[15vw] shadow-2xl sm:w-[100%] border-2">
              <div className="">
                <div className="text" data-swiper-parallax="-100 sm:w-[100%]">
                <p className="text-2xl p-4">
                    Handfree
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="title bg-[url('/s8.jpg')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] w-[15vw] shadow-2xl sm:w-[100%] border-2">
              <div className="">
                <div className="text" data-swiper-parallax="-100 sm:w-[100%]">
                <p className="text-2xl p-4">
                  bluetoot
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="title bg-[url('/s9.jpg')]  bg-cover bg-center object-fit text-white flex items-end sm:justify-start h-[20vh] sm:w-[100%] w-[15vw]">
              <div className="">
                <div className="text" data-swiper-parallax="-100 sm:w-[100%]">
                <p className="text-2xl p-4">
                   Simple Headphone
                  </p>
                </div>
              </div>
            </div></SwiperSlide>
         
        </Swiper>
      </div>
    </main>
  );
};

export default Explore;
