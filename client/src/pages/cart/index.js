import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from 'stripe';

const Cart = (props) => {
    // const [data, setData] = useState();
    const [cartItem,setCartitem]= useState([])
    const [isClient, setIsClient] = useState(false);
  // const cartd =()=>{
  //   return data?.map((item)=>{
  //     return item.item
  //   })
  
  // }
  // const result = cartd()
const sum = cartItem?.reduce((firstitem,allitems)=>
firstitem + allitems.quantity,0)
const totalprice = cartItem?.reduce((firstitem,allitems)=>
firstitem + allitems.price * allitems.quantity,0)
//   const cart = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/cartdata", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });
//       if (res.ok) {
//         const result = await res.json();
//         setData(result);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartitem(JSON.parse(savedCart));
    }
  }, [cartItem]);
  // const cartDcrease = async (itemId) => {
    
  //   try {
  //     const res = await fetch(
  //       `http://localhost:8000/cartdata/decrease/${itemId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       }
  //     );
  //     cart();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

//   const cartIncreased = async (itemId) => {
//     // try {
//     //   const res = await fetch(
//     //     `http://localhost:8000/cartdata/increase/${itemId}`,
//     //     {
//     //       method: "POST",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       credentials: "include",
//     //     }
//     //   );
//     //   cart();
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };
  const  cartInc = (item) => {
    // Step 1: Retrieve the cart from localStorage
 
    // const cart = JSON.parse(localStorage.getItem('cart')) || [];

  
    // Step 2: Check if the item exists in the cart
    const existingItemIndex = cartItem.findIndex(cartItem => cartItem._id === item._id);
  
    if (existingItemIndex !== -1) {
      // If item exists, increase its quantity
      cartItem[existingItemIndex].quantity += 1;
    } else {
      // If item doesn't exist, add it to the cart with quantity 1
      item.quantity = 1;
      cartItem.push(item);
    }
  
    // Step 3: Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cartItem));
  }
    
  const cartdec = (item) => {
    // Step 1: Retrieve the cart from localStorage
    // const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Step 2: Check if the item exists in the cart
    const existingItemIndex = cartItem.findIndex(cartItem => cartItem._id === item._id);
  
    if (existingItemIndex !== -1) {
      // If item exists, increase its quantity
      cartItem[existingItemIndex].quantity -= 1;
    } else {
      // If item doesn't exist, add it to the cart with quantity 1
      item.quantity = 1;
      cartItem.push(item);
    }
  
    // Step 3: Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cartItem));
  }
    
function removeCart(itemId) {
  // Step 1: Retrieve the cart from localStorage
  // const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Step 2: Filter out the item with the specified id
  const updatedCart = cartItem.filter(cartItem => cartItem._id !== itemId);

  // Step 3: Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));
}
  // const removeCart = async (itemId) => {

  //   try {
  //     const res = await fetch(
  //       `http://localhost:8000/cartdata/remove/${itemId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       }
  //     );
  //   cart()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  

const makePayment = async()=>{
  const stripe = await loadStripe("pk_test_51OqY7TAM6LXkQCi4wf9x8UPoUfrAVQuDoI8Jclx4Y2V6rJGOpgLSWLxdpnAh2gvahI6oRtrd78pCS8gRhe5IUKjF00EsEV7iMw")
  
  const response = await fetch("https://musically-mu.vercel.app/create-checkout-session",{
    method: "POST",
    headers: {  
         'Access-Control-Allow-Origin': '*',
      "Content-Type": "application/json"
    },
    body:JSON.stringify(cartItem),
  })
  const session = await response.json();
  const result = stripe.redirectToCheckout({
    sessionId:session.id
  });
  if((await result).error){
    console.log((await result).error)
  }
}
if (!cartItem) {
  return <div>Loading...</div>; // Display a loading state if cartItem is not yet loaded
}
  return (
    isClient ?
    <div className="pt-40  md:container md:mx-auto font-serif">
        <h1 className="sm:text-2xl sm:px-4 md:text-3xl lg:text-4xl font-semibold font-serif  mb-20">Cart</h1>
      <main className="md:grid md:grid-cols-6 gap-20 sm:space-y-4 md:space-y-0">
      <div className="col-span-4">

      
      <table className="w-[100%] text-center">
  <tr className="sm:text-sm">
    <th></th>
    <th>Product</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total</th>
  </tr>

  <tr>
    <td></td>
    <td colSpan={4} className="text-5xl pt-10">
      {cartItem.length === 0 ? "No Cart Yet" : ""}
    </td>
  </tr>

  {cartItem.map((item) => (
    <tr className="" key={item._id}>
      <td>
        <MdDeleteForever
          onClick={() => {
            removeCart(item._id);
          }}
          className="sm:text-2xl"
        ></MdDeleteForever>
      </td>
      <td className="flex justify-center">
        <Image
          src={`https://musically-mu.vercel.app/public/${item.image[0].name}`}
          width={100}
          height={100}
          alt="image8"
        />
      </td>
      <td>${item.price}</td>
      <td>
        <button
          className="md:bg-gray-400 md:px-4"
          onClick={() => {
            item.quantity > 1 ? cartdec(item) : item.quantity;
          }}
        >
          -
        </button>{" "}
        {item.quantity}{" "}
        <button
          className="md:bg-gray-400 md:px-4"
          onClick={() => {
            cartInc(item);
          }}
        >
          +
        </button>
      </td>
      <td>{item.price * item.quantity}</td>
    </tr>
  ))}
</table>
<hr />
          </div>
        
<div className="two col-span-2 sm:p-4 md:p-0">
    <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Cart Totals</h1>
    <div className="flex justify-between">
        <h1 className="text-lg  font-semibold py-4">Item Quantity</h1>
        <p className="py-4 sm:text-sm md:text-xl">{sum}</p>
    </div>
    <div className="flex justify-between">
        <h1 className="text-lg font-semibold py-4">Total</h1>
        <p className="py-4 sm:text-sm md:text-xl">{totalprice}</p>
    </div>
<p>    Have a coupon?</p>
<button onClick={()=>{
  makePayment()
}} type="submit" className="border-2 px-6 py-2  mt-4 sm:text-sm sm:py-1 sm:px-2 md:px-6 md:py-2 md:text-xl">Purchase Now</button>
</div>
      </main>
    </div> : null
  )
};

export default Cart;
