import * as B from "./style";
import * as T from "../text/style";
import { TextProps } from "../text/type";

export function ButtonBasic({ text }: TextProps) {
    return (
        <B.ContainerButtonBasic>
            <T.Text title={text}>{text}</T.Text>
        </B.ContainerButtonBasic>
    )
}

export function ButtonIntermediary({ text }: TextProps) {
    return (
        <B.ContainerButtonIntermediary>
            <T.Text title={text}>{text}</T.Text>
        </B.ContainerButtonIntermediary>
    )
}

export function ButtonAdvanced({ text }: TextProps) {
    return (
        <B.ContainerButtonAdvanced>
            <T.Text title={text}>{text}</T.Text>
        </B.ContainerButtonAdvanced>
    )
}