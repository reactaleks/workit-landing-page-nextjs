import HeroSection from "@/components/HeroComponent";
import PageSection from "@/components/PageSectionComponent";
import PageFeatures from "@/components/PageFeaturesComponent";
export default function Home() {
  return (
    <div className="container">
      <main>
        <HeroSection/>
        <PageSection>
          <PageFeatures featurenumber={1} featuretitle="Actionable insisghts" featuredescription="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."/>
          <PageFeatures featurenumber={2} featuretitle="Data-driven decisions" featuredescription="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."/>
          <PageFeatures featurenumber={3} featuretitle="Always affordable" featuredescription="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."/>

        </PageSection>
      </main>
    </div>
    
  );
}
