import Image from "next/image";
import founderImage from "../public/image-founder.webp";
import bgpattern from "../public/bg-pattern-3.svg";

import Button from "./ButtonComponent";

export default function ActionComponent() {
  return (
    <div className="pt-[40%] md:pt-[20%] w-call-to-action-container h-call-to-action-container mx-auto md:w-call-to-action-container-tablet md:h-call-to-action-container-tablet">
      <div className="flex flex-col relative">
        <div className=" h-64 flex  justify-center absolute -top-[60%] left-[10%] md:-left-[3%] md:-top-[150px]  ">
          <Image
            src={founderImage}
            height={250}
            width={250}
            alt="Image of the company founder"
            className="w-call-to-action-img h-call-to-action-img"
          />
        </div>

        <div className="bg-dark-purple relative px-6 pb-8 overflow-hidden text-ghost-white text-center w-call-to-action h-call-to-action mx-auto md:mr-5 flex flex-col justify-center md:w-call-to-action-tablet md:h-call-to-action-tablet md:text-start md:px-14">
          <div>
            <h3 className="text-feature-heading font-semibold font-fraunces mt-8 md:text-action-heading-tablet">
              Be the first to test
            </h3>
          </div>
          <div className="mt-5">
            <p className="text-feature-description text-ghost-white font-manrope leading-7">
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </p>
          </div>
          <div className="mt-8">
            <Button
              btnText="Apply for access"
              btnType="primary"
              btnStyling="h-call-to-action-btn w-call-to-action-btn"
            />
          </div>
          
        </div>

        <div className="hidden md:flex">
            <Image
              src={bgpattern}
              alt="hero image"
              className="absolute  right-[4%] top-[75%]"
            />
          </div>
      </div>
    </div>
  );
}
