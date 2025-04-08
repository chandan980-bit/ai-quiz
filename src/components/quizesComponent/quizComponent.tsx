export default function QuizComponent({
  Question,
  OptionOne,
  OptionTwo,
  OptionThree,
  OptionFour,
  Answer,
  explanation,
  QuestionNumber,
}: {
  Question: string;
  OptionOne: string;
  OptionTwo: string;
  OptionThree: string;
  OptionFour: string;
  Answer: number | boolean | string;
  explanation: string;
  QuestionNumber: number;
}) {
  const optionClicked = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.stopPropagation();
    const target = e.currentTarget as HTMLDivElement;
    const options = target.parentElement?.querySelectorAll("input");
    options?.forEach((option) => {
      option.checked = false;
    });

    const currentInput = (e.currentTarget as HTMLDivElement).querySelector(
      "input"
    );
    if (currentInput) {
      currentInput.checked = true;
    }
  };
  return (
    <div className={`quizComponent`}>
      <div className="tittle">
        <h2>{Question}</h2>
      </div>
      <div className="optionsContainer">
        <div
          onClick={optionClicked}
          className={
            Answer
              ? (Answer === 1 || Answer === "1") 
                ? "option correct"
                : "option incorrect"
              : "option"
          }
        >
          <input
            type="radio"
            name={`question${QuestionNumber}OptionOne`}
            id={`question${QuestionNumber}OptionOne`}
          />
          <label>{OptionOne}</label>
        </div>
        <div
          onClick={optionClicked}
          className={
            Answer
              ? (Answer === 2 || Answer === "2") 
                ? "option correct"
                : "option incorrect"
              : "option"
          }
        >
          <input
            type="radio"
            id={`question${QuestionNumber}OptionTwo`}
            name={`question${QuestionNumber}OptionTwo`}
          />
          <label>{OptionTwo}</label>
        </div>
        <div
          onClick={optionClicked}
          className={
            Answer
              ? (Answer === 3 || Answer === "3") 
                ? "option correct"
                : "option incorrect"
              : "option"
          }
        >
          <input
            type="radio"
            name={`question${QuestionNumber}OptionThree`}
            id={`question${QuestionNumber}OptionThree`}
          />
          <label>{OptionThree}</label>
        </div>
        <div
          onClick={optionClicked}
          className={
            Answer
              ? (Answer === 4 || Answer === "4") 
                ? "option correct"
                : "option incorrect"
              : "option"
          }
        >
          <input
            type="radio"
            name={`question${QuestionNumber}OptionFour`}
            id={`question${QuestionNumber}OptionFour`}
          />
          <label>{OptionFour}</label>
        </div>
      </div>
      <div
        className={
          explanation.trim() === "" ? "explanation hidden" : "explanation"
        }
      >
        <h3>Explanation</h3>
        <p>{explanation}</p>
      </div>
    </div>
  );
}
