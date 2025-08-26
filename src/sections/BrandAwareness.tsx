'use client'

import ImageSection from "./ImageSection";

export default function BrandAwareness() {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <ImageSection
        title="Transform Your Vehicle with Our Stunning Detailing Services"
        subtitle="At Sydney Pro Detailers, we take pride in bringing out the best in your vehicle with our exceptional car detailing services."
        onButtonClick={handleButtonClick}
        buttonText="Get Started Today"
      />
    </div>
  );
}
