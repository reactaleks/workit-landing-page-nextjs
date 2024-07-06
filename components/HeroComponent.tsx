import Button from "./ButtonComponent";
import Image from "next/image";
import bgpatternone from "../public/bg-pattern-1.svg";
import bgpatterntwo from "../public/bg-pattern-2.svg";

export default function HeroSection() {
  return (
    <div className="overflow-hidden 
    h-[481.71px] 
    md:h-[540.24px] 
    lg:h-[730px]"
    >
      <div
        className=" bg-dark-purple flex flex-col rounded-b-section-bottom h-full justify-center drop-shadow-none 
        md:justify-start
        "
      >
        <div
          className="flex flex-col text-center mx-auto h-[195px] md:h-[215px] lg:h-[258px] 
        w-[343px] md:w-[573px] lg:w-[635px]
        "
        >
          <div
            className="flex flex-col
            
        "
        >
            <h1 className=" text-ghost-white text-center font-fraunces text-[50px] md:text-[60px] lg:text-[80px] 
            leading-tight tracking-tighter 
            ">
              Data
              <span className="border-b-2 border-b-exucalyptus">
                {" "}
                tailored{" "}
              </span>
              to your needs
            </h1>
            <div>
              <Button
                btnStyling="
                h-[55px] w-[133px] 
                lg:h-[61px]  lg:w-[161px]
                "
                btnType="primary"
                btnText="Learn more"
              />
            </div>
          </div>
          <div className="hidden md:flex">
            <Image
              src={bgpatternone}
              alt=""
              className=" absolute -left-[240px] top-[30px]"
            />
          </div>
          <div className="hidden md:flex ">
            <Image
              src={bgpatterntwo}
              alt=""
              className="absolute -right-[100px] top-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
