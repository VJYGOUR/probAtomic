import React from "react";
import frontt from "../images/frontend.png";
import bulb from "../images/bulb.png";
import leadFrontend from "../images/lead_frontend.png";
import mobileApp from "../images/mobile_app.png";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
export default function Features() {
  return (
    <div className="w-[90%] mx-auto mt-12">
      <SectionHeading content="Our" content2="features" />
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        <section className="flex gap-6 items-center">
          <Image src={frontt} alt="frontend-engineer" />
          <div className="flex flex-col gap-2">
            <h3 className="text-[26px] font-bold">Frontend Engineer Intern</h3>
            <p className="text-features  text-[16px]">
              Assisted in the development of a web-based platform using
              React.js, enhancing interactivity.
            </p>
          </div>
        </section>
        <section className="flex gap-6 items-center">
          <Image src={mobileApp} alt="frontend-engineer" />
          <div className="ml-3 flex flex-col gap-2">
            <h3 className="text-[26px] font-bold">Mobile App Dev - JSM Tec</h3>
            <p className="text-features text-[16px]">
              Designed and developed mobile app for both iOS & Android platforms
              using React Native.
            </p>
          </div>
        </section>
        <section className="flex gap-6 items-center">
          <Image src={bulb} alt="frontend-engineer" />
          <div className="flex flex-col gap-2">
            <h3 className="text-[26px] font-bold">Freelance App Dev Project</h3>
            <p className="text-features text-[16px]">
              Led the dev of a mobile app for a client, from initial concept to
              deployment on app stores.
            </p>
          </div>
        </section>
        <section className="flex gap-6 items-center">
          <Image src={leadFrontend} alt="frontend-engineer" />
          <div className="flex flex-col gap-2">
            <h3 className="text-[26px] font-bold">Lead Frontend Developer</h3>
            <p className="text-features text-[16px]">
              Developed and maintained user-facing features using modern
              frontend technologies.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
