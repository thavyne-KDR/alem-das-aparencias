import type { ReactNode } from 'react';
import styles from './PersonaCard.module.css';

function Frame({ children }: { children: ReactNode }) {
  return (
    <>
      <defs>
        <pattern id="pd3" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="1" fill="#C4623A" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="140" height="160" rx="14" fill="#F2E6D8" />
      <rect width="140" height="160" rx="14" fill="url(#pd3)" />
      <rect x="6" y="6" width="128" height="148" rx="10"
        stroke="#C4623A" strokeWidth="1.5" strokeDasharray="7 4" />
      <path d="M13 26 L13 13 L26 13" stroke="#C4623A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M127 13 L114 13 M127 13 L127 26" stroke="#C4623A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 147 L13 134 M13 147 L26 147" stroke="#C4623A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M127 147 L114 147 M127 147 L127 134" stroke="#C4623A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {children}
    </>
  );
}

/* 1 — Retrato: mulher negra, cabelo natural */
function S1() {
  return <Frame>
    <path d="M10 160 C20 138 46 126 70 124 C94 126 120 138 130 160 Z" fill="#1A0F07" />
    <rect x="63" y="106" width="14" height="20" rx="5" fill="#7B4A2C" />
    <ellipse cx="70" cy="88" rx="28" ry="32" fill="#7B4A2C" />
    <ellipse cx="70" cy="62" rx="33" ry="28" fill="#1A0F07" />
    <ellipse cx="40" cy="80" rx="12" ry="22" fill="#1A0F07" />
    <ellipse cx="100" cy="80" rx="12" ry="22" fill="#1A0F07" />
    <path d="M54 80 Q61 76 68 79" stroke="#1A0F07" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M72 79 Q79 76 86 80" stroke="#1A0F07" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <ellipse cx="60" cy="87" rx="5.5" ry="4" fill="#1A0F07" />
    <ellipse cx="80" cy="87" rx="5.5" ry="4" fill="#1A0F07" />
    <circle cx="61.5" cy="85.5" r="1.5" fill="white" opacity="0.8" />
    <circle cx="81.5" cy="85.5" r="1.5" fill="white" opacity="0.8" />
    <path d="M70 93 Q66 99 68 101 Q70 102 72 101 Q74 99 70 93" fill="#5C3820" />
    <path d="M62 112 Q70 118 78 112" fill="#7B3A14" />
    <path d="M62 112 Q70 108 78 112" fill="#8B4820" />
    <circle cx="41" cy="88" r="6" stroke="#E8A838" strokeWidth="3" fill="none" />
    <circle cx="99" cy="88" r="6" stroke="#E8A838" strokeWidth="3" fill="none" />
  </Frame>;
}

/* 2 — Intervenção: figura com braço erguido */
function S2() {
  return <Frame>
    <ellipse cx="70" cy="150" rx="28" ry="5" fill="#DEC9A8" opacity="0.5" />
    <rect x="57" y="106" width="11" height="38" rx="5.5" fill="#1A0F07" />
    <rect x="72" y="106" width="11" height="38" rx="5.5" fill="#1A0F07" />
    <rect x="53" y="62" width="34" height="48" rx="10" fill="#1A0F07" />
    <path d="M53 76 L30 46" stroke="#C4623A" strokeWidth="11" strokeLinecap="round" />
    <circle cx="28" cy="43" r="10" fill="#E8A838" />
    <path d="M87 79 L104 97" stroke="#1A0F07" strokeWidth="11" strokeLinecap="round" />
    <circle cx="70" cy="44" r="20" fill="#1A0F07" />
    <ellipse cx="70" cy="46" rx="13" ry="15" fill="#7B4A2C" />
    <circle cx="64" cy="44" r="3" fill="#1A0F07" />
    <circle cx="76" cy="44" r="3" fill="#1A0F07" />
    <circle cx="65" cy="43" r="1" fill="white" opacity="0.8" />
    <circle cx="77" cy="43" r="1" fill="white" opacity="0.8" />
  </Frame>;
}

