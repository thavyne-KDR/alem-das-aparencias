import { useReducer } from 'react';
import type { QuizState, QuizAction, Question } from '../types';
import { questions } from '../data/questions';

const QUIZ_SIZE = 10;

function pickRandomQuestions(count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function makeInitialState(): QuizState {
  return {
    currentPage: 'home',
    currentQuestionIndex: 0,
    answers: [],
    selectedOption: null,
    userReflection: '',
    selectedQuestions: pickRandomQuestions(QUIZ_SIZE),
  };
}

const initialState: QuizState = makeInitialState();

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'GO_TO_INTRODUCTION':
      return { ...state, currentPage: 'introduction' };

    case 'GO_TO_QUESTIONS':
      return { ...state, currentPage: 'question', currentQuestionIndex: 0 };

    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };

    case 'CONFIRM_ANSWER':
      if (state.selectedOption === null) return state;
      return {
        ...state,
        answers: [...state.answers, state.selectedOption],
        currentPage: 'reflection',
      };

    case 'NEXT_QUESTION': {
      const nextIndex = state.currentQuestionIndex + 1;
      if (nextIndex >= state.selectedQuestions.length) {
        return {
          ...state,
          currentPage: 'final-reflection',
          currentQuestionIndex: nextIndex,
          selectedOption: null,
        };
      }
      return {
        ...state,
        currentPage: 'question',
        currentQuestionIndex: nextIndex,
        selectedOption: null,
      };
    }

    case 'SET_USER_REFLECTION':
      return { ...state, userReflection: action.payload };

    case 'GO_TO_RESULTS':
      return { ...state, currentPage: 'results' };

    case 'RESTART':
      return makeInitialState();

    default:
      return state;
  }
}

export function useQuiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return { state, dispatch };
}
