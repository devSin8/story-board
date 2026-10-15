import StoryPanel from './StoryPanel.jsx'
import { panels } from '../data/panels.js'

export default function Storyboard() {
  return (
    <section id="storyboard" className="page-break mx-auto max-w-6xl px-4 py-10">
      <h2 className="section-title">Storyboard</h2>
      <div className="rule" />
      <div className="storyboard-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {panels.map((p, i) => (
          <StoryPanel key={p.title} number={i + 1} panel={p} />
        ))}
      </div>
    </section>
  )
}
