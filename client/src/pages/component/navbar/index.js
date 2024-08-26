import Link from "next/link";
import React,{ useRef ,useEffect, useState} from "react";
import Image from "next/image";
import { FaShoppingCart,FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import gsap from "gsap";


export default function NavBar() {
  const containerref = useRef();
  // const [data,setdata]=useState()
  const links = ["Home", "Shop", "About", "Contact us"]
// console.log(data)
//   useEffect(()=>{
//   const result =localStorage.getItem("cart")
//   setdata(JSON.parse(result))
// close()
//   },[data])
  const tl = gsap.timeline()
  const open = () => {
    tl.to(containerref.current, {
      left:0,
      duration: 0.3,
      delay: 0.3,
      x: 0
    })


  }
  const close = () => {
    tl.to(containerref.current, {
      duration: 0.3,
      delay: 0.3,
      left: -700

    })


  }


  return (
    <main>
      <div className="flex fixed z-10 w-[100%] justify-between items-center backdrop-blur-sm bg-black/30  text-white md:h-20 sm:h-16 text-2xl navbar ">
        <div>
          <i onClick={open} className=" absolute  left-10 open  sm:top-5 sm:left-2  text-3xl" >
            <GiHamburgerMenu />
          </i>
          <div ref={containerref} className="backdrop-blur-sm bg-black/70 -left-[100%] md:p-40  nav-link  h-[100vh] fixed top-0 ont-semibold sm:w-[100%] md:w-4/6 lg:w-3/6 2xl:w-2/6">

            <i onClick={() => {
              close()
            }} className="backdrop-blur-sm bg-black/30 rounded-3xl text-3xl md:p-4 absolute top-3 left-[86%] close sm:text-2xl sm:top-15 sm:left-2 sm:p-2" ><MdCancel /></i>
            <div className="text-3xl font-serif font-bold relative sm:top-28 sm:left-24 md:top-0 md:left-0 lg:top-10"><Image src={"/logo1.png"} width={100} height={100} alt="image8"></Image></div>
            <ul className="font-serif text-5xl sm:text-3xl sm:leading-[70px] sm:mt-28 sm:ml-[6rem] font-semibold md:mt-0 md:ml-0 md:leading-loose md:text-4xl lg:text-5xl lg:leading-[80px] lg:-ml-20 lg:mt-20">
             
                <li><Link href={"/"}>{links[0]}</Link></li>
                <li><Link href={"/shop"}>{links[1]}</Link></li>
                <li><Link href={"#"}>{links[2]}</Link></li>
                <li><Link href={"#"}>{links[3]}</Link></li>
               
           
            </ul>
          </div>
        </div>

        <div className="icon flex gap-6 md:mr-10 sm:mr-2 ">
         
        <Link href={"#"}>  
           <i > <FaUser   className="text-3xl "/> </i>
        </Link>
        <Link href={"/cart"}>  
           <i> <FaShoppingCart   className=" text-3xl inline"/> <span className="text-sm"></span></i>
        </Link>
         
        </div>
      </div>
    </main>
  );
}
