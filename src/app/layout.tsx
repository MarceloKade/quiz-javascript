'use client'
import { ToggleColorProvider } from '@/hooks/context/useToggleColor'
import StyledComponentsRegistry from '../../registry'
import './globals.css'
import { Roboto } from 'next/font/google'
import ToggleColorButton from '@/components/toggleColorButton/ToggleColorButton'

const roboto = Roboto({ subsets: ['latin'], weight: "400", variable: '--font-roboto' })

export const metadata = {
  title: 'Quiz JavaScript',
  description: 'Um quiz com 3 categorias para treinar JavaScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} font-sans`}>
        <StyledComponentsRegistry>
          <ToggleColorProvider>
            <header>
              <ToggleColorButton />
            </header>
            {children}
          </ToggleColorProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}