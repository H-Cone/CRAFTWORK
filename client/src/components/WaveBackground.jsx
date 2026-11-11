import { useId } from 'react'

export default function WaveBackground({ hue = 0 }) {
  const id = useId().replace(/:/g, '') // unique gradient ids per card

  return (
    <svg
      className="waves"
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      style={{ filter: `hue-rotate(${hue}deg) saturate(1.1)` }}
    >
      <defs>
        <linearGradient id={`a${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#6b5cff" />
          <stop offset=".5" stopColor="#38d9f5" />
          <stop offset="1" stopColor="#ffb07c" />
        </linearGradient>
        <linearGradient id={`b${id}`} x1="1" x2="0">
          <stop offset="0" stopColor="#c6f06f" />
          <stop offset=".5" stopColor="#38d9f5" />
          <stop offset="1" stopColor="#7b6cff" />
        </linearGradient>
        <linearGradient id={`c${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7ab8" />
          <stop offset="1" stopColor="#6b5cff" />
        </linearGradient>
      </defs>
      <g style={{ filter: 'blur(14px)' }}>
        <path
          d="M-200 520C0 330 220 700 420 520S760 360 1000 540V1000H-200Z"
          fill={`url(#a${id})`}
          opacity=".55"
        />
        <path
          d="M-200 600C60 460 240 780 460 610S780 480 1000 640V1000H-200Z"
          fill={`url(#b${id})`}
          opacity=".5"
        />
        <path
          d="M-200 400C80 240 260 560 480 400S760 250 1000 420V1000H-200Z"
          fill={`url(#c${id})`}
          opacity=".4"
        />
        <path
          d="M-200 700C100 600 300 840 520 700S800 620 1000 730V1000H-200Z"
          fill={`url(#a${id})`}
          opacity=".6"
        />
      </g>
    </svg>
  )
}