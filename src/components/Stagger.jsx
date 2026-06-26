import { motion } from 'framer-motion'
import { stagger, popIn } from '../lib/motion.js'

// Container that staggers direct children with the springy pop-in.
export function StaggerGroup({ children, className, style, as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      variants={stagger}
      initial="hidden"
      animate="show"
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

// A single staggered child.
export function StaggerItem({ children, className, style, as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag className={className} style={style} variants={popIn} {...rest}>
      {children}
    </MotionTag>
  )
}
