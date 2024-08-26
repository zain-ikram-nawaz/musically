import React from "react";
import Button from "../button";

const Banner = (props) => {
  return (
    <main>
      <div className="md:h-[60vh] lg:h-[70vh] mt-10 sm:h-[60vh] text-[#025048] w-[100%] bg-[url('https://cdn.mos.cms.futurecdn.net/9m5MxjiEE8AXhUUfF9t23A-1200-80.jpg')] flex bg-fixed  justify-center items-center ">
        <div className="md:h-[50vh] sm:h-[40vh] sm:w-[100%] sm:px-2 bg-white flex justify-center items-center text-center ">
          <div className="space-y-4 flex flex-col items-center">
            <h1 className=" md:text-3xl sm:text-2xl  lg:w-2/4">Start Your Audio Adventure: Explore Our Exceptional Collections..</h1>
            <p className="text-xl sm:text-sm">Starting from just $149.00</p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </div>
      {/* <div className="h-[100vh] w-[100%]"></div> */}
    </main>
  );
};

export default Banner;
