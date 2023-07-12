'use client'
import Container from '@/components/Container';
import ToggleColorButton from '@/components/toggleColorButton/ToggleColorButton';
import { ToggleColorProvider } from '@/hooks/context/useToggleColor';

export default function Home() {
  return (
    <>
      <ToggleColorProvider>
        <header>
          <ToggleColorButton />

        </header>
        <main>
          <Container />
        </main>
      </ToggleColorProvider>
    </>
  );
}
