import { Layout } from '../../components/Layout/Layout';
import { Button } from '../../components/Button/Button';
import { questions } from '../../data/questions';
import styles from './Introduction.module.css';

interface IntroductionProps {
  onStart: () => void;
}

export function Introduction({ onStart }: IntroductionProps) {
  return (
    <Layout>
      <div className={styles.page}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Preparar partida</span>
          <h1 className={styles.title}>Como jogar</h1>
        </header>

        <div className={styles.body}>
          <p className={styles.lead}>
            São {questions.length} rodadas curtas. Em cada uma, você lê uma cena,
            escolhe uma carta de reação e desbloqueia uma pista sobre o que
            estava acontecendo ali.
          </p>

          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.dot} />
              <div>
                <strong>Jogue com honestidade.</strong> A escolha mais interessante
                é a que parece real para você naquele momento.
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.dot} />
              <div>
                Depois de cada carta, o jogo mostra uma pista de contexto para
                ampliar a leitura da cena.
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.dot} />
              <div>
                No final, seu painel revela quatro habilidades: escuta, contexto,
                ação e pausa crítica.
              </div>
            </li>
          </ul>

          <div className={styles.callout}>
            <p>
              Não é prova e não tem sermão. É um treino de percepção para notar
              detalhes que costumam passar batido no dia a dia.
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <Button onClick={onStart} fullWidth>
            Começar rodada 1
          </Button>
        </div>
      </div>
    </Layout>
  );
}
