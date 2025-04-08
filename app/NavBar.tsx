import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="bg-orange-600"> {/* Apply orange-red background */}
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium text-black">
          <Link className="navbar_link relative" href="#">HOME</Link>
          <Link className="navbar_link relative" href="#">CATEGORIES</Link>
          <Link className="navbar_link relative" href="#">MEN'S</Link>
          <Link className="navbar_link relative" href="#">WOMEN'S</Link>
          <Link className="navbar_link relative" href="#">JEWELRY</Link>
          <Link className="navbar_link relative" href="#">PERFUME</Link>
          <Link className="navbar_link relative" href="#">BLOG</Link>
          <Link className="navbar_link relative" href="#">HOT OFFERS</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;