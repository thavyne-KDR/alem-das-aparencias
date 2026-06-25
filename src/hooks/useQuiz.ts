import { useReducer } from 'react';
import type { QuizState, QuizAction } from '../types';
import { questions } from '../data/questions';

const initialState: QuizState = {
  currentPage: 'home',
  currentQuestionIndex: 0,
  answers: [],
  selectedOption: null,
  userReflection: '',
};

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
      if (nextIndex >= questions.length) {
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
      return initialState;

    default:
      return state;
  }
}

export function useQuiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return { state, dispatch };
}
