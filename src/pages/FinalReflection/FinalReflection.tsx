import { Layout } from '../../components/Layout/Layout';
import { Button } from '../../components/Button/Button';
import { questions } from '../../data/questions';
import styles from './FinalReflection.module.css';

interface FinalReflectionProps {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
}

const MAX_CHARS = 400;

export function FinalReflection({ value, onChange, onSubmit }: FinalReflectionProps) {
  const remaining = MAX_CHARS - value.length;
  const isOverLimit = remaining < 0;

  return (
    <Layout>
      <div className={styles.page}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Fim da partida</span>
          <h1 className={styles.title}>Diário de bordo</h1>
          <p className={styles.description}>
            Depois de atravessar {questions.length} rodadas, vale guardar uma
            frase. Pode ser uma descoberta, um incômodo, uma dúvida ou algo que
            você quer observar melhor fora do jogo.
          </p>
        </header>

        <div className={styles.fieldWrapper}>
          <div className={styles.promptLine}>
            <span className={styles.promptText}>Uma coisa que eu levo daqui é...</span>
          </div>
          <textarea
            className={styles.textarea}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Anote do seu jeito..."
            maxLength={MAX_CHARS + 50}
            rows={5}
            aria-label="Seu diário de bordo"
          />
          <div className={styles.charCount}>
            <span className={isOverLimit ? styles.over : ''}>
              {remaining < 0 ? `${Math.abs(remaining)} acima do limite` : `${remaining} caracteres restantes`}
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            onClick={onSubmit}
            disabled={value.trim().length < 3 || isOverLimit}
            fullWidth
          >
            Abrir painel final
          </Button>
          <button className={styles.skip} onClick={onSubmit}>
            Ir direto ao painel
          </button>
        </div>
      </div>
    </Layout>
  );
}
