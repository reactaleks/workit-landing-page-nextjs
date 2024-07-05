import NavBar from "./NavBarComponent";
import Button from "./ButtonComponent";
import Image from "next/image";
import heroimage from "../public/image-hero.webp";

export default function HeroSection() {
  return (
    <div className="h-hero bg-dark-purple flex flex-col rounded-b-section-bottom ">
      <NavBar />
      <div className="flex flex-col h-full items-center justify-center">
        <div className="flex flex-col items-center h-hero-main w-hero-main justify-between">
          <h1 className="text-5xl text-ghost-white text-center font-fraunces">
            Data <span className="border-b-2 border-b-exucalyptus">tailored</span> to your needs
          </h1>
          <div>
            <Button btnStyling="h-hero-btn w-hero-btn bg-exucalyptus font-bold  " btnText="Learn more"/>
          </div>
        </div>

        
      </div>

      <div className="relative left-10">
        <Image src={heroimage} alt="hero image" className="w-hero-image  h-hero-image absolute -bottom-24" />
      </div>
    </div>
  );
}
