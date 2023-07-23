import { useToggleColor } from "@/hooks/context/useToggleColor";
import * as B from "./style";
import * as T from "../text/style";
import Link from "next/link";
import { ButtonProps } from "./type";

export function ButtonCategory({ text, category, type }: ButtonProps) {
    const { theme } = useToggleColor();

    const textStyle = {
        color: theme.backgroundColor === "white" ? "black" : "white",
    };

    let ContainerButtonStyle;
    if (type === "basic") {
        ContainerButtonStyle = B.ContainerButtonBasic;
    } else if (type === "intermediary") {
        ContainerButtonStyle = B.ContainerButtonIntermediary;
    } else if (type === "advanced") {
        ContainerButtonStyle = B.ContainerButtonAdvanced;
    } else {
        ContainerButtonStyle = B.ContainerButtonBasic;
    }

    return (
        <>
            <Link href={`/quiz/${category}`}>
                <ContainerButtonStyle>
                    <T.Text style={textStyle} title={text}>{text}</T.Text>
                </ContainerButtonStyle>
            </Link>
        </>
    );
};