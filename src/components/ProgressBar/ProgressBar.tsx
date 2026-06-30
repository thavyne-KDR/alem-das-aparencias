import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.label}>Jornada</span>
        <span className={styles.counter}>
          {current} de {total}
        </span>
      </div>
      <div
        className={styles.trail}
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
      >
        {Array.from({ length: total }, (_, i) => {
          const stepNumber = i + 1;
          const isDone = stepNumber < current;
          const isCurrent = stepNumber === current;
          return (
            <div key={i} className={styles.step}>
              <div
                className={[
                  styles.dot,
                  isDone ? styles.done : '',
                  isCurrent ? styles.current : '',
                ].join(' ')}
              />
              {i < total - 1 && (
                <div className={[styles.connector, isDone ? styles.done : ''].join(' ')} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
