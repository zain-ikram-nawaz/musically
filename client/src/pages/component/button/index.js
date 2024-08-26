import React from "react"

const Button = ({children}) => {
  return (
    <div>
      <button className="border-2 px-6 py-2  mt-4 sm:text-sm sm:py-1 sm:px-2 md:px-6 md:py-2 md:text-xl ">{children}</button>
      </div>

  )
};

export default Button;
