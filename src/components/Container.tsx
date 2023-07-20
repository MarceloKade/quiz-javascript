'use client'
import { ButtonAdvanced, ButtonBasic, ButtonIntermediary } from './button/Button';
import * as C from './button/style';
import Text from './text/Text';

export default function Container() {
    return (
        <>
            <C.Container>
                <Text />
                <ButtonBasic text="Básico" category="basic" />
                <ButtonIntermediary text="Intermediário" category="intermediary" />
                <ButtonAdvanced text="Avançado" category="advanced" />
            </C.Container>
        </>
    );
}
