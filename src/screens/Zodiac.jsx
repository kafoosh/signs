import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'
import { ZODIAC } from '../data/content.js'

// Picker tiles keep glyphs. Tap records {name, glyph}; reveal uses the NAME.
export default function Zodiac({ onChoose }) {
  return (
    <section className="screen" id="zodiac">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 02</StaggerItem>
        <StaggerItem as="h1" className="q">
          What's your<br />star sign?
        </StaggerItem>
      </StaggerGroup>

      <div className="body">
        <StaggerGroup className="grid3" id="zGrid">
          {ZODIAC.map(([name, glyph]) => (
            <StaggerItem
              as="button"
              key={name}
              className="tile"
              type="button"
              onClick={() => onChoose({ name, glyph })}
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
