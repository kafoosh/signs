import { forwardRef } from 'react'
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

// A single staggered child. forwardRef so callers can grab the DOM node
// (e.g. an <input> via `as="input"` + ref) — needed to read/focus the name field.
export const StaggerItem = forwardRef(function StaggerItem(
  { children, className, style, as = 'div', ...rest },
  ref,
) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag ref={ref} className={className} style={style} variants={popIn} {...rest}>
      {children}
    </MotionTag>
  )
})
