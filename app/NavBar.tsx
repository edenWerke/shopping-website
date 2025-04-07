import React from 'react';
import  Link from  'next/link' 

const NavBar = () => {
  return (
   
      <div>
        <div className="container">
       
        <div className="flex w-fit gap-10 mx-auto font-medium text-black">
          <Link className="navbar_link relative" href="#">Home</Link>
          <Link className="navbar_link relative" href="#">Home</Link>
          <Link className="navbar_link relative" href="#">Home</Link>
          <Link className="navbar_link relative" href="#">Home</Link>
       
        </div>
      </div>
      </div>

  );
}

export default NavBar;