import Scene from './Illustrations.jsx'

export default function StoryPanel({ number, panel }) {
  return (
    <article className="panel">
      <div className="border-b-[3px] border-bark bg-sandstone">
        <Scene name={panel.scene} label={`Illustration for panel ${number}: ${panel.title}`} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="flex items-center gap-3 font-display text-xl font-bold">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta text-sm text-cream">
            {number}
          </span>
          {panel.title}
        </h3>
        <p className="text-sm leading-relaxed">{panel.caption}</p>
        <p className="mt-auto rounded-md border-2 border-dashed border-gold bg-white/60 p-3 font-display text-sm italic">
          {panel.narration}
        </p>
      </div>
    </article>
  )
}
