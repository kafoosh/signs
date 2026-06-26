import { useState } from 'react'
import { Reorder } from 'framer-motion'
import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'
import { RANK_ITEMS } from '../data/content.js'

// CR8: FIVE blocks. Drag-to-reorder via Framer Motion's Reorder (keeps the dragged
// block under the finger + handles the variable-height last block), with up/down
// arrow buttons as a fallback. Items are unique strings, so they double as keys/values.
export default function Rank({ onAnswer }) {
  const [items, setItems] = useState(RANK_ITEMS)

  const move = (from, to) =>
    setItems((prev) => {
      if (to < 0 || to >= prev.length) return prev
      const next = prev.slice()
      const [m] = next.splice(from, 1)
      next.splice(to, 0, m)
      return next
    })

  const stop = (e) => e.stopPropagation()

  return (
    <section className="screen" id="rank">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 07</StaggerItem>
        <StaggerItem as="h1" className="q">
          Rank these<br />in order:
        </StaggerItem>
      </StaggerGroup>

      <div
        className="body"
        style={{ justifyContent: 'flex-start', paddingTop: 6, overflowY: 'auto' }}
      >
        <Reorder.Group axis="y" values={items} onReorder={setItems} as="div" id="rankList">
          {items.map((txt, i) => (
            <Reorder.Item
              key={txt}
              value={txt}
              as="div"
              className="rankblock"
              whileDrag={{
                scale: 1.04,
                rotate: -1.5,
                boxShadow: '0 12px 22px rgba(0,0,0,.4)',
                cursor: 'grabbing',
                zIndex: 5,
              }}
            >
              <span className="grip">⠿</span>
              <span className="rtxt">{txt}</span>
              <span className="arrs">
                <button
                  type="button"
                  aria-label="move up"
                  onPointerDown={stop}
                  onClick={(e) => {
                    stop(e)
                    if (i > 0) move(i, i - 1)
                  }}
                >
                  ▲
                </button>
                <button
                  type="button"
                  aria-label="move down"
                  onPointerDown={stop}
                  onClick={(e) => {
                    stop(e)
                    if (i < items.length - 1) move(i, i + 1)
                  }}
                >
                  ▼
                </button>
              </span>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <StaggerGroup className="foot" style={{ textAlign: 'right', marginTop: 8 }}>
        <StaggerItem>
          <button className="cta" type="button" onClick={onAnswer}>
            Continue ›
          </button>
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
