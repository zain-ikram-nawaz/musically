import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/fetchproductslice";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const Shop = (props) => {
  const data = useSelector((state) => state.fetchData.productdata);
  const [finaldata, setFinaldata] = useState(data);
  const [final, setFinal] = useState("");
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(fetchData());
  }, [data]);

  const HighToLOw = () => {
    const result = [...data].sort((a, b) => a.price - b.price);
    setFinaldata(result);
  };
  const LowToHigh = () => {
    const result = [...data].sort((a, b) => b.price - a.price);
    setFinaldata(result);
  };
  const HandlePrice = (e) => {
    const value = e.target.value;

    if (value === "High to Low price") {
      HighToLOw();
    }
    if (value === "Low to Hight Price") {
      LowToHigh();
    }
  };

  const Cat = (category) => {
    const result = data?.filter((item) => item.category === category);
    setFinaldata(result);
  };
  if (!finaldata) {
    return setFinal("Loading")
  }
  return (
    <div className="">
      <div className="bg-[url('https://images.unsplash.com/photo-1658874379939-a05eb13b0750?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[40vh] bg-cover bg-center">
        <div className=" text-white text-[4rem] font-semibold ">
          <p className="capitalize flex justify-center items-center h-96 sm:text-2xl md:text-3xl lg:text-6xl">
            sale 20% off
          </p>
        </div>
        <div></div>
      </div>
      <div className="md:container md:mx-auto mt-20 -mb-10 sm:px-4">
        <p className="sm:text-2xl md:text-3xl lg:text-4xl font-semibold capitalize">
          shop
        </p>
      </div>
      <main className="md:container mx-auto mt-20 sm:px-4 ">
        <div className=" grid grid-cols-2 md:h-28 border-t-2 ">
          <div className="flex flex-col justify-end sm:mt-4">
            <select
              name=""
              id=""
              className="md:w-3/12 sm:w-4/4 sm:text-sm md:text-lg"
              onChange={HandlePrice}
            >
              <option value="High to Low price" onClick={HighToLOw}>
                High to Low Price
              </option>
              <option value="Low to Hight Price" onClick={LowToHigh}>
                Low to High Price
              </option>
            </select>
          </div>

          <div className=" flex justify-end items-end sm:text-sm md:text-lg">
            <p>Showing all {data.length} results</p>
          </div>
        </div>

        <div className=" flex justify-center ">
          <div
            className=" gap-4 text-center flex flex-wrap sm:px-4 text-3xl"
            id="ss"
          >
            <button
              onClick={() => {
                Cat("Over-ear headphones");
              }}
              className="border-2 px-6 py-2  mt-4 sm:text-sm sm:py-1 sm:px-2 md:px-6 md:py-2 md:text-xl"
            >
              Over-ear headphones{" "}
            </button>
            <button
                onClick={() => {
                  Cat("On-ear headphones");
                }} className="border-2 px-6 py-2  mt-4 sm:text-sm sm:py-1 sm:px-2 md:px-6 md:py-2 md:text-xl">
              On-ear headphones{" "}
            </button>
            <button 
             onClick={() => {
              Cat("Open-ear headphones");
            }} className="border-2 px-6 py-2  mt-4 sm:text-sm sm:py-1 sm:px-2 md:px-6 md:py-2 md:text-xl">
              Open-ear headphones{" "}
            </button>
            <button 
             onClick={() => {
              Cat("Clip-on headphones");
            }} className="border-2 px-6 py-2  mt-4 sm:text-sm sm:py-1 sm:px-2 md:px-6 md:py-2 md:text-xl">
              {" "}
              Clip-on headphones{" "}
            </button>
            <button 
             onClick={() => {
              Cat("In-ear monitors");
            }} className="border-2 px-6 py-2  mt-4 sm:text-sm sm:py-1 sm:px-2 md:px-6 md:py-2 md:text-xl">
              In-ear monitors{" "}
            </button>
            <button 
             onClick={() => {
              Cat("Classic earbuds")
            }} className="border-2 px-6 py-2  mt-4 sm:text-sm sm:py-1 sm:px-2 md:px-6 md:py-2 md:text-xl">
              Classic earbuds{" "}
            </button>
          </div>
        </div>
        <div>{finaldata.length > 1  ? "" : "Loading Data....."}</div>
        <div>{finaldata.length > 1  ? "" : "Select Category ......"}</div>

        <div className="new-Arrive gap-10 mt-20 sm:gap-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {finaldata?.map((item) => {
            return (
                <div key={item._id}>
              <Link href={`/${item._id}`}>
                {" "}
                  <div className="md:h-[40vh] w-[15vw] sm:w-full sm:h-[35vh] ]">
                    <div className="image-div h-[22vh] w-[15vw] relative sm:w-[100%] sm:h-[15vh] md:h-[22vh]">
                      <Image
                        className="absolute w-[100%] h-[100%]"
                        src={`https://musically-mu.vercel.app/public/${item.image[0].name}`}
                        width={200}
                        height={200}
                        alt="image11"
                      ></Image>
                    </div>
                    <div className=" space-y-2">
                      <p className="text-gray-500 text-sm ">{item.category}</p>
                      <p className="text-2xl font-semibold sm:text-lg text-[#025048] font-serif capitalize">
                        {item.title}
                      </p>
                      <i className="flex sm:text-sm">
                        <FaStar className="text-gray-400"></FaStar>
                        <FaStar className="text-gray-400"></FaStar>
                        <FaStar className="text-gray-400"></FaStar>
                        <FaStar className="text-gray-400"></FaStar>
                        <FaStar className="text-gray-400"></FaStar>
                      </i>
                      <p className="text-xl sm:text-lg font-bold text-gray-900">
                        $ {item.price}
                      </p>
                    </div>
                  </div>
              </Link>
                </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Shop;
