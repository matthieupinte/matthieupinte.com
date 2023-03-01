import { dir } from "i18next";
import { languages } from "./i18n/config";

import StyledComponentsRegistry from "../lib/registry";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: "400",
});

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng = "en" },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)} className={`${lora.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StyledComponentsRegistry>
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
