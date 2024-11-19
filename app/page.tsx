import React from "react";
import HeroSection from "./_components/HeroSection";
import NavBar from "./_components/NavBar";

import Main from "./_components/Main";
import Swipe from "./_components/Swipe";
export default function Home(): JSX.Element {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Main />
      <Swipe />
    </>
  );
}
