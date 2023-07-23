import { styled } from "styled-components";

export const Text = styled.p`
  font-size: 80px;
  transition: color 500ms;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`;

export const TextQuiz = styled.h1`
  font-size: 80px;
  color: #ff9800;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`;

export const TextJavaScript = styled.span`
  font-size: 80px;
  color: #ff1744;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`;

export const TextCategory = styled.h2`
  font-size: 80px;
  color: #2196f3;
  margin-bottom: 41px;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`;
