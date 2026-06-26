import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'

// Decorative Yes/No. Stamp "okay...".
export default function Worm({ onAnswer }) {
  return (
    <section className="screen" id="worm">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 09</StaggerItem>
        <StaggerItem as="h1" className="q">
          If I were a worm,<br />would you still<br />love me?
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup className="body" style={{ gap: 14, justifyContent: 'center' }}>
        <StaggerItem
          as="button"
          className="opt"
          type="button"
          style={{ fontSize: 22, justifyContent: 'center' }}
          onClick={onAnswer}
        >
          <span className="em">🪱</span>Yes
        </StaggerItem>
        <StaggerItem
          as="button"
          className="opt"
          type="button"
          style={{ fontSize: 22, justifyContent: 'center' }}
          onClick={onAnswer}
        >
          No
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
