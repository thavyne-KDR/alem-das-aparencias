import './styles/global.css';
import { useQuiz } from './hooks/useQuiz';
import { questions } from './data/questions';
import { Home } from './pages/Home/Home';
import { Introduction } from './pages/Introduction/Introduction';
import { Questions } from './pages/Questions/Questions';
import { Reflection } from './pages/Reflection/Reflection';
import { FinalReflection } from './pages/FinalReflection/FinalReflection';
import { Results } from './pages/Results/Results';

export default function App() {
  const { state, dispatch } = useQuiz();

  const totalQuestions = questions.length;
  const isLastQuestion = state.currentQuestionIndex === totalQuestions - 1;

  switch (state.currentPage) {
    case 'home':
      return <Home onStart={() => dispatch({ type: 'GO_TO_INTRODUCTION' })} />;

    case 'introduction':
      return <Introduction onStart={() => dispatch({ type: 'GO_TO_QUESTIONS' })} />;

    case 'question':
      return (
        <Questions
          question={questions[state.currentQuestionIndex]}
          questionNumber={state.currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          selectedOption={state.selectedOption}
          onSelect={(index) => dispatch({ type: 'SELECT_OPTION', payload: index })}
          onConfirm={() => dispatch({ type: 'CONFIRM_ANSWER' })}
        />
      );

    case 'reflection': {
      const reflectionQuestionIndex = state.answers.length - 1;
      const lastAnswerIndex = state.answers[reflectionQuestionIndex];

      return (
        <Reflection
          question={questions[reflectionQuestionIndex]}
          selectedOptionIndex={lastAnswerIndex}
          questionNumber={state.answers.length}
          totalQuestions={totalQuestions}
          isLast={isLastQuestion && state.answers.length === totalQuestions}
          onNext={() => dispatch({ type: 'NEXT_QUESTION' })}
        />
      );
    }

    case 'final-reflection':
      return (
        <FinalReflection
          value={state.userReflection}
          onChange={(text) => dispatch({ type: 'SET_USER_REFLECTION', payload: text })}
          onSubmit={() => dispatch({ type: 'GO_TO_RESULTS' })}
        />
      );

    case 'results':
      return (
        <Results
          answers={state.answers}
          userReflection={state.userReflection}
          onRestart={() => dispatch({ type: 'RESTART' })}
        />
      );

    default:
      return null;
  }
}
