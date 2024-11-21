import React from "react";
import HeroSection from "./_components/HeroSection";
import NavBar from "./_components/NavBar";

import Main from "./_components/Main";
import Swipe from "./_components/Swipe";
import Features from "./_components/Features";
import UserJourney from "./_components/UserJourney";
import CallToAction from "./_components/CallToAction";
export default function Home(): JSX.Element {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Main />
      <Swipe />
      <Features />
      <UserJourney />
      <CallToAction />
    </>
  );
}
