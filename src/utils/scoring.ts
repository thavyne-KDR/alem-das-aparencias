import type { CategoryScores, Question, ResultSummary } from '../types';

export function calculateScores(questions: Question[], answers: number[]): CategoryScores {
  const totals: CategoryScores = { escuta: 0, contexto: 0, atitude: 0, reflexao: 0 };
  const maxPerCategory = questions.length * 3;

  answers.forEach((answerIndex, questionIndex) => {
    const scores = questions[questionIndex].options[answerIndex].scores;
    totals.escuta += scores.escuta;
    totals.contexto += scores.contexto;
    totals.atitude += scores.atitude;
    totals.reflexao += scores.reflexao;
  });

  return {
    escuta: Math.round((totals.escuta / maxPerCategory) * 100),
    contexto: Math.round((totals.contexto / maxPerCategory) * 100),
    atitude: Math.round((totals.atitude / maxPerCategory) * 100),
    reflexao: Math.round((totals.reflexao / maxPerCategory) * 100),
  };
}

const categoryLabels: Record<keyof CategoryScores, string> = {
  escuta: 'Escuta',
  contexto: 'Contexto',
  atitude: 'Ação',
  reflexao: 'Pausa crítica',
};

const categoryDescriptions: Record<keyof CategoryScores, string> = {
  escuta:
    'Sua leitura começa pela escuta. Você tende a perceber desconfortos, acolher relatos e levar a sério o que outra pessoa está vivendo antes de explicar por cima.',
  contexto:
    'Você costuma procurar o padrão por trás da cena. Em vez de olhar só para o caso isolado, tenta conectar história, poder, território, linguagem e oportunidade.',
  atitude:
    'Sua habilidade em destaque é agir quando a cena pede presença. Você tende a sair da arquibancada e ajudar a mudar o rumo da situação.',
  reflexao:
    'Seu ponto forte é fazer uma pausa boa antes de responder. Essa atenção ajuda a desmontar respostas prontas e abre espaço para escolhas mais justas.',
};

export function buildResultSummary(scores: CategoryScores): ResultSummary {
  const dominant = (Object.keys(scores) as (keyof CategoryScores)[]).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  return {
    scores,
    dominantCategory: dominant,
    dominantLabel: categoryLabels[dominant],
    dominantDescription: categoryDescriptions[dominant],
  };
}
