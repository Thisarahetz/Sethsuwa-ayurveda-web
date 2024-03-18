"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PageAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
