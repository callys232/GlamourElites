const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  cx: ((i * 37 + 13) % 100),
  cy: ((i * 53 + 7) % 100),
  r: (i % 3) * 0.8 + 1.2,
  delay: (i * 0.6) % 5,
  duration: (i * 1.1) % 5 + 6,
  color: ['#a855f7', '#d4af37', '#ec4899', '#7c3aed', '#6366f1'][i % 5],
}))

const CURVES = [
  { d: 'M-10,70 Q25,40 55,65 T110,50', stroke: '#a855f7' },
  { d: 'M-10,30 Q35,10 65,30 T110,20', stroke: '#d4af37' },
  { d: 'M10,100 Q45,70 75,90 T110,75', stroke: '#ec4899' },
]

export default function ParticleBg({ opacity = 1 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        {/* Soft vector curves */}
        {CURVES.map((c, i) => (
          <path
            key={i}
            d={c.d}
            fill="none"
            stroke={c.stroke}
            strokeWidth="0.3"
            opacity="0.12"
            strokeDasharray="3,4"
          />
        ))}

        {/* Floating particles */}
        {PARTICLES.map(p => (
          <circle
            key={p.id}
            cx={`${p.cx}%`}
            cy={`${p.cy}%`}
            r={p.r}
            fill={p.color}
            style={{
              animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
              transformOrigin: `${p.cx}% ${p.cy}%`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
