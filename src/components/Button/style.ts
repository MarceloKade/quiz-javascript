import { styled } from "styled-components";

export const Container = styled.div`
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
  background-color: #FF9800;
  border-radius: 100px;
  margin-bottom: 47px;
  cursor: pointer;

  &:hover {
    background-color: #FFB74D;
  }
  &:active {
    background-color: #D87F33;
  }
`;

export const ContainerButtonIntermediary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 714px;
  height: 146.67px;
  background-color: #2196F3;
  border-radius: 100px;
  margin-bottom: 47px;
  cursor: pointer;

    &:hover {
    background-color: #64B5F6;
  }
  &:active {
    background-color: #1369C3;
  }
`;

export const ContainerButtonAdvanced = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 714px;
  height: 146.67px;
  background-color: #FF1744;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    background-color: #FF5C8D;
  }
  &:active {
    background-color: #D33658;
  }
`;