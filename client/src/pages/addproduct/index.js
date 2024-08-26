import React, { useState } from "react";

export default function AddProducts() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [imagefile, setImagefile] = useState();
  const immagefile=(e)=>{
      setImagefile(e.target.files)
   

  }
  const HandleForm = async (e) => {
    e.preventDefault();
    
    const formdata = new FormData()
    formdata.append("title", title);
    formdata.append("price", price);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("imagefile", imagefile);
    for(let index = 0; index < imagefile.length; index++){
      formdata.append("imagefile",imagefile[index])
         }
        //  for (let [key, value] of formdata.entries()) {
        //   console.log(key, value);
        // }
    try {
      const res = await fetch("https://musically-mu.vercel.app/addproduct", {
        method: "POST",
    
        body: formdata,
      });
      console.log(res)
      if (res.ok) {
       const data = await res.json()
       alert(data.message)
      } else {
        const errdata = await res.json()
        alert(errdata.error)
        console.log("something wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        action="/addproduct"
        onSubmit={HandleForm}
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <select
          name=""
          id=""
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Undefine">select category</option>
          <option value="Over-ear headphones">Over-ear headphones</option>
          <option value="On-ear headphones">On-ear headphones</option>
          <option value="Open-ear headphones">Open-ear headphones</option>
          <option value="Clip-on headphones">Clip-on headphones</option>
          <option value="In-ear monitors">In-ear monitors</option>
          <option value="Classic earbuds">Classic earbuds</option>
          
        </select>
        <input
        required
        multiple
          type="file"
          name="imagefile"
         onChange={immagefile}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
