import { Category, QuizData, Question } from "@/service/api/type";
import { useEffect, useState } from "react";
import { fetchQuizData } from "@/service/api/api";
import { QuizProps } from "./type";
import { useToggleColor } from "@/hooks/context/useToggleColor";

export const useQuizLogic = ({ params }: QuizProps) => {
  const { category } = params;
  const [selectedCategory, setSelectedCategory] = useState<Question[]>([]);
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [scoreMessage, setScoreMessage] = useState("");
  const [answered, setAnswered] = useState<boolean>(false);
  const [hoverDisabled, setHoverDisabled] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const quizData: QuizData = await fetchQuizData();
        const selectedCategoryData: Category | undefined =
          quizData[category as keyof QuizData];
        setSelectedCategory(
          Array.isArray(selectedCategoryData) ? selectedCategoryData : []
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
    setIsCorrect(false);
    setIsWrong(false);
    setAnswered(false);
    setHoverDisabled(false);
  };

  const handleRestart = () => {
    setCurrentQuestionId(1);
    setIsCorrect(false);
    setIsWrong(false);
    setAnswered(false);
    setHoverDisabled(false);
    setScore(0);
  };

  const handleOptionClick = (selectedOption: string, correctOption: string) => {
    if (!answered) {
      setHoverDisabled(true);
      setSelectedOption(selectedOption);
      if (selectedOption === correctOption) {
        setIsCorrect(true);
        setScore((prevScore) => prevScore + 10);
        setScoreMessage("+10");
      } else {
        setIsWrong(true);
        setScore((prevScore) => prevScore - 5);
        setScoreMessage("-5");
      }
      setAnswered(true);
    }
  };

  const { theme } = useToggleColor();
  const textStyle = {
    color: theme.backgroundColor === "white" ? "black" : "white",
  };

  return {
    handleNextQuestion,
    handleOptionClick,
    handleRestart,
    selectedCategory,
    currentQuestionId,
    isCorrect,
    isWrong,
    selectedOption,
    answered,
    textStyle,
    hoverDisabled,
    score,
    scoreMessage,
  };
};
