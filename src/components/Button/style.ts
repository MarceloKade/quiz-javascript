import { styled } from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const ContainerButtonBasic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 714px;
  height: 146.67px;
  background-color: #ff9800;
  border-radius: 100px;
  margin-bottom: 47px;
  cursor: pointer;

  &:hover {
    background-color: #ffb74d;
  }
  &:active {
    background-color: #d87f33;
  }

  @media (max-width: 640px) {
    width: 314px;
    height: 100.67px;
  }
`;

export const ContainerButtonIntermediary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 714px;
  height: 146.67px;
  background-color: #2196f3;
  border-radius: 100px;
  margin-bottom: 47px;
  cursor: pointer;

  &:hover {
    background-color: #64b5f6;
  }
  &:active {
    background-color: #1369c3;
  }
  @media (max-width: 640px) {
    width: 314px;
    height: 100.67px;
  }
`;

export const ContainerButtonAdvanced = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 714px;
  height: 146.67px;
  background-color: #ff1744;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: #ff5c8d;
  }
  &:active {
    background-color: #d33658;
  }
  @media (max-width: 640px) {
    width: 314px;
    height: 100.67px;
  }
`;
