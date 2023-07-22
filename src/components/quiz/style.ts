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
export const Container = styled.div`
  padding-left: 60px;
  margin-top: 96px;
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
  background-color: "transparent";

  &:hover {
    background-color: ${({ isDisabled }) =>
      isDisabled ? "transparent" : "rgba(0, 116, 217, 0.6)"};
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

export const NextQuestion = styled.div`
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

  &:hover {
    background-color: #ffb74d;
  }

  &:active {
    background-color: #d87f33;
  }
`;

export const div1 = styled.div``;
export const div2 = styled.div`
  width: 30px;
  height: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
  background-color: white;
  transform: rotate(35deg);
  border-radius: 10px;
`;
export const div3 = styled.div`
  width: 30px;
  height: 5px;
  margin-bottom: 15px;
  transform: rotate(-35deg);
  background-color: white;
  border-radius: 10px;
`;
