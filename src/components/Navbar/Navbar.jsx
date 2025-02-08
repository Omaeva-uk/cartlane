"use client"

import "./navbar.css";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "..";
import { useState, useEffect } from "react";


const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);
    //console.log(navOpen)



  return (
    <header className="max-w-[1200px] mx-auto nav-animation">
        <nav className="flex justify-between items-center relative">
            <div>
                <Image src="/assets/nav-logo.png" alt="Cartlane logo" width={147} height={50} />
            </div>
            <div className="flex nav-intro-hide items-center ml-auto gap-5 max-sm:hidden">
                <Link href="/about" >About Us</Link>
                <PrimaryButton text="Contact Us" />
            </div>
            {/* Mobile nav */}
            <div onClick={() => setNavOpen((prev) => !prev)}>
               <div className="w-[40px] h-[40px] rounded-xl bg-black sm:hidden flex justify-center items-center text-white">
                <Image src="/assets/mob-nav-icon.png" width={18} height={12} alt="mobile icon" />
                </div> 
                
            </div>
            <div className={`sm:hidden ${navOpen ? 'visible' : 'hidden'} transition-all absolute right-0 top-12 bg-black text-white rounded-xl w-full text-right`}>
                <div className="flex flex-col justify-end gap-4 p-5 pr-2">
                    <Link href="/about" >About Us</Link> 
                    <Link href="/about" >Contact Us</Link> 
                </div>
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar;