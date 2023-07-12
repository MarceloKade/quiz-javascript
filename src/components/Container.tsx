'use client'
import { ButtonAdvanced, ButtonBasic, ButtonIntermediary } from '@/components/Button/Button';
import * as C from './Button/style';
import Text from './text/Text';

export default function Container() {
    return (
        <>
            <C.Container>
                <Text />
                <ButtonBasic text="Básico" />
                <ButtonIntermediary text="Intermediário" />
                <ButtonAdvanced text="Avançado" />
            </C.Container>
        </>
    );
}
