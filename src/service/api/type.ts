interface Option {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface Question {
  id: number;
  question: string;
  option: Option;
  correct: string;
}

export interface Category {
  basic: Question[];
  intermediary: Question[];
  advanced: Question[];
}

export interface QuizData {
  [key: string]: Category;
}
