import lotus from '../assets/lotus.svg'

export const links = [
  { href: '#team', label: 'Team' },
  { href: '#introduction', label: 'Introduction' },
  { href: '#storyboard', label: 'Storyboard' },
  { href: '#significance', label: 'Historical Significance' },
  { href: '#conclusion', label: 'Conclusion' },
]

export default function Header() {
  return (
    <header className="border-b-4 border-double border-gold bg-gradient-to-b from-sandstone to-cream px-4 py-10 text-center print-block">
      <img src={lotus} alt="" className="mx-auto mb-3 h-14 w-14" />
      <h1 className="font-display text-4xl font-bold text-bark sm:text-5xl">
        Ajanta Cave Paintings: A Visual Story
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-lg text-bark/80">
        The Vessantara Jataka told in eight panels: a prince, a promise and the gift of everything he loved.
      </p>
      <p className="mt-4 font-display text-sm italic text-bark/70">
        Inspired by the painted Buddhist caves of Ajanta, Maharashtra (c. 2nd century BCE to c. 480 CE)
      </p>
    </header>
  )
}
