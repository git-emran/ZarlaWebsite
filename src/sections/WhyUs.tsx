import { cn } from "@/lib/utils";
import { features } from "@/mockdata/whyUsData";
import { SectionHeader } from "@/components/ui/section-header";

export function WhyUs() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="relative z-10 py-10 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <SectionHeader
        title="Why Choose Us"
        subtitle="Discover the features that make our platform unique"
        center
      />

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}

      </div>

    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const isTopRow = index < 4;

  return (
    <article
      className={cn(
        "flex flex-col relative group/feature py-10 lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l",
        isTopRow && "lg:border-b"
      )}
    >
      {/* Hover gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 h-full w-full pointer-events-none transition-opacity duration-200 opacity-0",
          isTopRow
            ? "group-hover/feature:opacity-100 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent"
            : "group-hover/feature:opacity-100 bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent"
        )}
      />

      {/* Icon */}
      <header className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </header>

      {/* Title */}
      <h3 className="relative z-10 mb-2 px-10 text-lg font-bold">
        <span className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 group-hover/feature:h-8 transition-all duration-200 origin-center" />
        <span className="inline-block transition-transform duration-200 group-hover/feature:translate-x-2 text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </h3>

      {/* Description */}
      <p className="relative z-10 px-10 max-w-xs text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </article>
  );
};

