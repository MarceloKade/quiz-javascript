import Link from "next/link";
import { styled } from "styled-components";

export const isCorrect = styled.p`
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(24px, 4vw, 60px);
  color: #2ecc71;
`;
export const isWrong = styled.p`
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(24px, 4vw, 60px);
  color: #ff1744;
`;

export const TimeExpired = styled.p`
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(24px, 4vw, 60px);
  color: #ff1744;
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 60px;
  margin-top: 5rem;

  @media (max-width: 640px) {
    justify-content: center;
    margin-left: 35px;
  }
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
  opacity: ${({ opacity }) => (opacity !== undefined ? opacity : 1)};
  transition: opacity 0.5s;
`;

export const Container = styled.div`
  padding-inline: 60px;
  margin-top: 40px;

  @media (max-width: 640px) {
    padding-inline: 20px;
  }
`;

export const QuestionContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: clamp(12px, 4vw, 48px);
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
  font-size: clamp(12px, 4vw, 36px);
  list-style: none;
`;

export const OptionContainer = styled.div<{
  isDisabled?: boolean;
  isAnsweredCorrectly?: boolean;
  isAnsweredWrong?: boolean;
}>`
  display: flex;
  user-select: none;
  gap: 1em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  height: 1.4em;
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
  width: 1.2em;
  height: 1.2em;
  font-size: clamp(12px, 5vw, 40px);
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

  @media (max-width: 640px) {
    width: 28px;
    height: 28px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

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

  @media (max-width: 640px) {
    width: 15px;
    height: 2.5px;
    margin-top: 7.5px;
    margin-bottom: 5px;
  }
`;

export const NextIconTwo = styled.div`
  width: 30px;
  height: 5px;
  margin-bottom: 15px;
  transform: rotate(-35deg);
  background-color: white;
  border-radius: 10px;

  @media (max-width: 640px) {
    width: 15px;
    height: 2.5px;
    margin-bottom: 7.5px;
  }
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

  @media (max-width: 640px) {
    width: 28px;
    height: 28px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

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

  @media (max-width: 640px) {
    width: 15px;
    height: 2.5px;
    margin-top: 7.5px;
    margin-bottom: 5px;
    transform: rotate(-35deg);
  }
`;

export const RestartIconTwo = styled.div`
  width: 30px;
  height: 5px;
  margin-bottom: 15px;
  transform: rotate(35deg);
  background-color: white;
  border-radius: 10px;

  @media (max-width: 640px) {
    width: 15px;
    height: 2.5px;
    margin-bottom: 7.5px;
    transform: rotate(35deg);
  }
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

  @media (max-width: 640px) {
    width: 28px;
    height: 28px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

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

  @media (max-width: 640px) {
    width: 2.5px;
    height: 15px;
    margin-top: 3px;
    margin-left: 7.5px;
    margin-right: 5px;
    transform: rotate(-35deg);
  }
`;

export const IndexIconTwo = styled.div`
  width: 5px;
  height: 30px;
  margin-top: 6px;
  margin-right: 15px;
  transform: rotate(35deg);
  background-color: white;
  border-radius: 10px;

  @media (max-width: 640px) {
    width: 2.5px;
    height: 15px;
    margin-top: 3px;
    margin-right: 7.5px;
    transform: rotate(35deg);
  }
`;
