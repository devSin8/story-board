import { useState } from 'react'

const KEY = 'ajanta-team-details-v2'
const blank = {
  members: [
    { name: 'Aditya Pandey', reg: '150' },
    { name: 'Akarsh Nehra', reg: '151' },
    { name: 'Shashank Bhadoriya', reg: '163' },
    { name: 'Aniruddha Verma', reg: '192' },
    { name: 'Hussain Makhanawala', reg: '188' },
  ],
  advisor: '',
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || blank
  } catch {
    return blank
  }
}

export default function TeamDetails() {
  const [team, setTeam] = useState(load)

  // Update state and remember the details in this browser
  const save = (next) => {
    setTeam(next)
    try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* ignore */ }
  }
  const setMember = (i, field, value) =>
    save({ ...team, members: team.members.map((m, j) => (j === i ? { ...m, [field]: value } : m)) })
  const addMember = () => save({ ...team, members: [...team.members, { name: '', reg: '' }] })
  const removeMember = () => team.members.length > 1 && save({ ...team, members: team.members.slice(0, -1) })

  return (
    <section id="team" className="mx-auto max-w-4xl px-4 py-10 print-block">
      <h2 className="section-title">Team Details</h2>
      <div className="rule" />
      <div className="rounded-lg border-2 border-sandstone bg-white/50 p-4 sm:p-6">
        <div className="grid gap-3">
          {team.members.map((m, i) => (
            <div key={i} className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-semibold">
                Member {i + 1} name
                <input className="field mt-1 font-normal" value={m.name} placeholder="Enter name"
                  onChange={(e) => setMember(i, 'name', e.target.value)} />
              </label>
              <label className="block text-sm font-semibold">
                Register number
                <input className="field mt-1 font-normal" value={m.reg} placeholder="Enter register number"
                  onChange={(e) => setMember(i, 'reg', e.target.value)} />
              </label>
            </div>
          ))}
          <label className="block text-sm font-semibold">
            Faculty advisor
            <input className="field mt-1 font-normal" value={team.advisor} placeholder="Enter faculty advisor name"
              onChange={(e) => save({ ...team, advisor: e.target.value })} />
          </label>
        </div>
        <div className="no-print mt-4 flex gap-2">
          <button type="button" className="btn" onClick={addMember}>Add member</button>
          <button type="button" className="btn" onClick={removeMember}>Remove last member</button>
        </div>
      </div>
    </section>
  )
}
