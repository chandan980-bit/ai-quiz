"use client";
import "./quizSearch.scss";
import { useRef } from "react";
import { FormEvent } from "react";
import toast from "react-hot-toast";

export default function QuizSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const goToQuizPage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputRef.current) return;

    const topic = inputRef.current?.value;
    if (topic.trim() === "") {
      toast.error("Enter a topic");
      return;
    }
    if (topic.length > 45) {
      toast.error("Topic length should be less than 45 characters");
      return;
    }
    if (topic) {
      window.location.href = `/quiz/${topic}`;
    }
  };

  return (
    <div className="quizSearchComponent">
      <div className="tittle">
        <h1>Welcome to PixiQuiz</h1>
        <p>Enter any topic to generate quizzes on it.</p>
      </div>

      <form className="searchComponent" onSubmit={goToQuizPage}>
        <input ref={inputRef} type="text" placeholder="Enter a topic" />
        <button>Generate Quiz</button>
      </form>
    </div>
  );
}
