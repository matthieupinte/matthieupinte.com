import { dir } from 'i18next'
import { Lora } from 'next/font/google'

import StyledComponentsRegistry from '../../lib/registry'
import '../globals.css'
import { languages } from '../i18n/config'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: '400',
})

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)} className={`${lora.variable}`}>
      <head />
      <body>
        <StyledComponentsRegistry>
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
