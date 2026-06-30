import { useMemo } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Button } from '../../components/Button/Button';
import { RadarChart } from '../../components/RadarChart/RadarChart';
import { calculateScores, buildResultSummary } from '../../utils/scoring';
import type { CategoryScores, Question } from '../../types';
import styles from './Results.module.css';

interface ResultsProps {
  answers: number[];
  selectedQuestions: Question[];
  userReflection: string;
  onRestart: () => void;
}

const categoryLabels: Record<keyof CategoryScores, string> = {
  escuta: 'Escuta',
  contexto: 'Contexto',
  atitude: 'Ação',
  reflexao: 'Pausa crítica',
};

const categoryDescShort: Record<keyof CategoryScores, string> = {
  escuta: 'Notar o que alguém sente antes de explicar por cima',
  contexto: 'Ligar a cena a padrões que já existem no mundo',
  atitude: 'Sair da arquibancada quando a situação pede presença',
  reflexao: 'Fazer uma pausa boa antes de repetir uma resposta pronta',
};

export function Results({ answers, selectedQuestions, userReflection, onRestart }: ResultsProps) {
  const scores = useMemo(() => calculateScores(selectedQuestions, answers), [selectedQuestions, answers]);
  const summary = useMemo(() => buildResultSummary(scores), [scores]);

  const categories = (Object.keys(scores) as (keyof CategoryScores)[]).sort(
    (a, b) => scores[b] - scores[a]
  );

  return (
    <Layout>
      <div className={styles.page}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Partida concluída</span>
          <h1 className={styles.title}>Painel final</h1>
          <p className={styles.description}>
            Seu painel nasceu das escolhas feitas nas {selectedQuestions.length} rodadas.
            Ele não fecha quem você é, só mostra quais habilidades apareceram mais.
          </p>
        </header>

        <div className={styles.radarSection}>
          <span className={styles.chartLabel}>Placar de leitura social</span>
          <RadarChart scores={scores} />
        </div>

        <div className={styles.dominantCard}>
          <span className={styles.dominantLabel}>Habilidade em destaque</span>
          <h2 className={styles.dominantName}>{summary.dominantLabel}</h2>
          <p className={styles.dominantText}>{summary.dominantDescription}</p>
        </div>

        <div className={styles.scoresSection}>
          <h3 className={styles.scoresTitle}>As quatro habilidades</h3>
          <div className={styles.scoresList}>
            {categories.map((key, i) => (
              <div key={key} className={styles.scoreRow}>
                <div className={styles.scoreInfo}>
                  <span className={styles.scoreName}>{categoryLabels[key]}</span>
                  <span className={styles.scoreDesc}>{categoryDescShort[key]}</span>
                </div>
                <div className={styles.scoreBar}>
                  <div
                    className={styles.scoreBarFill}
                    style={{
                      width: `${scores[key]}%`,
                      animationDelay: `${i * 120}ms`,
                    }}
                  />
                </div>
                <span className={styles.scoreValue}>{scores[key]}%</span>
              </div>
            ))}
          </div>
        </div>

        {userReflection && (
          <div className={styles.userReflectionBlock}>
            <span className={styles.userReflectionLabel}>Diário de bordo</span>
            <p className={styles.userReflectionText}>
              Uma coisa que eu levo daqui é{' '}
              <span className={styles.userReflectionQuote}>{userReflection}</span>
            </p>
          </div>
        )}

        <div className={styles.closing}>
          <p>
            Leve o resultado como uma pista de treino. O jogo acaba aqui, mas as
            cenas continuam aparecendo na rua, na escola, no trabalho e nas conversas.
          </p>
        </div>

        <div className={styles.actions}>
          <Button onClick={onRestart} variant="ghost" fullWidth>
            Jogar de novo
          </Button>
        </div>
      </div>
    </Layout>
  );
}
