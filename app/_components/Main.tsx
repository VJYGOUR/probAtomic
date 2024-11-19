import Image from "next/image";
import laptop from "../images/laptop.png";
import solve from "../images/solve.png";
import section_input from "../images/section_input.png";
import background from "../images/Background.png";
import gamified from "../images/gamified.png";
import import_module from "../images/import_module.png";

function Main() {
  return (
    <section className="px-10 ">
      <div className="mt-12 flex flex-col gap-6  md:gap-8 md:grid md:grid-cols-[1fr_.8fr] md:grid-rows-2 ">
        <div className="relative   rounded-[1rem] overflow-hidden md:row-span-2">
          <Image
            src={laptop}
            alt="laptop"
            className="object-cover  w-full h-full "
          />
        </div>
        <div className="rounded-[1rem] relative overflow-hidden">
          <Image src={solve} alt="solve" className="object-cover w-full" />
        </div>
        <div className="rounded-[1rem] bg-secondary md:grid md:grid-cols-[1fr_.6fr_.6fr]">
          <div className="md:self-center">
            <p>use any</p>
            <h2>Tech Stack</h2>
          </div>
          <div className="md:grid md:grid-rows-[1fr_1fr_1fr_1fr]">
            <p>Reactjs</p>
            <p>expressjs</p>
            <p>typescript</p>
            <p></p>
          </div>
          <div className="md:grid md:grid-rows-[1fr_1fr_1fr_1fr]">
            <p></p>
            <p>expressjs</p>
            <p>typescript</p>
            <p>reactjs</p>
          </div>
        </div>
      </div>
      <div className=" mt-8 flex flex-col gap-6 md:grid md:grid-cols-[1.5fr_3fr] md:grid-rows-2 md:gap-6">
        <div className="relative bg-secondary rounded-[1rem]">
          <h2 className="absolute top-2 w-[90%] left-1/2  -translate-x-1/2 ">
            Craft a stand out resume that stands you apart.
          </h2>
          <Image src={background} alt="box" />
          <Image
            src={section_input}
            alt="vector"
            className="absolute bottom-[-5px] right-[-10px]"
          />
        </div>
        <div className=" rounded-[1rem] bg-secondary relative overflow-hidden md:row-span-2">
          <Image src={gamified} alt="gamified" />
          <Image
            src={import_module}
            alt="import_module"
            className="absolute top-0 right-0 sm:w-[24rem]  xl:w-[38rem]"
          />
          <section className="absolute  top-1/2  -translate-y-1/2 md:w-[60%] lg:w-[45%] 2xl:w-[60%] ">
            <p className="text-2xl">Immerse</p>
            <h2 className="  tracking-wide md:text-[32px] 2xl:text-[45px]">
              Gamified Experience that keeps you hooked.
            </h2>
          </section>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 bg-secondary rounded-[1rem]">
          <h2 className="text-[26px]">Partner with us ?</h2>
          <button className="bg-accent px-4 py-3 rounded-xl text-black font-semibold">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}

export default Main;
