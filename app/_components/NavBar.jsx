"use client";
import Image from "next/image";
import { useState } from "react";
function NavBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  function handleHamburger() {
    setSideBarOpen(true);
  }
  return (
    <nav className="bg-navbar relative flex justify-between items-center pt-3 px-3 md:px-10 ">
      <section className="flex items-center">
        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
        <span className="hidden font-bold md:flex">ProbAtomic</span>
      </section>

      <section className="hidden gap-4 md:flex ">
        <span>Partners</span>
        <span>Program</span>
        <span className="text-accent font-bold">Login</span>
      </section>
      {/* Mobile hamnburger and sidebar */}
      <section className="md:hidden" onClick={handleHamburger}>
        <Image
          src="../icon-hamburger-6b5cecbe.svg"
          alt="hamburger"
          width={30}
          height={20}
        />
      </section>
      <section
        className={`${
          sideBarOpen ? "flex" : "hidden"
        } pt-6 flex-col items-center gap-4 fixed top-0 left-0 text-navbar bg-green-50 w-full h-[100vh]  md:hidden`}
      >
        <span
          className="absolute right-6 top-2"
          onClick={() => setSideBarOpen(false)}
        >
          &#10005;
        </span>

        <span>Partners</span>
        <span>Program</span>
        <span className="text-accent font-bold">Login</span>
      </section>
    </nav>
  );
}

export default NavBar;
