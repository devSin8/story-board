// Simple SVG scenes drawn in the Ajanta palette. Each scene fits a 400x260 canvas.
// Students can edit colours and shapes here to change the artwork.

const SKIN = '#8A5230'

function Backdrop({ sky = '#F3D9A4', ground = '#C99A62', sun }) {
  return (
    <g>
      <rect width="400" height="260" fill={sky} />
      {sun && <circle cx={sun[0]} cy={sun[1]} r="26" fill="#E3C46A" />}
      <rect y="205" width="400" height="55" fill={ground} />
      <path d="M0 205 H400" stroke="#4A2C1A" strokeWidth="2" opacity=".5" />
    </g>
  )
}

function Person({ x, y = 205, s = 1, robe = '#B5532F', crown, halo, raise, skin = SKIN }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {halo && <circle cx="0" cy="-54" r="19" fill="#E3C46A" opacity=".85" />}
      <path d="M-13 -42 L13 -42 L18 0 L-18 0Z" fill={robe} />
      <path d="M-13 -38 L-22 -20" stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <path d={raise ? 'M13 -38 L28 -62' : 'M13 -38 L22 -20'} stroke={skin} strokeWidth="5" strokeLinecap="round" />
      <circle cx="0" cy="-52" r="10" fill={skin} />
      <path d="M-10 -53 A10 10 0 0 1 10 -53Z" fill="#2B1A10" />
      {crown && <path d="M-9 -60 L-7 -71 L-2 -63 L3 -71 L5 -63 L9 -70 L9 -60Z" fill="#D4A62F" />}
    </g>
  )
}

function Elephant({ x, y = 205, s = 1, color = '#F4EFE4' }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {[-28, -8, 14, 30].map((lx) => <rect key={lx} x={lx} y="-24" width="12" height="24" rx="4" fill="#CFC6B2" />)}
      <ellipse cx="0" cy="-44" rx="42" ry="28" fill={color} stroke="#B9AE96" strokeWidth="2" />
      <circle cx="40" cy="-58" r="17" fill={color} stroke="#B9AE96" strokeWidth="2" />
      <ellipse cx="30" cy="-56" rx="9" ry="14" fill="#E2D8C3" stroke="#B9AE96" strokeWidth="2" />
      <path d="M52 -52 Q70 -34 58 -4" stroke={color} strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M48 -46 Q62 -40 60 -30" stroke="#FFFDF5" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="46" cy="-62" r="2" fill="#2B1A10" />
      <path d="M-10 -70 Q0 -78 12 -70 L12 -62 Q0 -56 -10 -62Z" fill="#B5532F" />
    </g>
  )
}

function Palace({ x, y = 205, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-50" y="-70" width="100" height="70" fill="#E9CFA0" stroke="#4A2C1A" strokeWidth="2" />
      <path d="M-40 -70 Q0 -125 40 -70Z" fill="#B5532F" stroke="#4A2C1A" strokeWidth="2" />
      <path d="M0 -112 V-130 L14 -124 L0 -120" fill="#B8923A" stroke="#4A2C1A" />
      <path d="M-14 0 V-30 A14 14 0 0 1 14 -30 V0Z" fill="#4A2C1A" />
      {[-36, 28].map((wx) => <rect key={wx} x={wx} y="-52" width="10" height="16" fill="#2F4A5A" />)}
    </g>
  )
}

function Tree({ x, y = 205, s = 1, fill = '#5E7A45' }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-5" y="-50" width="10" height="50" fill="#5A3A22" />
      <circle cx="0" cy="-66" r="30" fill={fill} />
      <circle cx="-20" cy="-52" r="18" fill={fill} opacity=".9" />
      <circle cx="20" cy="-52" r="18" fill={fill} opacity=".9" />
    </g>
  )
}

function Lotus({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 0 C-12 -10 -12 -24 0 -34 C12 -24 12 -10 0 0Z" fill="#D98A8A" />
      <path d="M0 0 C-22 -2 -28 -14 -26 -22 C-14 -20 -4 -12 0 0Z" fill="#E8A9A0" />
      <path d="M0 0 C22 -2 28 -14 26 -22 C14 -20 4 -12 0 0Z" fill="#E8A9A0" />
    </g>
  )
}

function Hut({ x, y = 205, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-30" y="-36" width="60" height="36" fill="#C9A06A" stroke="#4A2C1A" strokeWidth="2" />
      <path d="M-40 -34 L0 -72 L40 -34Z" fill="#8A6A2F" stroke="#4A2C1A" strokeWidth="2" />
      <path d="M-9 0 V-22 H9 V0Z" fill="#4A2C1A" />
    </g>
  )
}

function Cloud({ x, y, rain }) {
  return (
    <g>
      <ellipse cx={x} cy={y} rx="34" ry="16" fill="#6E8693" />
      <ellipse cx={x - 22} cy={y + 6} rx="22" ry="12" fill="#6E8693" />
      <ellipse cx={x + 24} cy={y + 6} rx="22" ry="12" fill="#6E8693" />
      {rain && [-30, -15, 0, 15, 30].map((d) => (
        <path key={d} d={`M${x + d} ${y + 22} l-4 14 M${x + d + 7} ${y + 30} l-4 14`} stroke="#2F4A5A" strokeWidth="2" strokeLinecap="round" />
      ))}
    </g>
  )
}

// Water poured from hand: the traditional gesture of giving a gift
function Water({ x1, y1, x2, y2 }) {
  return <path d={`M${x1} ${y1} Q${(x1 + x2) / 2} ${y1 + 8} ${x2} ${y2}`} stroke="#4C7C95" strokeWidth="3" strokeDasharray="3 5" fill="none" strokeLinecap="round" />
}

