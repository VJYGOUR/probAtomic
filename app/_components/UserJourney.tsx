import React from "react";
import SectionHeading from "./SectionHeading";

export default function UserJourney() {
  return (
    <div className="mt-20 px-8">
      <SectionHeading content="User" content2="Journey" />
      <div className="flex gap-8 mt-12 h-[38.6rem]">
        <section className="flex flex-col gap-4 items-center justify-center text-center bg-secondary rounded-lg px-8  ">
          <button className="text-accent border solid rounded px-3 py-2 border-accent">
            Phase 1
          </button>
          <h2 className="text-[32px]">Grab A PRroblem</h2>
          <p className="text-userJourney">
            Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way.
          </p>
        </section>
        <section className="flex text-center flex-col gap-4 items-center bg-secondary justify-center px-8 rounded-lg">
          <button className="text-accent border solid rounded px-3 py-2 border-accent">
            Phase 1
          </button>
          <h2 className="text-[32px]">Solve It</h2>
          <p className="text-userJourney">
            Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way.
          </p>
        </section>
        <section className="flex text-center flex-col gap-4 items-center bg-secondary justify-center px-8 rounded-lg">
          <button className="text-accent border solid rounded px-3 py-2 border-accent">
            Phase 1
          </button>
          <h2 className="text-[32px]">Claim The Reward</h2>
          <p className="text-userJourney">
            Once we agree on the plan, I cue my lofi playlist and dive into
            coding. From initial sketches to polished code, I keep you updated
            every step of the way.
          </p>
        </section>
      </div>
    </div>
  );
}
