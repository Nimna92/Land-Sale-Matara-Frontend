'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </I18nextProvider>
  );
}