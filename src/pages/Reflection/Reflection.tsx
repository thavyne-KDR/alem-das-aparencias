import { Layout } from '../../components/Layout/Layout';
import { Button } from '../../components/Button/Button';
import type { Question } from '../../types';
import styles from './Reflection.module.css';

interface ReflectionProps {
  question: Question;
  selectedOptionIndex: number;
  questionNumber: number;
  totalQuestions: number;
  isLast: boolean;
  onNext: () => void;
}

export function Reflection({
  question,
  selectedOptionIndex,
  questionNumber,
  totalQuestions,
  isLast,
  onNext,
}: ReflectionProps) {
  const selectedText = question.options[selectedOptionIndex].text;

  return (
    <Layout textured>
      <div className={styles.page}>
        <div className={styles.counter}>
          Rodada {questionNumber} de {totalQuestions}
        </div>

        <div className={styles.yourAnswer}>
          <span className={styles.yourAnswerLabel}>Carta jogada</span>
          <p className={styles.yourAnswerText}>&ldquo;{selectedText}&rdquo;</p>
        </div>

        <div className={styles.reflection}>
          <div className={styles.icon} aria-hidden="true">
            <ReflectionIcon />
          </div>
          <span className={styles.unlock}>Pista desbloqueada</span>
          <h2 className={styles.reflectionTitle}>{question.reflection.title}</h2>
          <p className={styles.reflectionText}>{question.reflection.text}</p>
        </div>

        <div className={styles.divider} />

        <div className={styles.actions}>
          <Button onClick={onNext} fullWidth>
            {isLast ? 'Fechar partida' : 'Próxima rodada'}
          </Button>
        </div>
      </div>
    </Layout>
  );
}

function ReflectionIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3L13.9 8.9L20 9.2L15.2 12.9L16.8 18.8L12 15.4L7.2 18.8L8.8 12.9L4 9.2L10.1 8.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
