"use client";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "styles/globalStyle";
import Header from "@/components/application/Header";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
