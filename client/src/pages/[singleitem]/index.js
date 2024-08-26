import React, { useState,useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/fetchproductslice";
import Button from "../component/button";
import Image from "next/image";
import { FaStar } from "react-icons/fa";


export default function Singleitem() {
  
  const distpatch = useDispatch();
  // const [cartitem,setCartitem] =useState()
  const [des,setDes]= useState(true)
  const data = useSelector((state) => state.fetchData.productdata);
  const singleitem = useParams();
  const found = data?.filter((product) => product?._id === singleitem.singleitem);
  const [customImage,setCustomeImage]= useState()
  useEffect(() => {
    distpatch(fetchData());

  }, []);

  useEffect(() => {
    if (found && found.length > 0 && !customImage) {
      // Only set the initial image if customImage is not already set
      setCustomeImage(found[0].image[0].name);
    }
  }, [found, customImage]);
  const sendcart = async (data) => {


    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];


    const existingItem = existingCart.find(cartItem => cartItem._id === data._id);

    if (existingItem) {
      // If the item already exists in the cart, increase its quantity
      existingItem.quantity += 1;
  
      // Debug: Log the updated item
      // console.log('Updated item:', existingItem);
    }
    else
    {
      const savecart = localStorage.setItem("cart",JSON.stringify([...existingCart, data]))

    }
     
  
    // try {
    //   const res = await fetch("http://localhost:8000/cartitem", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     // credentials:"include",
    //     body: JSON.stringify(data),
    //   });
    //   if(!res.ok){
    //     alert("please login first")
    //   }
    //   else{
    //     alert("cart added")
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  // const cart = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8000/cartdata", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     if (res.ok) {
  //       const result = await res.json();

  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   cart();
  // }, []);
 
  const imageZoom=(imaneName)=>{
  setCustomeImage(imaneName)

}
// console.log("update image ",customImage)
  return (
    <main>

    <div className="container mx-auto pt-40">
   

      <div>
          {found?.map((item) => {
      
            return (
              <div key={item._id}>
               <div className="md:p-8">
                <div className="grid sm:grid-cols-1 md:grid-cols-2  rounded-md ">
            <div>
           <div className=""> <Image className="md:h-[50vh] sm:h-[30vh]" src={`https://musically-mu.vercel.app/public/${customImage}`}  width={500} height={500} alt="image"/></div>
          
            </div>
                  <div className="w-4/4 sm:text-sm sm:ml-4 md:text-base">
                    <h2 className="font-bold text-4xl mt-4 sm:text-2xl md:text-5xl capitalize">{item.title}</h2>
                    <div className="flex gap-2 my-2">
                   Home /
                  Shop /
                   {item.category}
                    </div>
                    <h2 className="text-3xl text-white mt-2 mb-4 sm:text-2xl md:text-4xl font-semibold">${item.price}.00 <span className="text-lg">& Free Shipping</span></h2>
                    <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline text-yellow-300"></FaStar>
                      <FaStar className="inline"></FaStar>
                      <FaStar className="inline"></FaStar>
                    <p className="overflow-auto">{item.description}</p>
                    <p className="mt-4">category :{item.category}</p>
                    <button className="mt-4 border px-6   py-2 rounded-md" onClick={()=>{
                      sendcart(item)
                    }}>Add to cart</button>
                    <p className="my-2"><b>Free shipping on orders over $50!</b></p>
                    <ul className="list-decimal list-inside">
                      <li>No-Risk Money Back Guarantee!</li>
                      <li>No Hassle Refunds</li>
                      <li>Secure Payments</li>
                    </ul>
                    <p>Guaranteed Safe Checkout</p>
                    <div className="flex gap-4 py-2">
                      <Image src={"https://th.bing.com/th/id/OIP.xVREsbEnxpFwYsgl4hNO7QHaDA?rs=1&pid=ImgDetMain"} width={50} height={50} alt="image1"></Image>
                      <Image src={"https://th.bing.com/th/id/OIP.pL0yAs7O-twbB-41n4VngAHaEc?rs=1&pid=ImgDetMain"} width={50} height={50} alt="image2"></Image>
                      <Image src={"https://th.bing.com/th/id/OIP.zOeAruryRq_7tiw92pV5hQHaEK?rs=1&pid=ImgDetMain"} width={50} height={50} alt="image3"></Image>
                      <Image src={"https://th.bing.com/th/id/R.57476e8f60c7521c552782c46f616876?rik=NDlSB%2b7tOgcL4g&riu=http%3a%2f%2fagenciatgm.com%2fwp-content%2fuploads%2f2020%2f07%2famerican-express-logo-.png&ehk=WYkdTWvHE4uXxQuoArhvSlh0gYOfGqe0do2x801Zfnc%3d&risl=&pid=ImgRaw&r=0"} width={50} height={50} alt="image6"></Image>
                    </div>
                   
                  </div>
                </div>
                 <div className=" md:w-3/6 flex gap-4 sm:p-4 ">
           {item.image.map((image)=>{
             return (
               
               <div className=" md:w-40 md:h-[11vh] sm:w-20 sm:h-[11vh] relative" key={image._id}>
              <Image className="absolute w-full h-full  bg-cover bg-center" src={`https://musically-mu.vercel.app/public/${image.name}`} width={200} height={200} alt="image4" onClick={()=>{
              imageZoom(image.name)
              }}></Image>
              </div>
            )
           })}
              </div>
               </div>
               <div className="border-t-2 mt-4 sm:p-4 text-gray-600">
                <button className="font-serif" onClick={()=>{
                  setDes(true)
                }}>Description</button>
                <button className="ml-2 font-serif"  onClick={()=>{
            setDes(false)
           }}> Reviews</button>
           {des ? <p className="md:w-3/4" >{item.description}</p> : <div> <p className="my-3">There are no reviews yet.</p>
           <div className="border-2 p-4 md:w-2/4">
          <h1 className="sm:text-2xl md:text-3xl lg:text-4xl my-2">Be the first to review “Ceramic Cup”</h1>
          <p className="sm:text-sm md:text-lg">Your email address will not be published. Required fields are marked *</p>
          <p className="my-2">Your review *</p>
          <form action="mailto:zainikram704@gmail.com" encType="multipart/form-data" className="">
          <textarea className="border-2 w-full" name="" id=""></textarea>
          <p className="sm:text-sm md:text-lg" htmlFor="">Name *</p>
          <input className="w-full p-2 border-2" type="text" />
          <p className="sm:text-sm md:text-lg" htmlFor="">Email *</p>
          <input className="w-full p-2 border-2" type="text" />
     <div> <Button> SUBMIT </Button></div>
          </form>
           </div>
           </div>}
               </div>
              </div>
            );
          })}
    
      </div>
    </div>
   

            </main>
  );
}
