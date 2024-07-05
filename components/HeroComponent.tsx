import NavBar from "./NavBarComponent";
import Button from "./ButtonComponent";
import Image from "next/image";
import heroimage from "../public/image-hero.webp";

export default function HeroSection() {
  return (
    <div>
      <NavBar />

      <div>
        <h1 className="text-5xl">
          Data tailored to your needs
        </h1>
      </div>

      <div>
        <Button />
      </div>

      <div>
        <Image src={heroimage} alt="hero image" height={250} width={250} />
      </div>
    </div>
  );
}
