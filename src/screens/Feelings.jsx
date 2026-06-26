import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'

// CR4: Continue sits directly under the field (top-aligned body). Auto-focus.
export default function Feelings({ onAnswer }) {
  const inputRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        inputRef.current?.focus({ preventScroll: true })
      } catch (_) {
        /* ignore */
      }
    }, reduce ? 0 : 500)
    return () => clearTimeout(t)
  }, [reduce])

  return (
    <section className="screen" id="feelings">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 05</StaggerItem>
        <StaggerItem as="h1" className="q">
          How do you<br />feel about<br />things?
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup
        className="body"
        style={{ justifyContent: 'flex-start', paddingTop: 8 }}
      >
        <StaggerItem
          as="input"
          ref={inputRef}
          className="field"
          id="feelInput"
          type="text"
          autoComplete="off"
          aria-label="your answer"
        />
        <StaggerItem style={{ textAlign: 'right', marginTop: 14 }}>
          <button className="cta" type="button" onClick={onAnswer}>
            Continue ›
          </button>
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
