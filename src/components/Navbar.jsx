import { links } from './Header.jsx'

export default function Navbar() {
  return (
    <nav aria-label="Main" className="no-print sticky top-0 z-20 border-b-2 border-bark bg-bark text-cream">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <ul className="flex flex-wrap gap-x-1 gap-y-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded px-3 py-1.5 transition duration-200 hover:bg-gold hover:text-bark">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button type="button" className="btn" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>
    </nav>
  )
}
