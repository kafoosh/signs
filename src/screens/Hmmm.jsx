import { useState } from 'react'
import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'

// A slider that lengthens the word "Hmmm...". Decorative.
export default function Hmmm({ onAnswer }) {
  const [v, setV] = useState(5)

  const ms = v === 0 ? 0 : Math.max(1, Math.round(v * 1.4))
  const word = 'H' + 'm'.repeat(Math.max(1, ms + 1))

  return (
    <section className="screen" id="hmmm">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 08</StaggerItem>
        <StaggerItem as="h1" className="q">
          Hmmm?
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="body" style={{ justifyContent: 'center', gap: 30 }}>
        <StaggerItem id="hmWord">{word}</StaggerItem>
        <StaggerItem
          as="input"
          type="range"
          id="hmSlide"
          min={0}
          max={10}
          step={1}
          value={v}
          aria-label="hmmm"
          onChange={(e) => setV(parseInt(e.target.value, 10))}
          style={{ width: '100%', accentColor: '#FCEE21', height: 30 }}
        />
      </StaggerGroup>

      <StaggerGroup className="foot" style={{ textAlign: 'right' }}>
        <StaggerItem>
          <button className="cta" type="button" onClick={onAnswer}>
            Continue ›
          </button>
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
