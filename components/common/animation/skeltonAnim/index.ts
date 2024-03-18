import { Variants } from "framer-motion";

const skeltonAnime: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};

export default skeltonAnime;
