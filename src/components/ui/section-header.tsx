"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  titleAnimation?: object;
  subtitleAnimation?: object;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  subtitle,
  center = false,
  className = "",
  titleAnimation,
  subtitleAnimation,
}) => {
  return (
    <div className={`mb-8 ${center ? "text-center" : "text-left"} ${className}`}>
      <motion.h2
        className="text-6xl font-bold text-neutral-700 dark:text-black mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        {...titleAnimation}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-neutral-700 dark:text-black"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          {...subtitleAnimation}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

