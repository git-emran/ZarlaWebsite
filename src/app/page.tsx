
import { testimonials } from "@/mockdata/testimonialsData";
import BrandAwareness from "@/sections/BrandAwareness";
import ContactUsSection from "@/sections/Contact";
import Hero from "@/sections/Hero";
import TestimonialSection from "@/sections/Testmonials";
import { WhyUs } from "@/sections/WhyUs";



export default function Home() {

  return (
    <>
      <section>

        <Hero />
        <BrandAwareness />
        <WhyUs />
        <TestimonialSection testimonials={testimonials} />
        <ContactUsSection />
      </section>
    </>
  );
}
