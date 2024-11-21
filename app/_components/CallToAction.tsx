import React from "react";
import Button from "./Button";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center text-center mt-24 mb-24 w-[90%] mx-auto">
      <h2 className="text-[48px] font-bold mb-8 leading-[3.5rem] w-[47.5rem]">
        Ready to take <span className="text-accent ">your </span>
        profile presence to the next level?
      </h2>
      <Button />
    </div>
  );
}
