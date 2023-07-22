import { styled, createGlobalStyle } from "styled-components";
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 6.375em;
  height: 2.875em;
  background-color: white;
  border-radius: 30px;
  margin-top: 38px;
  margin-bottom: 41px;
  padding: 4px;
`;

export const Button = styled.button`
  width: 38px;
  height: 38px;
  background-color: black;
  border-radius: 30px;
  cursor: pointer;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    transition: background-color 500ms;
  }
`;
