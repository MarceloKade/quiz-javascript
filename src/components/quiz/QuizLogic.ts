import { Category, QuizData, Question } from "@/service/api/type";
import { useEffect, useState } from "react";
import { fetchQuizData } from "@/service/api/api";
import { QuizProps } from "./type";

export const useQuizLogic = ({ params }: QuizProps) => {
  const { category } = params;
  const [selectedCategory, setSelectedCategory] = useState<Question[] | null>(
    null
  );
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isWrong, setIsWrong] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const quizData: QuizData = await fetchQuizData();
        const selectedCategoryData: Category | undefined =
          quizData[category as keyof QuizData];
        setSelectedCategory(
          Array.isArray(selectedCategoryData) ? selectedCategoryData : null
        );
      } catch (error) {
        console.error("Erro ao obter os dados do quiz:", error);
      }
    }

    fetchData();
  }, [category]);

  const handleNextQuestion = () => {
    setCurrentQuestionId((prevId) =>
      prevId < (selectedCategory?.length ?? 0) ? prevId + 1 : prevId
    );
    setIsCorrect(null);
    setIsWrong(null);
    setAnswered(false);
  };

  const handleOptionClick = (selectedOption: string, correctOption: string) => {
    if (!answered) {
      if (selectedOption === correctOption) {
        setIsCorrect(true);
      } else {
        setIsWrong(true);
      }
      setAnswered(true);
    }
  };

  return {
    selectedCategory,
    currentQuestionId,
    isCorrect,
    isWrong,
    answered,
    handleNextQuestion,
    handleOptionClick,
  };
};
