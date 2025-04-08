// Array<{Question:"string",OptionOne:"string",OptionTwo:"string",OptionThree:"string",OptionFour:"string", Answer:"optionNumber", explanation:"string"}>
"use client";
export type QuizData = {
  Question: string;
  OptionOne: string;
  OptionTwo: string;
  OptionThree: string;
  OptionFour: string;
  Answer: number | boolean;
  explanation: string;
}[];

import "./quizesComponent.scss";
import QuizComponent from "./quizComponent";
import { useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function QuizzesComponent({ quizData }: { quizData: QuizData }) {
  const initialQuizData = quizData.map((quiz, index) => {
    return {
      Question: quiz.Question,
      OptionOne: quiz.OptionOne,
      OptionTwo: quiz.OptionTwo,
      OptionThree: quiz.OptionThree,
      OptionFour: quiz.OptionFour,
      Answer: false,
      explanation: "",
    };
  });

  const [quizzes, setQuizzes] = useState<QuizData>(initialQuizData);
  const [score, updateScore] = useState<number | null>(null);
  const quizContainer = useRef<HTMLDivElement>(null);

  function evaluateQuiz() {
    let score = 0;
    const quizComponents = quizContainer.current?.children;
    if (!quizComponents) return;
    for (let i = 0; i < quizComponents.length; i++) {
      const options = quizComponents[i].querySelectorAll("input");
      // check if a option is checked or not
      if (!Array.from(options).some((option) => option.checked)) {
        toast.error("Please answer all the questions", { duration: 2000 });
        return;
      }
    }

    // now check the answers
    for (let i = 0; i < quizComponents.length; i++) {
      const options = quizComponents[i].querySelectorAll("input");
      const selectedOption = Array.from(options).find(
        (option) => option.checked
      );
      const selectedOptionIndex = Array.from(options).indexOf(
        selectedOption as HTMLInputElement
      );
      const correctOptionIndex = (quizData[i].Answer as unknown as number) - 1;

      if (selectedOptionIndex === correctOptionIndex) {
        score += 1;
      }
    }
    // update class of correct option and incorrect option
    for (let i = 0; i < quizComponents.length; i++) {
      const options = quizComponents[i].querySelectorAll("input");
      const selectedOption = Array.from(options).find(
        (option) => option.checked
      );
      const selectedOptionIndex = Array.from(options).indexOf(
        selectedOption as HTMLInputElement
      );
      const correctOptionIndex = (quizData[i].Answer as unknown as number) - 1;
      if (selectedOptionIndex === correctOptionIndex) {
        quizComponents[i].classList.add("correct");
      } else {
        quizComponents[i].classList.add("incorrect");
      }
    }
    updateScore(score);
    setQuizzes(quizData);
    // smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  console.log("quizzes", quizData);

  return (
    <div className="quizzesComponent">
      {score !== null ? (
        <div className="score">
          <h2>Your Score is {score}</h2>
        </div>
      ) : null}
      <div className="quizzesContainer" ref={quizContainer}>
        {quizzes.map((quiz) => (
          <QuizComponent
            key={quiz.Question}
            QuestionNumber={quizzes.indexOf(quiz)}
            Question={quiz.Question}
            OptionOne={quiz.OptionOne}
            OptionTwo={quiz.OptionTwo}
            OptionThree={quiz.OptionThree}
            OptionFour={quiz.OptionFour}
            Answer={quiz.Answer}
            explanation={quiz.explanation}
          />
        ))}
      </div>
      <div className="buttonContainer">
        <button onClick={evaluateQuiz}>Submit</button>
      </div>
    </div>
  );
}
