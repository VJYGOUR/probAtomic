"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Button(): JSX.Element {
  return (
    <div className="flex items-center justify-center bg-accent gap-3 pt-[20px] pb-[20px] pr-[40px] pl-[40px] w-[201px] h-[53px] text-primary mx-auto rounded-[6px] font-[500] sm:rounded-[14px] sm:pt[22px] sm:pt-[22px] sm:text-[18px]">
      <Link href="/login">Get Started</Link>
      <Image src="/Arrow.png" alt="arrow" width={13} height={10} />
    </div>
  );
}

export default Button;
