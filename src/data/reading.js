// The reveal copy: 6 sections x 5 options each, plus conclusion, plus
// ordinal-words date helpers. All copy is cleaned of em/en dashes.

export const SECTIONS = [
  {
    h: 'Inner World',
    o: [
      "You feel far more deeply than you let the world see. Beneath your composed surface lie rich emotions and quiet thoughts that guide your decisions.",
      "You're torn between a desire for stability and a yearning for growth. You often look for the deeper meaning in life's events, seeking authenticity in a world that demands conformity.",
      "Others may mistake your reflective nature for indecision. In truth, you're weighing many perspectives at once, which gives you a wisdom people only recognize later.",
      "Your inner world is more complex than most realize. You hold contradictions comfortably, without needing to resolve them the way others do.",
      "You experience emotions intensely, even when you keep them to yourself. This inner richness makes you sensitive to nuances that others miss entirely.",
    ],
  },
  {
    h: 'Outer Relationships',
    o: [
      "People are drawn to you because you listen more than you speak. You make others feel understood, though some take more from you than you realize.",
      "You value loyalty deeply and expect it in return. You're capable of great warmth, but experience has taught you that not everyone deserves a place in your inner circle.",
      "Your relationships move between intense connection and quiet distance. This rhythm is how you recharge, though others sometimes mistake it for rejection.",
      "You adapt to fit the needs of those around you, often becoming what others need you to be. This flexibility is a strength, but it can leave you feeling unseen.",
      "You keep a small circle of truly meaningful relationships rather than many shallow ones. Being selective protects you from wasting emotional energy.",
    ],
  },
  {
    h: 'Aptitudes',
    o: [
      "You have creative and intuitive potential you haven't fully explored. Your practical skills hide a capacity for abstract thinking that could flourish with the right opportunity.",
      "You excel at detail, yet you can still see the bigger picture. Your challenge is knowing when to zoom in and when to step back.",
      "You learn quickly when something genuinely interests you. But no amount of outside pressure can make you thrive at things that don't.",
      "You have a talent for understanding how systems work, whether mechanical, social, or organizational. Paired with your intuition, this suits you to roles that need both logic and insight.",
      "Your greatest gift is connecting ideas and spotting patterns others miss. You're a synthesizer at heart, weaving many threads into something coherent.",
    ],
  },
  {
    h: 'Habits',
    o: [
      "Some of your habits serve you well, while others quietly hold you back. You know this, but change is hard because they've become comfortable.",
      "You procrastinate on things you dislike, yet show remarkable discipline for goals you care about. This inconsistency often leaves you frustrated with yourself.",
      "You thrive on routine but need novelty to stay engaged. You're often torn between the comfort of the familiar and the thrill of something new.",
      "You tend to overthink decisions, sometimes missing windows of opportunity. Yet this caution has also saved you from mistakes impulsive people make.",
      "You're harder on yourself than on anyone else, holding standards few could meet. This drives you to improve, but can stop you from celebrating how far you've come.",
    ],
  },
  {
    h: 'Life Purpose / Destiny',
    o: [
      "You're on a journey of self-discovery that will one day guide others. The hard lessons you learn now will become your greatest gifts to share.",
      "Your destiny is about balancing service to others with honoring your own needs. You're being guided toward a role where your unique perspective is invaluable.",
      "You are here to challenge the status quo in subtle but meaningful ways. Your life's work involves questioning assumptions and helping others think more deeply.",
      "You are being called toward authenticity. Your journey is about stripping away what others expect of you and discovering who you truly are.",
      "Your purpose is transformation, both your own and that of the people you meet. You're meant to help others see possibilities they couldn't see before.",
    ],
  },
  {
    h: 'Challenges / Obstacles',
    o: [
      "Your greatest challenge is self-doubt disguised as practicality. You often talk yourself out of meaningful pursuits, when the real barrier is fear of failure.",
      "You struggle between pleasing others and honoring your own truth. This conflict can leave you exhausted, even when you're succeeding on paper.",
      "You take on too much responsibility for your own outcomes and for others' feelings. Learning what you can and can't control is key to your growth.",
      "You cannot be everything to everyone. You must learn to set boundaries without guilt, and accept that saying no makes room for what truly matters.",
      "You feel the gap between your potential and your current circumstances. This can fuel your growth, but also make you impatient with your own pace.",
    ],
  },
]

// One picked at random per reading so the close isn't always the same.
export const CONCLUSIONS = [
  "It's very interesting doing your reading. You are certainly bright and open to life's possibilities, though you could let people in a little more. There's a side of you that you feel you should hide, but you really have an appealing personality, and also...",
  "Your reading reveals someone with real depth and untapped potential. There's a part of you that questions your worth more than necessary, but others appreciate you far more than you realize. And also...",
  "What strikes me is the contrast between your inner complexity and your outer composure. You carry a weight you don't fully share, and the world would benefit from seeing more of the real you. And also...",
  "Your reading shows considerable emotional intelligence. You often absorb other people's problems as your own, but you can't fix everything, and you're far more remarkable than your self-criticism allows. And also...",
  "I find your reading quite compelling. You are thoughtful, perceptive, and more capable than you give yourself credit for. Trust your authenticity more, and doubt yourself less. And also...",
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
