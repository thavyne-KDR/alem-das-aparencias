import { Layout } from '../../components/Layout/Layout';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { OptionCard } from '../../components/OptionCard/OptionCard';
import { Button } from '../../components/Button/Button';
import { PersonaCard } from '../../components/PersonaCard/PersonaCard';
import type { Question } from '../../types';
import styles from './Questions.module.css';

interface QuestionsProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedOption: number | null;
  onSelect: (index: number) => void;
  onConfirm: () => void;
}

export function Questions({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onSelect,
  onConfirm,
}: QuestionsProps) {
  return (
    <Layout textured>
      <div className={styles.page}>
        <div className={styles.progress}>
          <ProgressBar current={questionNumber} total={totalQuestions} />
        </div>

        <PersonaCard position={questionNumber} />

        <div className={styles.roundBadge}>Rodada {questionNumber}</div>

        <div className={styles.situationBlock}>
          <span className={styles.situationLabel}>Cena</span>
          <p className={styles.situation}>{question.situation}</p>
        </div>

        <div className={styles.questionBlock}>
          <p className={styles.prompt}>Escolha sua jogada</p>
          <p className={styles.hint}>Qual carta parece mais próxima da sua reação?</p>
        </div>

        <div className={styles.options} role="radiogroup" aria-label="Cartas de resposta">
          {question.options.map((option, index) => (
            <OptionCard
              key={index}
              index={index}
              text={option.text}
              isSelected={selectedOption === index}
              onSelect={onSelect}
            />
          ))}
        </div>

        <div className={styles.actions}>
          <Button
            onClick={onConfirm}
            disabled={selectedOption === null}
            fullWidth
          >
            Jogar carta
          </Button>
        </div>
      </div>
    </Layout>
  );
}
