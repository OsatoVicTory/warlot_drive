"use client";

import { WarlotLogo } from "@/assets/logo";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./styles.module.css";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

    return (
      <header className="bg-[#FFFFFF] sticky z-10 top-0 left-0 text-black">
        <div className="hidden lg:block px-10 min-[1100px]:px-20 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center ml-[-20px]">
                <WarlotLogo />
            </Link>
            <nav className="flex items-center gap-12 text-black">
                <Link href="#home" className="hover:opacity-[0.75]">Home</Link>
                <Link href="#features" className="hover:opacity-[0.75]">Feaures</Link>
                <Link href="#about" className="hover:opacity-[0.75]">About</Link>
                <Link href="#faq" className="hover:opacity-[0.75]">FAQ</Link>
                <Link href="#contact" className="hover:opacity-[0.75]">Contact</Link>
            </nav>
            <button className="px-5 py-3 rounded-full bg-[var(--primary-green-3)] hover:opacity-[0.9] cursor-pointer text-white">
              Connect Wallet
            </button>
          </div> 
        </div>

        <div className="lg:hidden">
          <div className="bg-[#FFFFFF] w-full px-2">
            <div className="lp-header-mobile flex justify-between items-center px-8 py-6">
              <Link href="/" className="flex items-center ml-[-20px]">
                  <WarlotLogo />
              </Link>
              <button className="p-2 cursor-pointer" onClick={() => setSidebar(!sidebar)}>
                <RxHamburgerMenu className="w-[18px] h-[18px]" />
              </button>
            </div>
          </div>


          <div className={`${styles[`lp_sidebar`]} ${styles[`lps_${sidebar}`]} w-full h-full fixed top-0 bg-[#FFFFFF] overflow-hidden px-2`}>
            <div className="lp-header-mobile flex justify-between items-center px-8 py-6">
              <Link href="/" className="flex items-center">
                  <WarlotLogo />
              </Link>
              <button className="p-2 cursor-pointer" onClick={() => setSidebar(!sidebar)}>
                <RxHamburgerMenu className="w-[18px] h-[18px]" />
              </button>
            </div>
            <div className={`flex flex-col items-center gap-y-6 px-10 py-5`}>
              <nav className="flex flex-col gap-y-2 w-full">
                  <Link href="#home" className="p-4 hover:opacity-[0.78]">Home</Link>
                  <Link href="#features" className="p-4 hover:opacity-[0.78]">Feaures</Link>
                  <Link href="#about" className="p-4 hover:opacity-[0.78]">About</Link>
                  <Link href="#faq" className="p-4 hover:opacity-[0.78]">FAQ</Link>
                  <Link href="#contact" className="p-4 hover:opacity-[0.78]">Contact</Link>
              </nav>
              <button className="px-5 py-3 mt-[25] w-7/10 rounded-full bg-[var(--primary-green-3)] hover:opacity-[0.9] cursor-pointer text-white">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>
    )
};