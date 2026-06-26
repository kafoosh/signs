import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'
import { RANGERS } from '../data/content.js'

// Decorative; 2-col list of colored-dot options.
export default function Ranger({ onAnswer }) {
  return (
    <section className="screen" id="ranger">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 04</StaggerItem>
        <StaggerItem as="h1" className="q">
          If you were a<br />Power Ranger?
        </StaggerItem>
      </StaggerGroup>

      <div className="body">
        <StaggerGroup className="grid2" id="rGrid">
          {RANGERS.map(([name, dot]) => (
            <StaggerItem
              as="button"
              key={name}
              className="opt"
              type="button"
              style={{ justifyContent: 'flex-start' }}
              onClick={onAnswer}
            >
              <span
                style={{
                  width: 26, height: 26, borderRadius: '50%', background: dot,
                  display: 'inline-block', boxShadow: 'inset 0 0 0 2px rgba(0,0,0,.18)',
                }}
              />
              {name}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
