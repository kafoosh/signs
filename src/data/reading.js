// The reveal copy: 6 sections x 5 options each, plus conclusion, plus
// ordinal-words date helpers. All copy is cleaned of em/en dashes.

export const SECTIONS = [
  {
    h: 'Inner World',
    o: [
      "You feel far more deeply than you let the world see.",
      "You're torn between craving stability and yearning for growth.",
      "What looks like indecision is really you weighing every angle at once.",
      "You hold contradictions comfortably, without needing to resolve them.",
      "You feel things intensely, even when you keep it to yourself.",
    ],
  },
  {
    h: 'Outer Relationships',
    o: [
      "People are drawn to you because you listen more than you speak.",
      "You value loyalty deeply, and not everyone earns a place in your inner circle.",
      "You swing between close connection and quiet distance, and that's how you recharge.",
      "You often become what others need, sometimes at the cost of being seen.",
      "You keep a small circle of people who truly matter.",
    ],
  },
  {
    h: 'Aptitudes',
    o: [
      "You have creative potential you haven't fully explored yet.",
      "You're great with details, but can still see the bigger picture.",
      "You learn fast when something genuinely interests you.",
      "You have a knack for understanding how systems work.",
      "You connect ideas and spot patterns others miss.",
    ],
  },
  {
    h: 'Habits',
    o: [
      "Some of your comfortable habits are quietly holding you back.",
      "You procrastinate on what you dislike, but are relentless about what you love.",
      "You thrive on routine, yet crave novelty to stay engaged.",
      "You overthink decisions, which sometimes costs you, and sometimes saves you.",
      "You're much harder on yourself than you are on anyone else.",
    ],
  },
  {
    h: 'Life Purpose / Destiny',
    o: [
      "Your hardest lessons will become your greatest gifts to others.",
      "Your path is about balancing service to others with your own needs.",
      "You're here to quietly challenge the status quo.",
      "Your journey is about discovering who you are beneath others' expectations.",
      "You're meant to be a catalyst for change in the people you meet.",
    ],
  },
  {
    h: 'Challenges / Obstacles',
    o: [
      "Your biggest obstacle is self-doubt dressed up as practicality.",
      "You struggle between pleasing others and honoring your own truth.",
      "You take on too much responsibility for things you can't control.",
      "You must learn to say no without feeling guilty.",
      "The gap between your potential and your present can make you impatient.",
    ],
  },
]

// One picked at random per reading so the close isn't always the same.
export const CONCLUSIONS = [
  "You are bright and open to life's possibilities, though you could let people in a little more. And also...",
  "You have real depth and untapped potential, and others think more of you than you do. And also...",
  "You're more than you let people see, and the world would benefit from more of the real you. And also...",
  "Your empathy is admirable, but you can't fix everything, and you're more remarkable than you believe. And also...",
  "You are thoughtful and capable, so trust yourself more and doubt yourself less. And also...",
]

export function ordinalWord(n) {
  const ones = [
    'zero', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
    'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth',
    'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth',
  ]
  const tens = { 20: 'twentieth', 30: 'thirtieth' }
  if (n <= 20) return ones[n]
  const t = Math.floor(n / 10) * 10
  const r = n % 10
  if (r === 0) return tens[t] || ones[n]
  const tensWord = { 20: 'twenty', 30: 'thirty' }[t]
  return tensWord + '-' + ones[r]
}

export function readingDate() {
  const d = new Date()
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  return 'the ' + ordinalWord(d.getDate()) + ' day of ' + months[d.getMonth()]
}

// Build the reveal block list: intro -> 6 random sections -> conclusion.
// Greeting: "Hello [Name] the [Sign]." (falls back to "Hello [Sign]." if no name).
export function buildRevealBlocks(signName, name) {
  const who = name && name.trim() ? name.trim() + ' the ' + signName : signName
  const blocks = []
  blocks.push({
    h: 'Intro',
    cls: 'intro',
    text:
      'Hello ' +
      who +
      '. Welcome to your astrology reading on ' +
      readingDate() +
      ". Here's what I think...",
  })
  SECTIONS.forEach((s) => {
    const opt = s.o[Math.floor(Math.random() * s.o.length)]
    blocks.push({ h: s.h, cls: '', text: opt })
  })
  blocks.push({
    h: 'In Conclusion',
    cls: '',
    text: CONCLUSIONS[Math.floor(Math.random() * CONCLUSIONS.length)],
  })
  return blocks
}
