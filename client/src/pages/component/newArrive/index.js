import React,{useEffect,useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../redux/fetchproductslice";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const BestSeller = () => {
  const data = useSelector((state) => state.fetchData.productdata);
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(fetchData());
  },[]);
if(!data){
  return <div className="text-6xl">Loading....</div>
}
  return (
    <main className=" sm:px-4">

    <div className=" pt-10 mt-20 md:container md:mx-auto">
        <div>
<p className="sm:text-sm text-[#025048]">Most Popular</p>
      <p className="mb-10 md:w-3/4 py-4 font-semibold sm:text-2xl md:text-3xl font-serif lg:text-4xl text-[#025048]">Explore the Latest Releases at Your Favorite Audio Store..</p>
<div className="new-Arrive gap-10 sm:gap-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
{data?.slice(0,5).map((item)=>{
    return (
      <div key={item._id}>
        <Link href={`/${item._id}`}>
<div className="md:h-[40vh] w-[15vw] sm:w-full sm:h-[35vh] ]">

    <div className="image-div h-[22vh] w-[15vw] relative sm:w-[100%] sm:h-[15vh] md:h-[22vh]">
      <Image className="absolute w-[100%] h-[100%]" src={`http://localhost:8000/public/${item.image[0].name}`} width={200} height={200} alt="image8"></Image>
    </div>
    <div className=" space-y-2">

<p className="text-gray-500 text-sm ">{item.category}</p>
<p className="text-2xl font-semibold sm:text-lg text-[#025048] font-serif capitalize">{item.title}</p>
<i className="flex sm:text-sm">
                <FaStar className="text-gray-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
                <FaStar className="text-gray-400"></FaStar>
              </i>
<p className="text-xl sm:text-lg font-bold text-gray-900">$ {item.price}</p>

    </div>
</div>


      </Link>
  </div>
)
})}
</div>
    </div>
</div>
</main>
  )
};

export default BestSeller;
