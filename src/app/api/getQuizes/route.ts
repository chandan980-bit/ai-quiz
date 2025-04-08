import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";
import z from "zod";

const bodySchema = z.object({
  quizTopic: z.string(),
});

const apiKey = process.env.GOOGLE_API_KEY as string;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json(
      {
        message: "invalid request",
      },
      {
        status: 400,
      }
    );
  }
  if (bodySchema.safeParse(body).success === false) {
    return NextResponse.json(
      {
        message: bodySchema.safeParse(body).error,
      },
      {
        status: 400,
      }
    );
  }
  const { quizTopic } = bodySchema.parse(req.body);
  const prompt = `Give me 10 quiz questions on topic ${quizTopic}. The out should only contain json data in format Array<{Question:"string",OptionOne:"string",OptionTwo:"string",OptionThree:"string",OptionFour:"string", Answer:"optionNumber", explanation:"string"}>`;
  try {
    const response = await model.generateContent(prompt);
    const jsonRes = JSON.parse(response.response.text());
    return NextResponse.json({
      message: "success",
      data: jsonRes,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "internal Error",
      },
      {
        status: 500,
      }
    );
  }
}
