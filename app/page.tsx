import HeroSection from "@/components/HeroComponent";
import PageSection from "@/components/PageSectionComponent";
import PageFeatures from "@/components/PageFeaturesComponent";
import ActionComponent from "@/components/ActionComponent";
import PageFooter from "@/components/FooterComponent";
import Image from "next/image";
import heroimage from "../public/image-hero.webp";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <PageSection sectionStyling="bg-ghost-white rounded-b-section-bottom pt-32 h-full pb-24  ">
          <div className="flex justify-center">
            <Image
              src={heroimage}
              alt="hero image"
              className="w-hero-image  h-hero-image md:w-hero-image-tablet md:h-hero-image-tablet absolute top-[400px] md:top-[400px]"
            />
          </div>
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
        </PageSection>
        <PageSection sectionStyling="bg-white pt-12">
          <ActionComponent />
        </PageSection>
      </main>
      <PageFooter />
    </div>
  );
}
