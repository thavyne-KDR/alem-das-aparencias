import styles from './OptionCard.module.css';

interface OptionCardProps {
  text: string;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}

const labels = ['A', 'B', 'C', 'D'];

export function OptionCard({ text, index, isSelected, onSelect }: OptionCardProps) {
  return (
    <button
      className={[styles.card, isSelected ? styles.selected : ''].filter(Boolean).join(' ')}
      onClick={() => onSelect(index)}
      role="radio"
      aria-checked={isSelected}
    >
      <span className={styles.label}>Carta {labels[index]}</span>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
