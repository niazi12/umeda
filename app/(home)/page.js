import { CallToAction } from "@/components/landing/CallToAction";
import ClientsSection from "@/components/landing/ClientsSection";
import { ClientTestimonials } from "@/components/landing/ClientTestimonials";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProductSection } from "@/components/landing/products/product-section";
import { ServicesOverview } from "@/components/landing/ServicesOverview";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <HeroSection />
        <ServicesOverview />

        <ProductSection
        />
        <ClientsSection/>
        {/* <WhyChooseUs />
        <ClientTestimonials />
        <CallToAction /> */}
      </div>
    </div>
  );
}
