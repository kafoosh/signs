import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'
import { POTATO_ANSWERS } from '../data/content.js'
import { asset } from '../lib/asset.js'

// CR5: image + answers share a top-aligned, non-stretching body so the
// answers sit close under the image instead of pinned low.
export default function Potato({ onAnswer }) {
  return (
    <section className="screen" id="potato">
      <div className="head" />
      <StaggerGroup
        className="body"
        style={{ justifyContent: 'flex-start', paddingTop: 6, flex: '0 0 auto' }}
      >
        <StaggerItem
          as="img"
          id="potatoImg"
          alt="potato"
          src={asset('img/potato.png')}
        />
        <StaggerItem className="grid2" id="pGrid" style={{ marginTop: 18 }}>
          {POTATO_ANSWERS.map((t, i) => (
            <button
              key={t}
              className="opt"
              type="button"
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: i === 3 ? 14 : 18,
                gridColumn: i === 3 ? '1 / -1' : undefined,
              }}
              onClick={onAnswer}
            >
              {t}
            </button>
          ))}
        </StaggerItem>
      </StaggerGroup>
      <div className="foot" />
    </section>
  )
}
