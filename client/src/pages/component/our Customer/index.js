import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import Button from "../button";

const OurCustomer = (props) => {
  return (
    <main>
      <div className=" w-[100%] flex items-center text-[#025048] py-10 sm:px-4">
        <div className="md:container md:mx-auto">
          <p className="text-sm">Testimonial</p>
          <h1 className="md:text-3xl lg:text-4xl mb-20  sm:mb-10 sm:text-2xl">What Our Customers Say</h1>
          <div className="grid md:grid-cols-2 gap-10  text-black">
            <div className="one space-y-6 bg-gray-100 rounded-lg shadow-xl p-16 sm:p-4">
              <i className="flex my-6">
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
              </i>
              <p className="sm:text-sm md:text-lg lg:text-xl">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex gap-6">
                <Image
                  className="rounded-3xl"
                  src={"/2.jpg"}
                  width={50}
                  height={20}
                  alt="image9"
                ></Image>
                <span className="sm:text-sm md:text-lg lg:text-xl">
                  <p>name</p>
                  <p>Business</p>
                </span>
              </div>
            </div>
            <div className="two space-y-6 bg-gray-100 rounded-lg shadow-xl p-16 sm:p-4">
              <i className="flex my-6">
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
                <FaStar className="text-yellow-300"></FaStar>
              </i>
              <p className="sm:text-sm md:text-lg lg:text-xl">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex gap-6">
                <Image
                  className="rounded-3xl"
                  src={"/2.jpg"}
                  width={50}
                  height={20}
                  alt="image10"
                ></Image>
                <span className="sm:text-sm lg:text-xl">
                  <p>name</p>
                  <p>Business</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:h-[50vh] sm:-[100vh] w-[100%] gap-4 sm:mt-4">
        <div className="one bg-[url('https://images.unsplash.com/photo-1531860898813-8cecde84646c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center sm:h-[50vh] md:h-[40vh]"></div>
        <div className="one  bg-[#025048]  md:h-[40vh] text-white">
          <div className="sm:h-[50vh] md:pt-10 md:pl-20 sm:p-4"> 
            <h1 className="md:text-3xl lg:text-4xl text-white font-serif sm:text-2xl">Begin Your Ceramic Journey Explore Our Stunning Collections</h1>
            <Button>Shop Now</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurCustomer;
