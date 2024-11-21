"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/userData.json";
import Switch from "../images/Switch.png";

import React from "react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function Swipe() {
  return (
    <div className="mt-[6rem]">
      <h2 className="text-[48px] font-bold text-center mt-7">User Reviews</h2>
      <Swiper
        className="mt-8"
        spaceBetween={50}
        slidesPerView={1.8}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((curr) => {
          return (
            <>
              <SwiperSlide
                key={curr.id}
                className="bg-secondary p-6 rounded-2xl  cursor-pointer"
              >
                <p className="text-[20px] font-normal">{curr.content}</p>
                <section className="flex gap-4 mt-8">
                  <Image src={Switch} alt="switch" />
                  <div className="flex flex-col">
                    <span className="text-[18px] font-semibold">
                      Michael Johnson
                    </span>
                    <span className="text-[14px] text-review">
                      Director of alphastream technologies
                    </span>
                  </div>
                </section>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}
