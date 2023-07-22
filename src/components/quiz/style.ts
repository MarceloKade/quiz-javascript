import Link from "next/link";
import { styled } from "styled-components";

export const isCorrect = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 48px;
  color: #2ecc71;
`;
export const isWrong = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 48px;
  color: #ff1744;
`;

export const TimeExpired = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 60px;
  color: #ff1744;
`;
export const Container = styled.div`
  padding-left: 60px;
  margin-top: 96px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 60px;
`;

export const ScoreTotal = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: green;
  border: solid 2px;
  border-radius: 40px;
  font-size: 40px;
`;

export const ScorePoints = styled.p<{
  isAnsweredCorrectly?: boolean;
  isAnsweredWrong?: boolean;
  timeIsUp?: boolean;
  opacity?: number;
}>`
  color: ${({ isAnsweredCorrectly, isAnsweredWrong, timeIsUp }) =>
    timeIsUp
      ? "red"
      : isAnsweredCorrectly
      ? "green"
      : isAnsweredWrong
      ? "red"
      : "transparent"};
  font-size: 30px;
  opacity: ${({ opacity }) =>
    opacity !== undefined ? opacity : 1}; // Defina a opacidade
  transition: opacity 0.5s; // Adicione a transição suave para a propriedade opacity
`;

export const QuestionContainer = styled.ul`
  display: flex;
  gap: 8px;
  font-size: 48px;
`;

export const QuestionText = styled.p`
  font-weight: bold;
  user-select: none;
`;

export const OptionList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  gap: 40px;
  font-size: 36px;
  list-style: none;
`;

export const OptionContainer = styled.div<{
  isDisabled?: boolean;
  isAnsweredCorrectly?: boolean;
  isAnsweredWrong?: boolean;
}>`
  display: flex;
  user-select: none;
  gap: 36px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  height: 50px;
  padding-left: 4px;
  transition: background-color 0.2s ease-in-out;
  background-color: ${({ isAnsweredCorrectly, isAnsweredWrong }) =>
    isAnsweredCorrectly ? "green" : isAnsweredWrong ? "red" : "transparent"};

  &:hover {
    background-color: ${({ isDisabled }) =>
      isDisabled ? "none" : "rgba(0, 116, 217, 0.6)"};
  }
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Option = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #ff9800;
  border-radius: 30px;
  align-self: center;
`;

export const NextQuestionContainer = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;
  background-color: #ff9800;
  border-radius: 40px;
  border: none;

  &:hover {
    background-color: #ffb74d;
  }

  &:active {
    background-color: #d87f33;
  }
`;

export const NextIconOne = styled.div`
  width: 30px;
  height: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
  background-color: white;
  transform: rotate(35deg);
  border-radius: 10px;
`;
export const NextIconTwo = styled.div`
  width: 30px;
  height: 5px;
  margin-bottom: 15px;
  transform: rotate(-35deg);
  background-color: white;
  border-radius: 10px;
`;

export const Restart = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;
  background-color: #ff9800;
  border-radius: 40px;
  border: none;

  &:hover {
    background-color: #ffb74d;
  }

  &:active {
    background-color: #d87f33;
  }
`;

export const RestartIconOne = styled.div`
  width: 30px;
  height: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
  background-color: white;
  transform: rotate(-35deg);
  border-radius: 10px;
`;
export const RestartIconTwo = styled.div`
  width: 30px;
  height: 5px;
  margin-bottom: 15px;
  transform: rotate(35deg);
  background-color: white;
  border-radius: 10px;
`;
export const Index = styled(Link)`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;
  background-color: #ff9800;
  border-radius: 40px;
  border: none;

  &:hover {
    background-color: #ffb74d;
  }

  &:active {
    background-color: #d87f33;
  }
`;

export const IndexIconOne = styled.div`
  width: 5px;
  height: 30px;
  margin-top: 6px;
  margin-left: 15px;
  margin-right: 10px;
  background-color: white;
  transform: rotate(-35deg);
  border-radius: 10px;
`;
export const IndexIconTwo = styled.div`
  width: 5px;
  height: 30px;
  margin-top: 6px;
  margin-right: 15px;
  transform: rotate(35deg);
  background-color: white;
  border-radius: 10px;
`;
