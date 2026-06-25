import type { CategoryScores } from '../../types';
import styles from './RadarChart.module.css';

interface RadarChartProps {
  scores: CategoryScores;
}

const SIZE = 260;
const CENTER = SIZE / 2;
const RADIUS = 95;
const LEVELS = 4;

const axes: { key: keyof CategoryScores; label: string }[] = [
  { key: 'escuta', label: 'Escuta' },
  { key: 'contexto', label: 'Contexto' },
  { key: 'atitude', label: 'Ação' },
  { key: 'reflexao', label: 'Pausa' },
];

function polarToCartesian(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

function buildPolygonPoints(values: number[]): string {
  return values
    .map((v, i) => {
      const angle = (i * 360) / values.length;
      const r = (v / 100) * RADIUS;
      const { x, y } = polarToCartesian(angle, r);
      return `${x},${y}`;
    })
    .join(' ');
}

export function RadarChart({ scores }: RadarChartProps) {
  const values = axes.map((a) => scores[a.key]);

  return (
    <div className={styles.wrapper}>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className={styles.svg}
        aria-hidden="true"
      >
        {Array.from({ length: LEVELS }).map((_, level) => {
          const r = (RADIUS / LEVELS) * (level + 1);
          const points = axes
            .map((_, i) => {
              const angle = (i * 360) / axes.length;
              const { x, y } = polarToCartesian(angle, r);
              return `${x},${y}`;
            })
            .join(' ');
          return (
            <polygon
              key={level}
              points={points}
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="1"
            />
          );
        })}

        {axes.map((_, i) => {
          const angle = (i * 360) / axes.length;
          const end = polarToCartesian(angle, RADIUS);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={end.x}
              y2={end.y}
              stroke="var(--color-border)"
              strokeWidth="1"
            />
          );
        })}

        <polygon
          points={buildPolygonPoints(values)}
          fill="rgba(15, 118, 110, 0.18)"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {values.map((v, i) => {
          const angle = (i * 360) / axes.length;
          const r = (v / 100) * RADIUS;
          const { x, y } = polarToCartesian(angle, r);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="var(--color-accent)"
              stroke="var(--color-white)"
              strokeWidth="2"
            />
          );
        })}

        {axes.map(({ label }, i) => {
          const angle = (i * 360) / axes.length;
          const { x, y } = polarToCartesian(angle, RADIUS + 22);
          const textAnchor =
            Math.abs(x - CENTER) < 4 ? 'middle' : x < CENTER ? 'end' : 'start';
          return (
            <text
              key={i}
              x={x}
              y={y + 4}
              textAnchor={textAnchor}
              fontSize="12"
              fontFamily="var(--font-family)"
              fontWeight="600"
              fill="var(--color-text-secondary)"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
