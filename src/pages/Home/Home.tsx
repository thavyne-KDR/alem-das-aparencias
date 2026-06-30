import { Button } from '../../components/Button/Button';
import styles from './Home.module.css';

function HeroBackground() {
  return (
    <svg
      viewBox="0 0 390 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={styles.heroSvg}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hfade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#1A0F07" stopOpacity="0.05" />
          <stop offset="42%" stopColor="#1A0F07" stopOpacity="0.55" />
          <stop offset="65%" stopColor="#1A0F07" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#1A0F07" stopOpacity="0.97" />
        </linearGradient>
        <linearGradient id="htop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#1A0F07" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#1A0F07" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Base */}
      <rect width="390" height="680" fill="#1A0F07" />

      {/* ── Back layer — large, muted shapes ── */}
      {/* Far-left figure */}
      <ellipse cx="-20" cy="210" rx="88" ry="105" fill="#3D2010" />
      <path d="M-100 500 C-100 390 -65 330 -20 310 C25 330 60 390 60 500 Z" fill="#3D2010" />

      {/* Far-right figure */}
      <ellipse cx="415" cy="225" rx="82" ry="98" fill="#2D1B0E" />
      <path d="M340 510 C340 400 372 342 415 322 C458 342 490 400 490 510 Z" fill="#2D1B0E" />

      {/* ── Mid layer ── */}
      {/* Left-center figure — terracota */}
      <ellipse cx="100" cy="195" rx="72" ry="88" fill="#C4623A" opacity="0.75" />
      <path d="M18 490 C18 378 55 318 100 298 C145 318 182 378 182 490 Z" fill="#C4623A" opacity="0.65" />

      {/* Right-center figure — medium brown */}
      <ellipse cx="298" cy="205" rx="70" ry="86" fill="#5C3820" />
      <path d="M218 500 C218 390 254 330 298 310 C342 330 378 390 378 500 Z" fill="#5C3820" />

      {/* ── Front layer — center, most prominent ── */}
      <ellipse cx="195" cy="175" rx="88" ry="106" fill="#7B4A2C" />
      <path d="M96 500 C96 370 140 298 195 275 C250 298 294 370 294 500 Z" fill="#7B4A2C" />

      {/* Gold accent earring dots on center figure */}
      <circle cx="110" cy="200" r="7" fill="#E8A838" opacity="0.8" />
      <circle cx="280" cy="200" r="7" fill="#E8A838" opacity="0.8" />

      {/* Gold accent on left figure */}
      <circle cx="32"  cy="218" r="5" fill="#E8A838" opacity="0.55" />
      <circle cx="168" cy="218" r="5" fill="#E8A838" opacity="0.55" />

      {/* ── Decorative diamond strip ── */}
      {Array.from({ length: 14 }, (_, i) => (
        <polygon
          key={i}
          points={`${i * 28 + 14},415 ${i * 28 + 26},427 ${i * 28 + 14},439 ${i * 28 + 2},427`}
          fill={i % 2 === 0 ? '#C4623A' : '#E8A838'}
          opacity="0.28"
        />
      ))}

      {/* ── Gradient overlays ── */}
      {/* Top dark vignette */}
      <rect width="390" height="140" fill="url(#htop)" />
      {/* Bottom gradient for text legibility */}
      <rect width="390" height="680" fill="url(#hfade)" />
    </svg>
  );
}

interface HomeProps {
  onStart: () => void;
}

export function Home({ onStart }: HomeProps) {
  return (
    <div className={styles.page}>
      <div className={styles.visual}>
        <HeroBackground />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>Jogo educativo</span>
        <h1 className={styles.title}>
          Além das<br />Aparências
        </h1>
        <p className={styles.description}>
          Entre em cenas do cotidiano, escolha sua reação e descubra as pistas
          sociais que aparecem por trás de cada decisão.
        </p>
        <div className={styles.actions}>
          <Button onClick={onStart} fullWidth>
            Jogar agora
          </Button>
        </div>
        <p className={styles.note}>
          Responda pelo primeiro impulso honesto. O jogo devolve pistas, não bronca.
        </p>
      </div>
    </div>
  );
}
