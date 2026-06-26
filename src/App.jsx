import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { screenVariants } from './lib/motion.js'

import Backdrop from './components/Backdrop.jsx'
import ResponseStamp from './components/ResponseStamp.jsx'
import InfoModal from './components/InfoModal.jsx'
import CheatSheet from './components/CheatSheet.jsx'

import Welcome from './screens/Welcome.jsx'
import Gender from './screens/Gender.jsx'
import Zodiac from './screens/Zodiac.jsx'
import Chinese from './screens/Chinese.jsx'
import Ranger from './screens/Ranger.jsx'
import Feelings from './screens/Feelings.jsx'
import Madlibs from './screens/Madlibs.jsx'
import Potato from './screens/Potato.jsx'
import Rank from './screens/Rank.jsx'
import Captcha from './screens/Captcha.jsx'
import Hmmm from './screens/Hmmm.jsx'
import Worm from './screens/Worm.jsx'
import Calculating from './screens/Calculating.jsx'
import Reveal from './screens/Reveal.jsx'

// Screen indices 0..13
const SCREENS = [
  'welcome', 'gender', 'zodiac', 'chinese', 'ranger', 'feelings',
  'madlibs', 'potato', 'rank', 'captcha', 'hmmm', 'worm', 'calc', 'reveal',
]

export default function App() {
  const [idx, setIdx] = useState(0)

  // The secret: default = Seven of Spades (centre taps still yield a playable card).
  const [captured, setCaptured] = useState({ valueIdx: 6, suitIdx: 2 })
  const [chosenSign, setChosenSign] = useState({ name: 'Aries', glyph: '♈' })

  const [stamp, setStamp] = useState(null)
  const [infoOpen, setInfoOpen] = useState(false)
  const [cheatOpen, setCheatOpen] = useState(false)

  const stampTimer = useRef(null)
  const busy = useRef(false)

  // Fire the slap-in stamp, then optionally advance to the next screen.
  const answer = useCallback((stampTxt, nextIdx) => {
    if (busy.current) return
    busy.current = true
    setStamp(stampTxt)
    clearTimeout(stampTimer.current)
    stampTimer.current = setTimeout(() => {
      setStamp(null)
      if (nextIdx != null) setIdx(nextIdx)
      busy.current = false
    }, 650)
  }, [])

  // --- secret capture ---
  const captureValue = (v) => {
    setCaptured((c) => ({ ...c, valueIdx: v }))
    answer("LET'S GO!", 1)
  }
  const captureSuit = (s) => {
    setCaptured((c) => ({ ...c, suitIdx: s }))
    answer('OK!', 2)
  }
  const chooseSign = (sign) => {
    setChosenSign(sign)
    answer('Great!', 3)
  }

  // --- triple-tap credit -> cheat-sheet ---
  const tapCount = useRef(0)
  const tapTimer = useRef(null)
  const onCreditTap = (e) => {
    e.stopPropagation()
    tapCount.current += 1
    clearTimeout(tapTimer.current)
    tapTimer.current = setTimeout(() => {
      tapCount.current = 0
    }, 600)
    if (tapCount.current >= 3) {
      tapCount.current = 0
      setCheatOpen(true)
    }
  }

  const id = SCREENS[idx]

  const renderScreen = () => {
    switch (id) {
      case 'welcome':
        return <Welcome onCapture={captureValue} />
      case 'gender':
        return <Gender onCapture={captureSuit} />
      case 'zodiac':
        return <Zodiac onChoose={chooseSign} />
      case 'chinese':
        return <Chinese onAnswer={() => answer('很好!', 4)} />
      case 'ranger':
        return <Ranger onAnswer={() => answer('Strong Choice!', 5)} />
      case 'feelings':
        return <Feelings onAnswer={() => answer('Noted.', 6)} />
      case 'madlibs':
        return <Madlibs onAnswer={() => answer('Insightful!', 7)} />
      case 'potato':
        return <Potato onAnswer={() => answer('Interesting…', 8)} />
      case 'rank':
        return <Rank onAnswer={() => answer('Bold ranking!', 9)} />
      case 'captcha':
        return <Captcha onAnswer={() => answer('Are you sure...?', 10)} />
      case 'hmmm':
        return <Hmmm onAnswer={() => answer('Hmmmm.', 11)} />
      case 'worm':
        return <Worm onAnswer={() => answer('okay...', 12)} />
      case 'calc':
        return <Calculating onDone={() => setIdx(13)} />
      case 'reveal':
        return <Reveal captured={captured} signName={chosenSign.name} />
      default:
        return null
    }
  }

  return (
    <div id="wrap">
      <div id="app">
        <Backdrop />

        <button id="infoBtn" aria-label="About" onClick={() => setInfoOpen(true)}>
          i
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={id}
            style={{ position: 'absolute', inset: 0, zIndex: 2 }}
            variants={screenVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>

        <ResponseStamp text={stamp} />

        <div className="credit">
          <b id="creditB" onClick={onCreditTap}>
            @oddpaq
          </b>
        </div>

        <InfoModal open={infoOpen} onClose={() => setInfoOpen(false)} />
        <CheatSheet
          open={cheatOpen}
          onClose={() => setCheatOpen(false)}
          captured={captured}
        />
      </div>
    </div>
  )
}
