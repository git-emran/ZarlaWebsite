'use client'
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

/**
 * HeroCarCare
 * A polished, accessible, and responsive hero section that mirrors the provided design.
 * - TailwindCSS + TypeScript + React + Framer Motion
 * - Semantic HTML tags
 * - Optimized for readability and reuse
 */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 }
  }
};

const Hero: FC = () => {
  return (
    <main
      role="main"
      className="relative min-h-screen w-full overflow-hidden text-neutral-900"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-sm" />
      {/* Max-width wrapper */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:pt-20 lg:px-8">
        {/* Giant headline */}
        <header className="relative">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-extrabold leading-[0.9] tracking-normal text-center text-white"
            style={{ fontSize: "clamp(48px, 10vw, 90px)" }}
          >
            Expert Car Detailing Services in <span className="text-lime-200">Sydney.</span>
          </motion.h1>
        </header>

        {/* Content grid */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 items-stretch gap-8 md:mt-14 md:grid-cols-2"
          aria-label="Overview"
        >
          {/* Copy card */}
          <motion.article
            variants={fadeUp}
            className="rounded-[28px] border border-black/5 bg-[#E3FFC2] p-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
          >
            <p className="max-w-prose text-lg leading-8 text-neutral-800">At Sydney Pro Detailers, we specialize in transforming your vehicle into a pristine masterpiece. Our expert car detailing services cater to all makes and models, ensuring that your car receives the attentive care it deserves.Our cost-effective packages go well beyond a basic wash, pampering your vehicle with interior and exterior detailing that leaves it looking and feeling brand new.</p>

            <div className="mt-8">
              <motion.a
                variants={scaleIn}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
              >
                Explore More
              </motion.a>
            </div>
          </motion.article>

          {/* Hero image */}
          <motion.figure
            variants={scaleIn}
            className="relative overflow-hidden rounded-[28px] bg-neutral-200 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)]"
          >
            <Image
              src="/assets/hero-car.jpg"
              alt="Sleek car in a sunlit detailing studio"
              className="h-full w-full object-cover"
              height="500"
              width="500"
            />
            <figcaption className="sr-only">A modern electric car inside a bright studio, representing premium detailing.</figcaption>
          </motion.figure>
        </motion.section>
      </div>

      {/* Soft radial vignette for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(80%_60%_at_60%_10%,rgba(0,0,0,0.08),transparent)]"
      />
    </main>
  );
};

export default Hero;

