import Image from "next/image";
import founderImage from "../public/image-founder.webp";
import bgpattern from "../public/bg-pattern-3.svg";

import Button from "./ButtonComponent";

export default function ActionComponent() {
  return (
    <div className="flex ">
      <div className="flex flex-col relative justify-center
       h-[603px] md:h-[526px] lg:h-[647.74px]
      w-[343px] md:w-[689px] lg:w-[1028px]
      md:items-end
      ">
        <div className=" flex justify-center absolute 
        -top-[20%] left-[10%] 
        md:-left-[0%] md:-top-[15%]
        lg:-top-[7%] lg:-left-[15%]
        "
        >
          <Image
            src={founderImage}            
            alt="Image of the company founder"
            className="
            h-[281px] md:h-[] lg:h-[477px]
            w-[281px] md:w-[] lg:w-[477px]
            "
          /> 
        </div>
    
        <div className="bg-dark-purple relative overflow-hidden text-ghost-white text-center flex flex-col justify-between
            h-[375px] md:h-[375px] lg:h-[413px]
            w-[343px] md:w-[514px] lg:w-[790px]
            p-8
            md:text-start md:p-12
            lg:p-14
        ">
          <div>
            <h3 className="font-semibold font-fraunces
            text-[32px] md:text-[48px] lg:text-[56px]
            ">
              Be the first to test
            </h3>
          </div>
          <div className="">
            <p className=" text-ghost-white font-manrope
            text-[16px] md:text-[18px] lg:text-[18px]
            ">
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </p>
          </div>
          <div className="">
            <Button
              btnText="Apply for access"
              btnType="primary"
              btnStyling="
              h-[55px] md:h-[] lg:h-[61px]
              w-[172px] md:w-[] lg:w-[190px]
              
              "
            />
          </div>
          
        </div>

        <div className="hidden md:flex">
            <Image
              src={bgpattern}
              alt="hero image"
              className="absolute  
              right-[4%] top-[65%]
              lg:top-[60%]
              "
            />
          </div>
      </div>
    </div>
  );
}
