import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { inter, montserrat, openSans, roboto } from '@/app/fonts';
import Header from '@/components/header';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Task manager', description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn(inter.variable, roboto.variable, openSans.variable, montserrat.variable)}>
    <body className='font-inter flex flex-col min-h-screen justify-between'>
    <Header />

    <main className='flex-grow'>
      {children}
    </main>

    <footer></footer>
    </body>
    </html>
  );
}
