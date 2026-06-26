import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'
import { ANIMALS } from '../data/content.js'

// Decorative only; advances with stamp "很好!".
export default function Chinese({ onAnswer }) {
  return (
    <section className="screen" id="chinese">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 03</StaggerItem>
        <StaggerItem as="h1" className="q">
          Chinese<br />zodiac?
        </StaggerItem>
      </StaggerGroup>

      <div className="body">
        <StaggerGroup className="grid3" id="cGrid">
          {ANIMALS.map(([name, glyph]) => (
            <StaggerItem
              as="button"
              key={name}
              className="tile"
              type="button"
              onClick={onAnswer}
            >
              <span className="gl">{glyph}</span>
              <span className="nm">{name}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
