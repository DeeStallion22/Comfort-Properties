import { motion } from "framer-motion";

export default function ScrollReveal({ children, direction = "up", delay = 0 }) {
  const variants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: .2, x: 50 },
    right: { opacity: 0, x: -50 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 2, delay }}
      viewport={{ once: true }} // animate only once per section
    >
      {children}
    </motion.div>
  );
}
