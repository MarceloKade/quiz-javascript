'use client'
import { ButtonCategory } from '@/components/button/Button';
import { ContainerButton } from '@/components/button/style';
import Text from '@/components/text/Text';

export default function Home() {
  return (
    <>
      <main>
        <ContainerButton>
          <Text />
          <ButtonCategory text="Básico" category="basic" type={'basic'} />
          <ButtonCategory text="Intermediário" category="intermediary" type={'intermediary'} />
          <ButtonCategory text="Avançado" category="advanced" type={'advanced'} />
        </ContainerButton>
      </main>
    </>
  );
}
