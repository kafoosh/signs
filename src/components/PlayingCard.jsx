import { VALUES, VALNAMES, SUITS } from '../data/content.js'

// The hero playing card. hearts/diamonds RED, clubs/spades dark.
export default function PlayingCard({ captured }) {
  const suit = SUITS[captured.suitIdx]
  const valLabel = VALUES[captured.valueIdx]
  const colorCls = suit.red ? 'red' : 'dark'

  return (
    <div className="pcard" key={captured.valueIdx + '-' + captured.suitIdx}>
      <div className="corner tl">
        <div className={'v ' + colorCls}>{valLabel}</div>
        <div className={'s ' + colorCls}>{suit.sym}</div>
      </div>
      <div className={'pip ' + colorCls}>{suit.sym}</div>
      <div className="corner br">
        <div className={'v ' + colorCls}>{valLabel}</div>
        <div className={'s ' + colorCls}>{suit.sym}</div>
      </div>
    </div>
  )
}

export function cardCaption(captured) {
  return (
    'You picked the ' +
    VALNAMES[captured.valueIdx] +
    ' of ' +
    SUITS[captured.suitIdx].k +
    '.'
  )
}
