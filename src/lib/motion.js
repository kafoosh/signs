// Shared Framer Motion variants. Animate ONLY transform/opacity.

export const SPRING = { type: 'spring', stiffness: 260, damping: 20 }

// Springy overshoot entrance for a single element.
export const popIn = {
  hidden: { opacity: 0, y: 20, scale: 0.9, rotate: -2 },
  show: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: SPRING },
}

// Container that staggers its children (label -> question -> options).
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
}

// Snappy screen transition (vertical push + scale, < 400ms).
export const screenVariants = {
  initial: { opacity: 0, y: 34, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: [0.18, 1.25, 0.4, 1] },
  },
  exit: {
    opacity: 0,
    y: -26,
    scale: 1.03,
    transition: { duration: 0.26, ease: 'easeIn' },
  },
}
