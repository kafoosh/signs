import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'

// Asks the spectator's name; remembered and woven into the reading intro
// ("Hello [Name] the [Sign].").
export default function Name({ onSubmit }) {
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

  const submit = () => onSubmit((inputRef.current?.value || '').trim())

  return (
    <section className="screen" id="name">
      <StaggerGroup className="head">
        <StaggerItem className="label">the basics</StaggerItem>
        <StaggerItem as="h1" className="q">
          What's your<br />name?
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
          id="nameInput"
          type="text"
          placeholder="Type your name"
          autoComplete="off"
          autoCapitalize="words"
          aria-label="your name"
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit()
          }}
        />
        <StaggerItem style={{ textAlign: 'right', marginTop: 14 }}>
          <button className="cta" type="button" onClick={submit}>
            Continue ›
          </button>
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
