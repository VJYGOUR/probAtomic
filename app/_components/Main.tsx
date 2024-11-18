import Image from "next/image";
import laptop from "../images/laptop.png";
import solve from "../images/solve.png";
import hbox from "../images/h-box.png";

function Main() {
  return (
    <section className="px-10">
      <div className="mt-12 grid grid-cols-[1fr_.8fr] grid-rows-2 ">
        <div className="relative  row-span-2 rounded-[1rem] overflow-hidden">
          <Image src={laptop} alt="laptop" className="object-cover  w-full " />
        </div>
        <div className="rounded-[1rem] relative overflow-hidden">
          <Image src={solve} alt="solve" className="object-cover w-full" />
        </div>
        <div className="rounded-[1rem] grid grid-cols-[1fr_.6fr_.6fr]">
          <div className="self-center">
            <p>use any</p>
            <h2>Tech Stack</h2>
          </div>
          <div className="grid grid-rows-[1fr_1fr_1fr_1fr]">
            <p>Reactjs</p>
            <p>expressjs</p>
            <p>typescript</p>
            <p></p>
          </div>
          <div className="grid grid-rows-[1fr_1fr_1fr_1fr]">
            <p></p>
            <p>expressjs</p>
            <p>typescript</p>
            <p>reactjs</p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">ggg</div>
        <div>zzz</div>
        <div className="col-start-2 col-end-4 row-start-3 row-end-5">iiii</div>
      </div>
    </section>
  );
}

export default Main;
