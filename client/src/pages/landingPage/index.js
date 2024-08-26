import React from "react"
import Button from "../component/button";

const LandingPage = (props) => {
  return (
    <div className="bg-black md:h-[70vh] pt-20 md:px-0 text-white" >
      
      <main className="md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:gap-10 ">
        <div className="flex justify-center items-center md:h-[60vh]">
        <div className="sm:w-[100%] sm:text-center md:text-left md:w-3/4">
                  <p className="md:text-2xl sm:text-lg lg:text-3xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat quae vel dolore eum laborum reiciendis ipsa,
                  </p>
                <Button>Shop Now</Button>
                </div>
        </div>
        <div className="flex justify-center">
        <div  className=" bg-[url('/headphone.png')] 
        bg-cover bg-center w-5/6 sm:h-[50vh] md:h-[60vh]">
       </div>
        </div>
      
      </main>
    </div>
  )
};

export default LandingPage;
