import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className='header_top_icon_wrapper'>
              <BsFacebook />
            </div>
            <div className='header_top_icon_wrapper'>
              <RiInstagramFill />
            </div>
            <div className='header_top_icon_wrapper'>
              <BsTwitter />
            </div>
            <div className='header_top_icon_wrapper'>
              <BsLinkedin />
            </div>
          </div>
          <div className='text-gray-500 text-[12px]'>
            <b>FREE SHIPPING</b> 
            ኣብዚ ሰሙን ልዕሊ - $55 ብዝተኣዘዙ ምልኣኽ
          </div>
          <div className="flex items-center gap-4">
          <select 
        name="currency" 
       id="currency" 
      className="border border-gray-300 rounded p-1"
    >
  <option value="USD">USD $</option>
  <option value="EUR">EUR €</option>
    </select>
    <select 
  name="language" 
  id="language" 
  className="border border-gray-300 rounded p-1"
    >
  <option value="english">English</option>
  <option value="Tigrigna">Tigrigna</option>
      </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;