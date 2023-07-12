'use client'
import Container from '@/components/Container';
import ToggleColorButton from '@/components/toggleColorButton/ToggleColorButton';

export default function Home() {
  return (
    <>
      <header>
        <ToggleColorButton />

      </header>
      <main>
        <Container />
      </main>
    </>
  );
}
