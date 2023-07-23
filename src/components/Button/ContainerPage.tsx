'use client'
import { ButtonCategory } from './Button';
import { ContainerButton } from './style';
import Text from '../text/Text';

export default function ContainerPage() {
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
