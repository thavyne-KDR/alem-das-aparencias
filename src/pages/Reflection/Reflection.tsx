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
          <svg
            viewBox="0 0 280 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.pattern}
            aria-hidden="true"
          >
            {[0,1,2,3,4,5,6,7,8].map((i) => (
              <polygon
                key={i}
                points={`${i*32+16},2 ${i*32+30},14 ${i*32+16},26 ${i*32+2},14`}
                fill={i % 2 === 0 ? '#C4623A' : '#E8A838'}
                opacity="0.85"
              />
            ))}
          </svg>
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

