import NavBar from "@/components/nav/nav";
import "./homePage.scss";
import QuizSearch from "@/components/quizSearch/quizSearch";
import SeoFooterComponent from "@/components/seoFooter/seoFooter";

export default function Home() {
  return (
    <div className="homePage">
      <NavBar />
      <QuizSearch />
    </div>
  );
}
