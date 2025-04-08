import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function GenerateQuizAI(quizTopic: string) {
  if (!quizTopic || quizTopic.trim() === "" || quizTopic.length > 45) {
    return false;
  }
  const prompt = `Give me 10 quiz questions on topic ${quizTopic.trim()}. The out should only contain json data in format Array<{Question:"string",OptionOne:"string",OptionTwo:"string",OptionThree:"string",OptionFour:"string", Answer:"optionNumber", explanation:"string"}>`;
  try {
    const response = await model.generateContent(prompt);
    const responseText = response.response.text();
    // data will be inside ```json and ``` so we need to extract it
    const extractedData = responseText.match(/```json([\s\S]*?)```/);
    if (!extractedData) {
      return false;
    }
    const jsonRes = JSON.parse(extractedData[1]);
    return jsonRes;
  } catch (error) {
    console.log(error);
    return false;
  }
}
