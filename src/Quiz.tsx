export interface QuizProps {
  questions: number[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  console.log("🚀 ~ file: Quiz.tsx ~ line 6 ~ questions", questions);

  return <h2>Quiz</h2>;
};

export default Quiz;
