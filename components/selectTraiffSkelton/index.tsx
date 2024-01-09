import React from "react";
import CommonSkelton from "../commonSkelton";
import { motion } from "framer-motion";
import skeltonAnime from "../common/animation/skeltonAnim/index";
export default function SelectTraiffSkelton() {
  return (
    <motion.div
      key={`skeleton-div`}
      variants={skeltonAnime}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8"
    >
      {[1, 2, 3].map((item, index) => {
        return (
          <div key={"skelton" + index}>
            <CommonSkelton width={225} height={240} />
            <div className="mt-4 font-medium">
              <CommonSkelton width={100} height={20} />
            </div>
            <p className="mt-2 font-medium">
              <CommonSkelton width={60} height={20} />
            </p>
          </div>
        );
      })}
    </motion.div>
  );
}
