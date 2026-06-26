import { useState } from 'react'
import { StaggerGroup, StaggerItem } from '../components/Stagger.jsx'
import { asset } from '../lib/asset.js'

// CR2: the 3x3 grid is ONE reassembled image. Each cell shows a slice via
// background-size:300% 300% + per-cell background-position. Verify accepts any.
export default function Captcha({ onAnswer }) {
  const [sel, setSel] = useState(() => Array(9).fill(false))
  const IMG = asset('img/captcha.png')

  const toggle = (i) =>
    setSel((prev) => {
      const next = prev.slice()
      next[i] = !next[i]
      return next
    })

  return (
    <section className="screen" id="captcha">
      <StaggerGroup className="head">
        <StaggerItem className="label">verify you're human</StaggerItem>
        <StaggerItem as="h1" className="q" style={{ fontSize: 'clamp(24px,7vw,34px)' }}>
          Select all squares with traffic lights
        </StaggerItem>
      </StaggerGroup>

      <div className="body">
        <StaggerGroup id="capGrid">
          {Array.from({ length: 9 }, (_, i) => {
            const col = i % 3
            const row = Math.floor(i / 3)
            return (
              <StaggerItem
                key={i}
                className={'capcell' + (sel[i] ? ' sel' : '')}
                onClick={() => toggle(i)}
              >
                <div
                  className="scene"
                  style={{
                    backgroundImage: `url(${IMG})`,
                    backgroundPosition: `${col * 50}% ${row * 50}%`,
                  }}
                />
                <span className="check">✓</span>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>

      <StaggerGroup className="foot" style={{ textAlign: 'right', marginTop: 12 }}>
        <StaggerItem>
          <button className="cta" type="button" onClick={onAnswer}>
            Verify
          </button>
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
