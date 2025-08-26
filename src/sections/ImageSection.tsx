import React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const ImageSection: React.FC<SectionProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="relative w-full  bg-gradient-smart-dark h-screen flex items-center justify-center text-center overflow-hidden">


      {/* Content */}
      <div className="relative z-20 max-w-4xl px-6 space-y-6">
        <header>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            {title}
          </h2>
        </header>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <button
          onClick={onButtonClick}
          className="mt-8 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default ImageSection;
