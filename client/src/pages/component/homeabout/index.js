import React from "react";
import Button from "../button";

const Homeabout = (props) => {
  return (
    <main className="md:container mx-auto mt-72 sm:px-4 text-[#025048]">
        <div>
            <p className="text-sm py-2">About Our Audio Shop</p>
            <h1 className="md:text-3xl lg:text-4xl font-serif md:w-5/6 pb-10 sm:w-[100%] sm:text-2xl">Discover the perfect sound with our range of high-fidelity headphones, sleek earbuds, and top-notch audio gear. We offer only the best in quality, comfort, and design to elevate your listening experience.</h1>
        </div>
        <div className="grid lg:grid-cols-2 sm:gap-4 md:gap-20">
            <div className=" flex justify-center h-[80vh] ">
                <div className="h-[80vh] lg:h-[100vh] md:w-4/4 sm:w-[100%] bg-[url('https://plus.unsplash.com/premium_photo-1679456062579-cc90340801db?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover"></div>
                {/* <Image className="w-3/4" src={"https://plus.unsplash.com/premium_photo-1679456062579-cc90340801db?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={600} height={600} alt="image"></Image> */}
            </div>
            <div className=" place-content-end ">
                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover h-[35vh]"></div>
                {/* <Image className="w-5/6 sm:ml-8" src={"/6.jpg"} width={100} height={100} alt="image"></Image> */}
                <h1 className="md:text-3xl lg:text-4xl font-serif md:text-center my-6 sm:text-2xl">innovation meets sound to deliver an exceptional audio experience. Explore our curated collection of premium headphones, earbuds, and audio gear, crafted for true enthusiasts.</h1>
                <p className="text-sm  md:text-center my-6 md:text-lg lg:text-xl">Every product in our collection is a testament to our dedication to superior audio quality. Discover the passion and innovation that drive us to deliver the best in sound.</p>
                
               <div className="flex justify-center"> <Button>Read More</Button></div>
            </div>
        </div>
    </main>
  );
};

export default Homeabout;
