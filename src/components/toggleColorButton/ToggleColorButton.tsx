'use client'
import { useToggleColor } from "@/hooks/context/useToggleColor";
import * as B from "./style";
import { GlobalStyle } from "./style";
import { ThemeProvider } from "styled-components";

export default function ToggleColorButton() {
    const { isClicked, handleClick } = useToggleColor();

    const containerButtonStyle = {
        backgroundColor: isClicked ? "black" : "white",
    };

    const buttonStyle = {
        backgroundColor: isClicked ? "white" : "black",
        transform: isClicked ? "translateX(-150%)" : "translateX(0)",
        transition: "background-color 500ms, transform 500ms",
    };

    return (
        <>
            <ThemeProvider theme={{ backgroundColor: isClicked ? "white" : "black" }}>
                <B.ContainerButton
                    style={containerButtonStyle}>
                    <B.Button
                        style={buttonStyle}
                        onClick={handleClick}
                    />
                </B.ContainerButton>
                <GlobalStyle />
            </ThemeProvider>
        </>
    );
}
