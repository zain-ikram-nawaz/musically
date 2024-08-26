import React from "react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";


export default function Footer() {

  return (
 <main>
  <div className="one sm:mt-10 sm:px-4 border-b-2 md:container text-[#025048] md:mx-auto flex justify-between h-[20vh] items-center flex-wrap"> 
    <div>
      <h1 className="text-2xl sm:text-lg md:text-3xl">Audionic</h1>
    </div>
    <div >
      <ul className="flex gap-6 md:text-lg sm:text-sm">

      <li><Link href={"/"}>Home</Link></li>
      <ll><Link href={"/"}>Shop</Link></ll>
      <li><Link href={"/"}>About</Link></li>
      <li><Link href={"/"}>Contact Us</Link></li>
      </ul>
    </div>
    <div className="flex gap-4">
<FaFacebookSquare className="text-gray-600 "></FaFacebookSquare>
<FaInstagramSquare className="text-gray-600 "></FaInstagramSquare>
<BsTwitterX className="text-gray-600 "></BsTwitterX>
<FaYoutube className="text-gray-600 "></FaYoutube>
    </div>
  </div>
  <div className="two pt-4 sm:px-4 text-[#025048]" >
    <div className="md:container md:mx-auto flex justify-between sm:text-sm md:text-lg"> 
      <p>Copyright © 2024</p>
      <p>All rights reserved</p>
    </div>
  </div>
 </main>
  );
}
