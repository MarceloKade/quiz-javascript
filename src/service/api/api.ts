import axios from "axios";
import { QuizData } from "./type";

export async function fetchQuizData(): Promise<QuizData> {
  try {
    const response = await axios.get<QuizData>("/db.json");
    const quizData = response.data;
    console.log("Dados do quiz:", quizData);
    return quizData;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao obter os dados do quiz.");
  }
}
