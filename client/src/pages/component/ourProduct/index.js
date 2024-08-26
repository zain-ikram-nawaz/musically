import React from "react"
import Image from "next/image";
// 025048
const OurProduct = (props) => {
  return (
    <div className=" mt-80 sm:px-4 text-[#025048] bg-gray-100">
      <main className="container mx-auto grid md:grid-cols-2 sm:gap-20 ">
        <div className="one">
            <p className="text-sm py-6 sm:py-2">THE BEST OR AUDIONIC</p>
            <h1 className="md:text-3xl lg:text-4xl font-semibold font-serif sm:text-2xl">Our Products Category​</h1>
          <p className="text-xl py-4 sm:text-sm lg:text-xl">Discover our premium range of audio equipment, where cutting-edge technology meets exceptional design. From headphones to speakers, each product in our collection delivers unparalleled sound quality, offering you a truly immersive listening experience..</p>
          <div  className="flex items-end bg-red-400 lg:w-90%] md:h-[66vh] xl:h-[80vh] h-[60vh] sm:h-[80vh] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="bg-white p-4 h-24 w-full m-4"> 
            <h1 className="text-2xl font-serif sm:text-lg lg:text-xl">Sleek and Stylish Audio Gear.</h1>
            <p className="sm:text-sm">Starting from just $99.00</p>
                        </div>
          </div>
        </div>
        <div className="two flex flex-col justify-between gap-4">
            <div className="flex items-end bg-teal-600 lg:w-[40vw] h-[40vh] xl:w-[30vw] sm:h-[50vh] relative -top-14 bg-[url('https://images.unsplash.com/photo-1527283232998-47d7c90ed4e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
            <div className="bg-white p-4 h-24 w-full m-4"> 
            <h1 className="text-2xl font-serif sm:text-lg lg:text-xl">Trending  Stylish Audio Gear.</h1>
            <p className="sm:text-sm">Starting from just $299.00</p>
                        </div>
            </div>
            <div className="flex items-end bg-teal-600 lg:w-[40vw] xl:w-[30vw] h-[40vh] sm:h-[50vh] relative -top-14 md:top-10 bg-[url('https://images.unsplash.com/photo-1527283232998-47d7c90ed4e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
            <div className="bg-white p-4 h-24 w-full m-4"> 
            <h1 className="text-2xl font-serif sm:text-lg lg:text-xl">Trending Stylish Audio Gear.</h1>
            <p className="sm:text-sm">Starting from just $299.00</p>
                        </div>
            </div>
        </div>
      </main>
    </div>
  )
};

export default OurProduct;
