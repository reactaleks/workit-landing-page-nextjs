import HeroSection from "@/components/HeroComponent";
import PageSection from "@/components/PageSectionComponent";
import PageFeatures from "@/components/PageFeaturesComponent";
import ActionComponent from "@/components/ActionComponent";
import PageFooter from "@/components/FooterComponent";
export default function Home() {
  return (
    <div className="container">
      <main>
        <HeroSection/>
        <PageSection sectionStyling="bg-ghost-white rounded-b-section-bottom pt-32 h-full pb-24  ">
          <PageFeatures featurenumber={1} featuretitle="Actionable insisghts" featuredescription="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."/>
          <PageFeatures featurenumber={2} featuretitle="Data-driven decisions" featuredescription="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."/>
          <PageFeatures featurenumber={3} featuretitle="Always affordable" featuredescription="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."/>

        </PageSection>
        <PageSection sectionStyling="bg-white pt-12">
          <ActionComponent/>
        </PageSection>
      </main>
      <PageFooter/>
    </div>
    
  );
}
