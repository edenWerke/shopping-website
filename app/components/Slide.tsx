import React from 'react';
import Image from 'next/image';

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className='outline-none border-none relative overflow-hidden'> {/* Added overflow-hidden */}
      <div className="absolute left-[30px] md:left-[70px]
        max-w-[250px] sm:max-w-[350px] top-[50%] 
        -translate-y-[50%] space-y-2 lg:space-y-4 
        p-4 sm:p-0 rounded-lg sm:rounded-none bg-transparent">
        
        <h3 className='text-red-600 text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-blackish text-[26px] md:text-[30px] 
        lg:text-[44px] font-bold leading-[1.2]'>{mainTitle}</h2>
        <h3 className='text-[24px] text-gray-500'>starting at {" "}
          <b className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</b>
          .00
        </h3>
        <div className="bg-red-600 text-white text-[14px] md:text-[20px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
          Shop Now
        </div>
      </div>
      <Image 
        className="w-full h-auto max-w-[2000px] pt-0 rounded-xl object-cover object-center" 
        src={img}
        alt="banner"
        layout="responsive"
        width={2000}
        height={600}
      />
    </div>
  );
}

export default Slide;