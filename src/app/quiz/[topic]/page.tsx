import NavBar from "@/components/nav/nav";
import "./quiz.scss";
import { useParams } from "next/navigation";
import GenerateQuizAI from "@/ai/generateQuiz.ai";
import { Suspense } from "react";
import QuizzesComponent from "@/components/quizesComponent/quizesComoonent";
import Loading from "@/components/loadingComponent/loadingContainer";
import QuizComponentWrapper from "@/components/quizesComponent/quizComponentWrapper";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  return (
    <div className="quizPage">
      <NavBar />
      <div className="quizContainer">
        <div className="tittle">
          <h1>{decodeURIComponent(topic)} Quiz</h1>
        </div>
        <div className="quizzes">
          <Suspense fallback={<Loading message="Generating Quizzes" />}>
            <QuizComponentWrapper topic={decodeURIComponent(topic)} />
          </Suspense>
          {/* <Loading message="Generating Quizzes" /> */}
        </div>
      </div>
    </div>
  );
}