const BRAHMIN = '#EFE4CC'
const PRINCE = '#2F4A5A'
const MADDI = '#B5532F'
const KIDS = '#B8923A'

export const scenes = {
  birth: (
    <g>
      <Backdrop sun={[330, 55]} />
      <Palace x={290} s={1.1} />
      <Person x={130} robe="#2F4A5A" crown />
      <Person x={168} y={196} s={0.45} robe={KIDS} halo />
      <Lotus x={50} y={238} /><Lotus x={80} y={244} s={0.8} /><Lotus x={370} y={244} s={0.9} />
    </g>
  ),
  elephant: (
    <g>
      <Backdrop sky="#EBD2A0" sun={[60, 50]} />
      <Tree x={360} s={0.9} />
      <Person x={70} robe={PRINCE} crown raise />
      <Water x1={100} y1={142} x2={270} y2={160} />
      <Elephant x={200} s={1.15} />
      <Person x={315} robe={BRAHMIN} s={0.9} />
      <Person x={350} robe={BRAHMIN} s={0.85} />
    </g>
  ),
  exile: (
    <g>
      <Backdrop sky="#E4B98A" sun={[200, 70]} />
      <Palace x={320} s={0.9} />
      <Person x={60} robe="#6B4A32" raise /><Person x={100} robe="#8A6A4A" raise /><Person x={140} robe="#6B4A32" raise />
      <Person x={232} robe={PRINCE} crown />
      <g fill="#E3C46A" stroke="#8A6A2F">
        {[0, 1, 2, 3, 4].map((i) => <circle key={i} cx={260 + i * 10} cy={232 - (i % 2) * 6} r="6" />)}
      </g>
    </g>
  ),
  journey: (
    <g>
      <Backdrop sky="#E8C98E" ground="#BF9462" sun={[340, 60]} />
      <Tree x={30} s={0.8} />
      <rect x="180" y="150" width="70" height="34" fill="#B5532F" stroke="#4A2C1A" strokeWidth="2" />
      <circle cx="198" cy="190" r="16" fill="none" stroke="#4A2C1A" strokeWidth="5" />
      <circle cx="238" cy="190" r="16" fill="none" stroke="#4A2C1A" strokeWidth="5" />
      <path d="M250 165 H300" stroke="#4A2C1A" strokeWidth="3" />
      <ellipse cx="318" cy="168" rx="26" ry="14" fill="#8A5A3A" /><circle cx="342" cy="156" r="9" fill="#8A5A3A" />
      <Person x={205} y={176} s={0.55} robe={PRINCE} crown /><Person x={232} y={176} s={0.5} robe={MADDI} />
      <Person x={100} robe={BRAHMIN} s={0.9} raise />
      <Water x1={160} y1={160} x2={118} y2={168} />
    </g>
  ),
  forest: (
    <g>
      <Backdrop sky="#D9E0B8" ground="#8E9C5C" />
      <path d="M0 205 L90 100 L170 205Z M120 205 L230 70 L340 205Z" fill="#9C8A6A" opacity=".75" />
      <Tree x={40} s={1.1} fill="#4F6E3C" /><Tree x={360} s={1.1} fill="#4F6E3C" /><Tree x={320} s={0.8} fill="#5E7A45" />
      <Hut x={200} s={1.05} />
      <Person x={130} robe={PRINCE} s={0.9} /><Person x={265} robe={MADDI} s={0.9} />
      <Person x={105} s={0.5} robe={KIDS} /><Person x={290} s={0.5} robe={KIDS} />
      <ellipse cx="60" cy="226" rx="14" ry="8" fill="#B5782F" /><circle cx="76" cy="216" r="5" fill="#B5782F" />
    </g>
  ),
  jujaka: (
    <g>
      <Backdrop sky="#E5CFA0" ground="#8E9C5C" />
      <Tree x={40} fill="#4F6E3C" /><Hut x={350} s={0.9} />
      <Person x={120} robe={PRINCE} raise />
      <Water x1={148} y1={140} x2={225} y2={160} />
      <g transform="translate(235 205) rotate(8)">
        <path d="M-13 -42 L13 -42 L18 0 L-18 0Z" fill="#CBB892" />
        <circle cx="0" cy="-50" r="10" fill="#7A4A2A" /><path d="M-10 -51 A10 10 0 0 1 10 -51Z" fill="#DDD" />
        <path d="M18 -36 L26 0" stroke="#5A3A22" strokeWidth="4" />
      </g>
      <Person x={290} s={0.5} robe={KIDS} /><Person x={315} s={0.45} robe={MADDI} />
    </g>
  ),
  sakka: (
    <g>
      <Backdrop sky="#F0DDAE" ground="#8E9C5C" sun={[200, 48]} />
      <Tree x={360} fill="#4F6E3C" /><Hut x={50} s={0.8} />
      <Person x={120} robe={PRINCE} raise />
      <Water x1={148} y1={140} x2={230} y2={160} />
      <Person x={250} robe={BRAHMIN} halo />
      <Person x={185} s={0.9} robe={MADDI} />
    </g>
  ),
  reunion: (
    <g>
      <Backdrop sky="#C9D6D8" ground="#9AA866" />
      <Cloud x={90} y={40} rain /><Cloud x={300} y={36} rain />
      <Palace x={335} s={0.85} />
      <Person x={70} robe="#2F4A5A" crown /><Person x={120} robe={PRINCE} crown />
      <Person x={165} robe={MADDI} /><Person x={200} s={0.55} robe={KIDS} /><Person x={225} s={0.5} robe={KIDS} />
      <Lotus x={30} y={240} /><Lotus x={270} y={244} s={0.8} />
    </g>
  ),
}

export default function Scene({ name, label }) {
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label={label} className="block w-full h-auto">
      {scenes[name]}
    </svg>
  )
}
