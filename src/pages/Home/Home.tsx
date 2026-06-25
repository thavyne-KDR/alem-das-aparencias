import { Button } from '../../components/Button/Button';
import styles from './Home.module.css';

interface HomeProps {
  onStart: () => void;
}

export function Home({ onStart }: HomeProps) {
  return (
    <div className={styles.page}>
      <div className={styles.visual}>
        <img
          src="/diversidade.jpg"
          alt="Ilustração de silhuetas diversas sobrepostas em cores vibrantes"
          className={styles.heroImage}
        />
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
