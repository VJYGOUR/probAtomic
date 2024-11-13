import Button from "./Button";

function HeroSection() {
  return (
    <div className="px-3 text-center mt-12">
      <h1 className="leading-[40px] sm:leading-[75.6px]">
        Real <span className="text-accent">Problems</span>. Relevant
        <span className="text-accent"> Skills</span>
      </h1>
      <h1 className="leading-[40px] sm:leading-[75.6px]">
        Recursive <span className="text-accent">Opportunities</span>
      </h1>
      <p className="text-[1rem] text-balance max-w-[80%] mx-auto my-8 sm:text-[1.5rem] sm:max-w-[40rem]">
        Gain hands-on experience solving industry-standard problems and refine
        skills for greater opportunities
      </p>
      <Button />
    </div>
  );
}

export default HeroSection;
