import { useToggleColor } from "@/hooks/context/useToggleColor";
import Link from "next/link";
import { ButtonProps } from "./type";
import { ContainerButtonAdvanced, ContainerButtonBasic, ContainerButtonIntermediary } from "./style";
import * as T from "../text/style";

export function ButtonCategory({ text, category, type }: ButtonProps) {
    const { theme } = useToggleColor();

    const textStyle = {
        color: theme.backgroundColor === "white" ? "black" : "white",
    };

    let ContainerButtonStyle;
    if (type === "basic") {
        ContainerButtonStyle = ContainerButtonBasic;
    } else if (type === "intermediary") {
        ContainerButtonStyle = ContainerButtonIntermediary;
    } else if (type === "advanced") {
        ContainerButtonStyle = ContainerButtonAdvanced;
    } else {
        ContainerButtonStyle = ContainerButtonBasic;
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