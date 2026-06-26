import { useRef, useState } from 'react'
import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'
import { RANK_ITEMS } from '../data/content.js'

// CR8: FIVE blocks. Pointer-drag reorder (with reflow) + up/down arrow fallback.
export default function Rank({ onAnswer }) {
  const [items, setItems] = useState(RANK_ITEMS)
  const listRef = useRef(null)

  // live drag state in a ref (no re-render churn during a drag)
  const drag = useRef({
    el: null,
    pointerId: null,
    startY: 0,
    startIdx: 0,
    curIdx: 0,
  })

  const move = (from, to) => {
    setItems((prev) => {
      const next = prev.slice()
      const [moved] = next.splice(from, 1)
      next.splice(to, 0, moved)
      return next
    })
  }

  const onPointerDown = (e, idx, rowEl) => {
    if (e.target.closest('button')) return
    drag.current = {
      el: rowEl,
      pointerId: e.pointerId,
      startY: e.clientY,
      startIdx: idx,
      curIdx: idx,
    }
    rowEl.classList.add('drag')
    try {
      rowEl.setPointerCapture(e.pointerId)
    } catch (_) {
      /* ignore */
    }
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d.el) return
    const dy = e.clientY - d.startY
    d.el.style.transform =
      'translateY(' + dy + 'px) scale(1.04) rotate(-1.5deg)'
    const rowH = d.el.offsetHeight + 9 // block height + 9px margin
    const newIdx = Math.max(
      0,
      Math.min(items.length - 1, d.startIdx + Math.round(dy / rowH)),
    )
    if (newIdx !== d.curIdx) {
      move(d.startIdx, newIdx)
      // after reflow, the dragged element keeps following the finger; reset baseline
      d.el.style.transform = ''
      d.startIdx = newIdx
      d.curIdx = newIdx
      d.startY = e.clientY
    }
  }

  const endDrag = () => {
    const d = drag.current
    if (d.el) {
      d.el.classList.remove('drag')
      d.el.style.transform = ''
    }
    drag.current = { el: null, pointerId: null, startY: 0, startIdx: 0, curIdx: 0 }
  }

  return (
    <section className="screen" id="rank">
      <StaggerGroup className="head">
        <StaggerItem className="label">question 07</StaggerItem>
        <StaggerItem as="h1" className="q">
          Rank these<br />in order:
        </StaggerItem>
      </StaggerGroup>

      <StaggerGroup
        className="body"
        style={{ justifyContent: 'flex-start', paddingTop: 6, overflowY: 'auto' }}
      >
        <StaggerItem>
          <div
            id="rankList"
            ref={listRef}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            {items.map((txt, i) => (
              <div
                key={txt}
                className="rankblock"
                onPointerDown={(e) => onPointerDown(e, i, e.currentTarget)}
              >
                <span className="grip">⠿</span>
                <span className="rtxt">{txt}</span>
                <span className="arrs">
                  <button
                    type="button"
                    aria-label="move up"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (i > 0) move(i, i - 1)
                    }}
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    aria-label="move down"
                    onClick={(e) => {
                      e.stopPropagation()
                      if (i < items.length - 1) move(i, i + 1)
                    }}
                  >
                    ▼
                  </button>
                </span>
              </div>
            ))}
          </div>
        </StaggerItem>
      </StaggerGroup>

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
