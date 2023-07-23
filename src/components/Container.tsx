'use client'
import { ButtonCategory } from './button/Button';
import { ContainerButton } from './button/style';
import Text from './text/Text';

export default function Container() {
    return (
        <>
            <ContainerButton>
                <Text />
                <ButtonCategory text="Básico" category="basic" type={'basic'} />
                <ButtonCategory text="Intermediário" category="intermediary" type={'intermediary'} />
                <ButtonCategory text="Avançado" category="advanced" type={'advanced'} />
            </ContainerButton>
        </>
    );
}
