import HeroSection from "@/components/HeroComponent";

import PageSection from "@/components/PageSectionComponent";
import PageFeatures from "@/components/PageFeaturesComponent";
import ActionComponent from "@/components/ActionComponent";
import PageFooter from "@/components/FooterComponent";
import Image from "next/image";
import heroimage from "../public/image-hero.webp";
import NavBar from "@/components/NavBarComponent";



export default function Home() {
  return (
    <div>
      <NavBar />
        

      <main className="">
        <HeroSection />

        <PageSection sectionStyling="bg-ghost-white justify-center rounded-b-section-bottom 
          h-[987px] md:h-[786px] lg:h-[741px]
          md:justify-center
     
        ">
          <div className="flex justify-center ">
            <Image
              src={heroimage}
              alt="hero image"
              className=" 
              absolute 
              top-[375px] 
              md:top-[400px]
              lg:top-[475px]
              h-[184px] md:h-[296px] lg:h-[441px] 
              w-[320px] md:w-[514px] lg:w-[767px]
              
              "
            />
          </div>
          <div className="
          flex flex-col 
          lg:flex-row 
          lg:p-8 lg:px-32
          ">
            <PageFeatures
              featurenumber={1}
              featuretitle="Actionable Insisghts"
              featuredescription="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
            />
            <PageFeatures
              featurenumber={2}
              featuretitle="Data-driven Decisions"
              featuredescription="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
            />
            <PageFeatures
              featurenumber={3}
              featuretitle="Always Affordable"
              featuredescription="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
            />
          </div>
        </PageSection>
        <PageSection sectionStyling="bg-white items-center justify-end h-[920.73px] md:h-[960px]
        md:justify-center
        ">
          <ActionComponent />
        </PageSection>
      </main>
      <PageFooter />
    </div>
  );
}
