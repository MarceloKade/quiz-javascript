import StyledComponentsRegistry from '../../registry'
import AppWrapper from './AppWrapper'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: "400" })

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
        <AppWrapper>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </AppWrapper>
      </body>
    </html>
  )
}