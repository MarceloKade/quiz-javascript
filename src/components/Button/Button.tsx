'use client'
import * as B from "./style";
import * as T from "../text/style";
import { useToggleColor } from "@/hooks/context/useToggleColor";
import Link from "next/link";
import { ButtonProps } from "./type";



export function ButtonBasic({ text, category }: ButtonProps) {
    const { theme } = useToggleColor();

    const textStyle = {
        color: theme.backgroundColor === "white" ? "black" : "white",
    };

    return (
        <>
            <Link href={`/quiz/${category}`}>
                <B.ContainerButtonBasic>
                    <T.Text style={textStyle} title={text}>{text}</T.Text>
                </B.ContainerButtonBasic>
            </Link>
        </>
    );
}

export function ButtonIntermediary({ text, category }: ButtonProps) {
    const { theme } = useToggleColor();

    const textStyle = {
        color: theme.backgroundColor === "white" ? "black" : "white",
    };

    return (
        <>
            <Link href={`/quiz/${category}`}>
                <B.ContainerButtonIntermediary>
                    <T.Text style={textStyle} title={text}>{text}</T.Text>
                </B.ContainerButtonIntermediary>
            </Link>
        </>
    );
}

export function ButtonAdvanced({ text, category }: ButtonProps) {
    const { theme } = useToggleColor();

    const textStyle = {
        color: theme.backgroundColor === "white" ? "black" : "white",
    };
    return (
        <>
            <Link href={`/quiz/${category}`}>
                <B.ContainerButtonAdvanced>
                    <T.Text style={textStyle} title={text}>{text}</T.Text>
                </B.ContainerButtonAdvanced>
            </Link>
        </>
    )
}