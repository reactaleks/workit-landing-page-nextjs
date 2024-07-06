import NavBar from "./NavBarComponent";
import Button from "./ButtonComponent";
import Image from "next/image";
import heroimage from "../public/image-hero.webp";
import bgpatternone from "../public/bg-pattern-1.svg";
import bgpatterntwo from "../public/bg-pattern-2.svg";

export default function HeroSection() {
  return (
    <div className="bg-ghost-white overflow-hidden">
      <div className="h-hero md:h-hero-tablet bg-dark-purple flex flex-col rounded-b-section-bottom drop-shadow-xl">
        <NavBar />
        <div className="flex flex-col h-full items-center justify-start pt-12">
          <div className="flex flex-col items-center h-hero-main w-hero-main justify-between">
            <h1 className="text-5xl text-ghost-white text-center font-fraunces">
              Data
              <span className="border-b-2 border-b-exucalyptus">tailored</span>
              to your needs
            </h1>
            <div>
              <Button
                btnStyling="h-hero-btn w-hero-btn"
                btnType="primary"
                btnText="Learn more"
              />
            </div>
          </div>
          <div className="hidden md:flex">
            <Image
              src={bgpatternone}
              alt="hero image"
              className=" absolute -left-[240px] top-[30px]"
            />
          </div>
          <div className="hidden md:flex ">
            <Image
              src={bgpatterntwo}
              alt="hero image"
              className="absolute  -right-[100px] top-[250px]"
            />
          </div>
        </div>

        
      </div>
    </div>
  );
}
