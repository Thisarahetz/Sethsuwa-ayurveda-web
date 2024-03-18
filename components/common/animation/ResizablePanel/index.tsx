import React from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const duration = 0.5;
const padding = 20;
export default function ResizablePanel({ children }: { children: React.ReactNode }) {
  let [ref, { height }] = useMeasure();
  return (
    // <MotionConfig transition={{ duration }}>
    <AnimatePresence initial={false}>
      <motion.div
        animate={{ height: height + padding * 2 }}
        style={{
          overflow: "hidden",
        }}
      >
        <motion.div
          // key={height}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: duration / 2,
              delay: duration / 2,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: duration / 2,
            },
          }}
        >
          <div ref={ref} className={`${height ? "absolute" : "relative"}`}>
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    // </MotionConfig>
  );
}
