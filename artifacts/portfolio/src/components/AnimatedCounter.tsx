import { useEffect, useRef } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15
  });
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toLocaleString() + suffix
  );
  
  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);
  
  return <motion.span ref={ref}>{display}</motion.span>;
}
