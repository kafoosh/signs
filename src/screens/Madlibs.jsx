import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'

// Three inline fields. Coral Continue. Decorative.
export default function Madlibs({ onAnswer }) {
  return (
    <section className="screen" id="madlibs">
      <StaggerGroup className="head">
        <StaggerItem
          as="h1"
          className="q"
          style={{ fontSize: 'clamp(26px,7.5vw,38px)', lineHeight: 1.06 }}
        >
          When I am at{' '}
          <input className="field inlinef" placeholder="…" aria-label="place" />,
          I like to{' '}
          <input className="field inlinef" placeholder="…" aria-label="activity" />{' '}
          with{' '}
          <input className="field inlinef" placeholder="…" aria-label="who" />.
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="foot" style={{ textAlign: 'right', marginTop: 14 }}>
        <StaggerItem>
          <button className="cta coral" type="button" onClick={onAnswer}>
            Continue ›
          </button>
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
