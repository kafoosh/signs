// The reveal copy: 6 sections x 5 options each, plus conclusion, plus
// ordinal-words date helpers. All copy is cleaned of em/en dashes.

export const SECTIONS = [
  {
    h: 'Inner World',
    o: [
      "You possess a depth of feeling that you don't always show the world. While you may appear composed on the surface, you harbor rich emotional landscapes and profound thoughts that guide your decisions in subtle ways.",
      "There is an inner conflict within you between your desire for stability and your yearning for growth. You often find yourself contemplating the deeper meaning of life's events, seeking authenticity in a world that demands conformity.",
      "You have a reflective nature that others might misinterpret as indecision. In truth, you're processing multiple perspectives simultaneously, which gives you wisdom that many fail to recognize until later.",
      "Your inner world is more complex than most people realize. You contain contradictions that don't bother you the way they seem to trouble others. You've learned to hold opposing truths without needing to resolve them.",
      "You experience emotions intensely, though you may not always express them openly. This internal richness makes you sensitive to nuance and subtlety in ways that others miss entirely.",
    ],
  },
  {
    h: 'Outer Relationships',
    o: [
      "People are drawn to you because you listen more than you speak. Your genuine interest in others creates a sense of being understood, though sometimes people take more from you than you realize.",
      "You value loyalty deeply and expect the same in return. While you're capable of great warmth and connection, you've learned through experience that not everyone deserves access to your inner circle.",
      "Your relationships tend to follow a pattern of intense connection followed by periods of distance. This rhythm is natural to you, though others sometimes misinterpret it as rejection rather than your need for personal renewal.",
      "You are someone who adapts to fit the needs of those around you, often becoming what others need you to be. This flexibility is both your strength and your burden, as it can leave you feeling unseen in your relationships.",
      "You have a small circle of truly meaningful relationships rather than many superficial ones. You're selective about who you let into your world, and this discernment protects you from wasting emotional energy.",
    ],
  },
  {
    h: 'Aptitudes',
    o: [
      "You have untapped potential in creative or intuitive areas that you haven't fully explored. Your practical skills mask a capacity for abstract thinking that could flourish with the right opportunity.",
      "You excel at tasks requiring attention to detail, though you're also capable of seeing the bigger picture. Your challenge is knowing when to focus narrowly and when to step back for perspective.",
      "You possess a natural ability to learn new things when they genuinely interest you. However, you may struggle with pursuits that don't align with your intrinsic motivation, no matter how much external pressure is applied.",
      "You have a talent for understanding how systems work, whether they're organizational, mechanical, or social. This analytical ability, combined with your intuitive nature, makes you particularly suited to roles requiring both logic and insight.",
      "Your greatest aptitude lies in connecting disparate ideas and seeing patterns others miss. You're a synthesizer at heart, able to pull threads from many sources and weave them into something coherent.",
    ],
  },
  {
    h: 'Habits',
    o: [
      "You have patterns of behavior that serve you well in some contexts but hold you back in others. You're aware of these tendencies but change is difficult because they've become comfortable.",
      "You tend toward procrastination on things you dislike, yet show remarkable discipline when pursuing goals you care about. This inconsistency often leaves you frustrated with yourself.",
      "You're someone who thrives with routine but also needs novelty to stay engaged. You often find yourself torn between the comfort of your established patterns and the excitement of trying something entirely new.",
      "You have a habit of overthinking decisions before you act, sometimes missing windows of opportunity. Yet this caution has also saved you from mistakes that impulsive people often make.",
      "You tend to be harder on yourself than you are on others, holding yourself to standards that few could realistically meet. This self-criticism drives improvement but can also prevent you from celebrating your accomplishments.",
    ],
  },
  {
    h: 'Life Purpose / Destiny',
    o: [
      "You are meant to experience a journey of self-discovery that will eventually guide others. Your path involves learning hard lessons that later become your greatest gifts to share with the world.",
      "Your destiny involves finding balance between service to others and honoring your own needs. The universe is guiding you toward a role where your unique perspective becomes invaluable to those around you.",
      "You are here to challenge the status quo in subtle but meaningful ways. Your life's work, whether recognized or not, involves questioning assumptions and encouraging others to think more deeply about their choices.",
      "You are being called toward authenticity. Your life's journey is fundamentally about stripping away what others expect of you and discovering who you truly are beneath those layers.",
      "Your purpose involves transformation, both your own and that of those you encounter. You're meant to be a catalyst for change, helping others see possibilities they couldn't perceive before.",
    ],
  },
  {
    h: 'Challenges / Obstacles',
    o: [
      "Your greatest challenge is self-doubt disguised as practicality. You often talk yourself out of pursuing meaningful things by convincing yourself they're unrealistic, when the real barrier is fear of failure.",
      "You struggle with the tension between wanting to please others and honoring your own truth. This internal conflict often leaves you feeling exhausted and resentful, even when you're succeeding by external measures.",
      "You have a tendency to take on too much responsibility, both for your own outcomes and for the feelings of those around you. Learning to distinguish between what you can control and what you cannot is essential to your growth.",
      "Your challenge is accepting that you cannot be everything to everyone. You must learn to set boundaries without feeling guilty, and to understand that saying no to some things is necessary to say yes to what truly matters.",
      "You struggle with the gap between your potential and your current circumstances. This awareness can fuel growth, but it can also create frustration and impatience with the pace of your own development.",
    ],
  },
]

// One picked at random per reading so the close isn't always the same.
export const CONCLUSIONS = [
  "It's very interesting doing your reading. You are certainly bright, and open to life's possibilities, something not normally found among achieving people. You would do well to be less self-absorbed, as it tends to distance you a little. You could let people in a little more, but I am aware there is a side you feel you should hide, but you really have an appealing personality, and also...",
  "Your reading reveals someone with significant untapped potential and genuine depth. You have real insight into human nature, which is both a gift and a burden. While you present confidence to the world, there's a part of you that questions your own worth more often than necessary. Others appreciate you far more than you realize, and you'd benefit from trusting their perception of you more than your own self-judgment. And also...",
  "What strikes me about your reading is the contrast between your inner complexity and your outer composure. You're clearly intelligent and capable, yet you carry a weight that you don't fully share with others. This protective instinct makes sense, but it sometimes prevents people from truly knowing you. You have more to offer than you typically allow yourself to give, and the world would benefit from seeing more of the real you. And also...",
  "Your reading shows someone with considerable emotional intelligence and self-awareness. You understand people deeply, perhaps too deeply. You often absorb their problems as your own. While your empathy is genuinely admirable, you'd find more peace by recognizing that you cannot fix everything. You're far more remarkable than your self-criticism allows you to believe, and others see this even when you don't. And also...",
  "I find your reading quite compelling. You are thoughtful, perceptive, and far more capable than you sometimes give yourself credit for. There's a tendency in you to retreat when challenged or uncertain, a protective mechanism that once served you well. However, your greatest growth will come from stepping into your own light more fully. People are drawn to your authenticity. Trust that more, and doubt yourself less. And also...",
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
