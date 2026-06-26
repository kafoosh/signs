import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'

const GENDERS = ['Male', 'Female', 'Other']

// Each gender card is split into 4 invisible quarters (CHaSeD suit 0..3).
export default function Gender({ onCapture }) {
  const tapSuit = (s) => onCapture(s)

  return (
    <section className="screen" id="gender">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 01</StaggerItem>
        <StaggerItem as="h1" className="q">
          What's your<br />gender?
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="body" id="gWrap">
        {GENDERS.map((g) => (
          <StaggerItem as="button" key={g} className="gcard" aria-label={g} type="button">
            <span className="glabel">{g}</span>
            {[0, 1, 2, 3].map((q) => (
              <span
                key={q}
                className="gquad"
                onClick={() => tapSuit(q)}
              />
            ))}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