/* 3 — Rede: nós conectados */
function S3() {
  const nodes = [[70,80,14,'#C4623A'],[36,48,9,'#1A0F07'],[104,48,9,'#1A0F07'],[28,108,9,'#E8A838'],[112,108,9,'#E8A838'],[70,130,9,'#1A0F07']] as const;
  const edges = [[70,80,36,48],[70,80,104,48],[70,80,28,108],[70,80,112,108],[70,80,70,130],[36,48,104,48],[28,108,112,108]] as const;
  return <Frame>
    {edges.map(([x1,y1,x2,y2],i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C4623A" strokeWidth="1.5" opacity="0.4" />)}
    {nodes.map(([cx,cy,r,fill],i) => <circle key={i} cx={cx} cy={cy} r={r} fill={fill} />)}
    {([[36,48],[104,48],[28,108],[112,108],[70,130]] as const).map(([cx,cy],i) => (
      <g key={i}>
        <circle cx={cx} cy={cy-3} r={2.5} fill="#FBF4ED" opacity="0.8" />
        <rect x={cx-2.5} y={cy} width={5} height={5} rx={1.5} fill="#FBF4ED" opacity="0.8" />
      </g>
    ))}
    <ellipse cx="70" cy="80" rx="7" ry="5" fill="#FBF4ED" opacity="0.9" />
    <circle cx="70" cy="80" r="3" fill="#1A0F07" />
  </Frame>;
}

/* 4 — Reflexão: perfil com balões de pensamento */
function S4() {
  return <Frame>
    <path d="M40 160 C44 138 54 128 68 126 C82 128 92 138 96 160 Z" fill="#1A0F07" />
    <rect x="62" y="108" width="12" height="20" rx="5" fill="#7B4A2C" />
    <ellipse cx="68" cy="84" rx="28" ry="32" fill="#7B4A2C" />
    <ellipse cx="68" cy="60" rx="30" ry="24" fill="#1A0F07" />
    <ellipse cx="40" cy="74" rx="11" ry="20" fill="#1A0F07" />
    <ellipse cx="96" cy="74" rx="11" ry="20" fill="#1A0F07" />
    <ellipse cx="60" cy="83" rx="5" ry="4" fill="#1A0F07" />
    <circle cx="61" cy="82" r="1.5" fill="white" opacity="0.8" />
    <ellipse cx="78" cy="83" rx="5" ry="4" fill="#1A0F07" />
    <circle cx="79" cy="82" r="1.5" fill="white" opacity="0.8" />
    <path d="M68 89 Q64 95 66 97 Q68 98 70 97 Q72 95 68 89" fill="#5C3820" />
    <circle cx="100" cy="88" r="5" fill="#C4623A" opacity="0.4" />
    <circle cx="112" cy="70" r="8" fill="#C4623A" opacity="0.55" />
    <circle cx="120" cy="48" r="12" fill="#E8A838" opacity="0.7" />
    <path d="M120 42 L121.5 46.5 L126 46.5 L122.5 49.5 L124 54 L120 51 L116 54 L117.5 49.5 L114 46.5 L118.5 46.5 Z" fill="#FBF4ED" opacity="0.9" />
  </Frame>;
}

/* 5 — Diálogo: duas figuras conversando */
function S5() {
  return <Frame>
    {/* Left figure */}
    <circle cx="42" cy="58" r="18" fill="#1A0F07" />
    <rect x="30" y="76" width="24" height="36" rx="8" fill="#1A0F07" />
    <ellipse cx="42" cy="60" rx="11" ry="13" fill="#7B4A2C" />
    {/* Right figure */}
    <circle cx="98" cy="58" r="18" fill="#2D1B0E" />
    <rect x="86" y="76" width="24" height="36" rx="8" fill="#2D1B0E" />
    <ellipse cx="98" cy="60" rx="11" ry="13" fill="#9B6A40" />
    {/* Speech bubble from left */}
    <rect x="54" y="30" width="36" height="22" rx="8" fill="#C4623A" />
    <path d="M60 52 L55 60 L68 52" fill="#C4623A" />
    <rect x="59" y="37" width="6" height="3" rx="1.5" fill="#FBF4ED" opacity="0.8" />
    <rect x="68" y="37" width="14" height="3" rx="1.5" fill="#FBF4ED" opacity="0.8" />
    <rect x="59" y="43" width="10" height="3" rx="1.5" fill="#FBF4ED" opacity="0.6" />
    {/* Ground */}
    <ellipse cx="70" cy="148" rx="42" ry="5" fill="#DEC9A8" opacity="0.4" />
    {/* Legs */}
    <rect x="34" y="110" width="9" height="32" rx="4.5" fill="#1A0F07" />
    <rect x="45" y="110" width="9" height="32" rx="4.5" fill="#1A0F07" />
    <rect x="90" y="110" width="9" height="32" rx="4.5" fill="#2D1B0E" />
    <rect x="101" y="110" width="9" height="32" rx="4.5" fill="#2D1B0E" />
  </Frame>;
}

/* 6 — Mãos: duas mãos se encontrando */
function S6() {
  return <Frame>
    {/* Left hand (dark skin) */}
    <path d="M20 110 Q18 85 28 75 Q32 70 36 72 Q34 64 40 63 Q46 62 47 70 Q50 62 56 63 Q62 64 61 72 Q65 65 70 67 Q76 70 74 80 L72 110 Z" fill="#7B4A2C" />
    {/* Fingers left */}
    <rect x="27" y="60" width="9" height="28" rx="4.5" fill="#7B4A2C" />
    <rect x="38" y="56" width="9" height="28" rx="4.5" fill="#7B4A2C" />
    <rect x="49" y="56" width="9" height="28" rx="4.5" fill="#7B4A2C" />
    <rect x="60" y="60" width="9" height="26" rx="4.5" fill="#7B4A2C" />
    {/* Right hand (medium skin) */}
    <path d="M120 110 Q122 85 112 75 Q108 70 104 72 Q106 64 100 63 Q94 62 93 70 Q90 62 84 63 Q78 64 79 72 Q75 65 70 67 Q64 70 66 80 L68 110 Z" fill="#9B6A40" />
    <rect x="104" y="60" width="9" height="28" rx="4.5" fill="#9B6A40" />
    <rect x="93" y="56" width="9" height="28" rx="4.5" fill="#9B6A40" />
    <rect x="82" y="56" width="9" height="28" rx="4.5" fill="#9B6A40" />
    <rect x="71" y="60" width="9" height="26" rx="4.5" fill="#9B6A40" />
    {/* Gold glow at meeting point */}
    <circle cx="70" cy="80" r="14" fill="#E8A838" opacity="0.35" />
    <circle cx="70" cy="80" r="7" fill="#E8A838" opacity="0.55" />
    {/* Touch point */}
    <circle cx="70" cy="80" r="3" fill="#FBF4ED" opacity="0.9" />
    {/* Wrists / arms */}
    <rect x="16" y="108" width="56" height="32" rx="8" fill="#7B4A2C" />
    <rect x="68" y="108" width="56" height="32" rx="8" fill="#9B6A40" />
  </Frame>;
}

/* 7 — Coletivo: três silhuetas, alturas diferentes */
function S7() {
  const figures = [
    { x: 24, headY: 52, h: 70, skin: '#7B4A2C', body: '#1A0F07', hr: 16 },
    { x: 62, headY: 38, h: 84, skin: '#9B6A40', body: '#2D1B0E', hr: 18 },
    { x: 100, headY: 52, h: 70, skin: '#5C3820', body: '#1A0F07', hr: 16 },
  ];
  return <Frame>
    <ellipse cx="70" cy="150" rx="52" ry="6" fill="#DEC9A8" opacity="0.4" />
    {figures.map((f, i) => (
      <g key={i}>
        <rect x={f.x - 14} y={f.headY + f.hr * 1.5} width={28} height={f.h} rx="9" fill={f.body} />
        <rect x={f.x - 7} y={f.headY + f.hr * 1.5 + f.h} width={9} height={28} rx="4.5" fill={f.body} />
        <rect x={f.x + 2} y={f.headY + f.hr * 1.5 + f.h} width={9} height={28} rx="4.5" fill={f.body} />
        <circle cx={f.x} cy={f.headY} r={f.hr} fill={f.body} />
        <ellipse cx={f.x} cy={f.headY + 2} rx={f.hr * 0.7} ry={f.hr * 0.82} fill={f.skin} />
      </g>
    ))}
    {/* Gold connecting arc above heads */}
    <path d="M24 36 Q70 18 116 36" stroke="#E8A838" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
  </Frame>;
}

/* 8 — Voz: balão de fala amplificado */
function S8() {
  return <Frame>
    {/* Main speech bubble */}
    <rect x="18" y="28" width="104" height="72" rx="16" fill="#C4623A" />
    <path d="M38 100 L28 124 L60 100" fill="#C4623A" />
    {/* Text lines inside */}
    <rect x="30" y="44" width="50" height="6" rx="3" fill="#FBF4ED" opacity="0.9" />
    <rect x="30" y="56" width="80" height="6" rx="3" fill="#FBF4ED" opacity="0.75" />
    <rect x="30" y="68" width="64" height="6" rx="3" fill="#FBF4ED" opacity="0.6" />
    <rect x="30" y="80" width="40" height="6" rx="3" fill="#FBF4ED" opacity="0.45" />
    {/* Small echo bubble */}
    <rect x="60" y="116" width="66" height="30" rx="10" fill="#E8A838" opacity="0.85" />
    <path d="M76 116 L68 108 L82 116" fill="#E8A838" opacity="0.85" />
    <rect x="68" y="124" width="50" height="4" rx="2" fill="#FBF4ED" opacity="0.8" />
    <rect x="68" y="132" width="36" height="4" rx="2" fill="#FBF4ED" opacity="0.6" />
  </Frame>;
}

/* 9 — Olhar: olho estilizado */
function S9() {
  return <Frame>
    {/* Outer eye shape */}
    <path d="M16 80 Q70 20 124 80 Q70 140 16 80 Z" fill="#1A0F07" />
    {/* Iris */}
    <circle cx="70" cy="80" r="30" fill="#C4623A" />
    {/* Pupil */}
    <circle cx="70" cy="80" r="18" fill="#1A0F07" />
    {/* Inner light */}
    <circle cx="70" cy="80" r="8" fill="#2D1B0E" />
    {/* Highlight spots */}
    <circle cx="80" cy="70" r="6" fill="white" opacity="0.25" />
    <circle cx="84" cy="68" r="3" fill="white" opacity="0.5" />
    <circle cx="60" cy="86" r="2" fill="white" opacity="0.3" />
    {/* Iris ring detail */}
    <circle cx="70" cy="80" r="24" stroke="#E8A838" strokeWidth="1.5" fill="none" opacity="0.4" />
    <circle cx="70" cy="80" r="28" stroke="#E8A838" strokeWidth="1" fill="none" opacity="0.2" />
    {/* Eyelashes top */}
    {[-40,-22,-6,10,26,42].map((dx, i) => {
      const x = 70 + dx;
      const baseY = 80 - Math.sqrt(Math.max(0, 900 - dx * dx)) + 2;
      return <line key={i} x1={x} y1={baseY} x2={x + dx * 0.15} y2={baseY - 10} stroke="#1A0F07" strokeWidth="2" strokeLinecap="round" />;
    })}
  </Frame>;
}

/* 10 — Empatia: círculos concêntricos com coração */
function S10() {
  return <Frame>
    <circle cx="70" cy="80" r="56" fill="#C4623A" opacity="0.12" />
    <circle cx="70" cy="80" r="44" fill="#C4623A" opacity="0.18" />
    <circle cx="70" cy="80" r="32" fill="#E8A838" opacity="0.25" />
    <circle cx="70" cy="80" r="20" fill="#E8A838" opacity="0.5" />
    <circle cx="70" cy="80" r="10" fill="#C4623A" opacity="0.9" />
    {/* Heart in center */}
    <path d="M70 86 C70 86 54 74 54 64 C54 57 60 52 66 54 C68 55 70 57 70 57 C70 57 72 55 74 54 C80 52 86 57 86 64 C86 74 70 86 70 86 Z" fill="#FBF4ED" opacity="0.95" />
    {/* Radiating lines */}
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 70 + Math.cos(rad) * 22;
      const y1 = 80 + Math.sin(rad) * 22;
      const x2 = 70 + Math.cos(rad) * 36;
      const y2 = 80 + Math.sin(rad) * 36;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E8A838" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />;
    })}
  </Frame>;
}

const scenes = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10];

export function PersonaCard({ position }: { position: number }) {
  const Scene = scenes[(position - 1) % 10];
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <svg
        viewBox="0 0 140 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <Scene />
      </svg>
    </div>
  );
}
