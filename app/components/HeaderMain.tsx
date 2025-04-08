import React from 'react';
import { BsSearch } from "react-icons/bs";
import { FaRegHeart , FaShoppingBag } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center sm:pb-0">
          <span className="text-red-600">SH</span>
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
        <div className="flex items-center gap-3"> {/* Reduced gap to 2 */}
          <div className="relative">
            <BiUser className="text-gray-600 text-[32px]" />
          
          </div>
          <div className="relative">
            <FaRegHeart className="text-gray-600 text-[32px]" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag  className="text-gray-600 text-[32px]" />
            <div className="bg-red-600 rounded-full absolute top-0 right-0  w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;