import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Start from "./Start";
import Quiz from "./Quiz";

const App = () => {
  const [questionCount, setQuestionCount] = React.useState<number>(5);
  const [questions, setQuestions] = React.useState([]);
  const [start, setStart] = React.useState(false);

  const handleQuestionChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setQuestionCount(e.target.value as number);
  };

  const fetchQuestions = async (amount: number) => {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=" + amount
    );
    const questions = await response.json();
    return questions.results;
  };

  const handleStart = async () => {
    const questions = await fetchQuestions(questionCount);
    setQuestions(questions);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <h1>React Quiz App</h1>
        {questions.length === 0 ? (
          <Start
            handleChange={handleQuestionChange}
            handleStart={handleStart}
            questionCount={questionCount}
          />
        ) : (
          <Quiz questions={questions} />
        )}
      </Container>
    </div>
  );
};

export default App;
