import { QuizData } from "@/service/api/type";
import { TextProps } from "../text/type";

export interface ButtonProps extends TextProps {
  category: keyof QuizData;
}
