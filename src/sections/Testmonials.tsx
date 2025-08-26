
import React from "react";

interface Testimonial {
  id: number | string;
  name: string;
  role?: string;
  quote: string;
  image: string; // avatar URL
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  return (
    <section
      className="relative py-20 bg-gray-50"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <header className="mb-12 text-center">
          <h2
            id="testimonial-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
          >
            What Our Clients Say
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from people who trusted us with their vehicles.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-xl transition"
            >
              <figure className="flex-1 flex flex-col justify-between">
                <blockquote className="text-gray-700 leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-6 flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={t.image}
                    alt={`${t.name} avatar`}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    {t.role && (
                      <p className="text-sm text-gray-500">{t.role}</p>
                    )}
                  </div>
                </footer>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
