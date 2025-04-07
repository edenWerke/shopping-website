import React from 'react';
import { BsSearch } from "react-icons/bs";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center sm:pb-0">
          <span className="text-pink-500">SH</span>
          <span className="text-gray-500">OP</span>
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input 
            type="text" 
            placeholder="Enter any product name..." 
            className="border border-gray-300 p-2 px-4 rounded-lg w-full"
          />
          <BsSearch className='absolute right-0 top-0 m-3 text-gray-400'/>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;