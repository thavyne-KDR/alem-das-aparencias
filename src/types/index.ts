export interface CategoryScores {
  escuta: number;
  contexto: number;
  atitude: number;
  reflexao: number;
}

export interface Option {
  text: string;
  scores: CategoryScores;
}

export interface QuestionReflection {
  title: string;
  text: string;
}

export interface Question {
  id: number;
  situation: string;
  options: Option[];
  reflection: QuestionReflection;
  focus: keyof CategoryScores;
}

export type Page =
  | 'home'
  | 'introduction'
  | 'question'
  | 'reflection'
  | 'final-reflection'
  | 'results';

export interface QuizState {
  currentPage: Page;
  currentQuestionIndex: number;
  answers: number[];
  selectedOption: number | null;
  userReflection: string;
  selectedQuestions: Question[];
}

export type QuizAction =
  | { type: 'GO_TO_INTRODUCTION' }
  | { type: 'GO_TO_QUESTIONS' }
  | { type: 'SELECT_OPTION'; payload: number }
  | { type: 'CONFIRM_ANSWER' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'SET_USER_REFLECTION'; payload: string }
  | { type: 'GO_TO_RESULTS' }
  | { type: 'RESTART' };

export interface ResultSummary {
  scores: CategoryScores;
  dominantCategory: keyof CategoryScores;
  dominantLabel: string;
  dominantDescription: string;
}
