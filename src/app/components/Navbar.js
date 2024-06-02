"use client";
import Link from "next/link";
import Image from "next/image"; 
import React from "react";
const Navbar = () => {
    return (
      <div className="absolute top-0 left-0 right-0 z-40">
        <nav className="bg-secondary-100 flex p-4 items-center justify-between">
          <div>
              <Image
                  src="/logo.png"
                  alt="logo"
                  width={128}
                  height={77}
              />
          </div>
          <div className="flex space-x-16 pr-20">
              <Link href="/">
                  <button className="text-white">Home</button>
              </Link>
              <Link href="/product">
                  <button className="text-white">Products</button>
              </Link>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  
