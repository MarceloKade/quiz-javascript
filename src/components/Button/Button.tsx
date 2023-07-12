'use client'
import * as B from "./style";
import * as T from "../text/style";
import { TextProps } from "../text/type";
import { useToggleColor } from "@/hooks/context/useToggleColor";

export function ButtonBasic({ text }: TextProps) {
    const { theme } = useToggleColor();

    const textStyle = {
        color: theme.backgroundColor === "white" ? "black" : "white",
    };
    return (
        <B.ContainerButtonBasic>
            <T.Text style={textStyle} title={text}>{text}</T.Text>
        </B.ContainerButtonBasic>
    )
}

export function ButtonIntermediary({ text }: TextProps) {
    const { theme } = useToggleColor();

    const textStyle = {
        color: theme.backgroundColor === "white" ? "black" : "white",
    };

    return (
        <B.ContainerButtonIntermediary>
            <T.Text style={textStyle} title={text}>{text}</T.Text>
        </B.ContainerButtonIntermediary>
    );
}

export function ButtonAdvanced({ text }: TextProps) {
    const { theme } = useToggleColor();

    const textStyle = {
        color: theme.backgroundColor === "white" ? "black" : "white",
    };
    return (
        <B.ContainerButtonAdvanced>
            <T.Text style={textStyle} title={text}>{text}</T.Text>
        </B.ContainerButtonAdvanced>
    )
}