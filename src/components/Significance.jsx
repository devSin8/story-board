export default function Significance() {
  const facts = [
    ['Where', 'The Ajanta Caves are cut into a horseshoe-shaped rock face above the Waghora river in Maharashtra, India.'],
    ['When', 'The 30 Buddhist caves were made in two main phases, from about the 2nd century BCE to about 480 CE.'],
    ['Recognition', 'They were rediscovered in 1819 and are a UNESCO World Heritage Site (1983).'],
  ]
  return (
    <section id="significance" className="mx-auto max-w-4xl px-4 py-10 print-block">
      <h2 className="section-title">Historical Significance</h2>
      <div className="rule" />
      <dl className="mb-6 grid gap-4 sm:grid-cols-3">
        {facts.map(([t, d]) => (
          <div key={t} className="rounded-lg border-2 border-sandstone bg-white/50 p-4 transition duration-200 hover:border-terracotta">
            <dt className="font-display text-lg font-bold text-terracotta">{t}</dt>
            <dd className="mt-1 text-sm leading-relaxed">{d}</dd>
          </div>
        ))}
      </dl>
      <p className="font-display text-lg leading-relaxed">
        Ajanta's wall paintings are among the finest surviving examples of ancient Indian painting. They are
        known for flowing lines, rich mineral colours and expressive faces. Jataka stories were a favourite
        subject in Buddhist art because they taught values such as generosity, patience and compassion through
        stories that ordinary people could follow, even without reading. Monks and visitors could "read" the
        walls like a picture book.
      </p>
    </section>
  )
}
