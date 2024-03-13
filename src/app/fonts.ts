import { Inter, JetBrains_Mono, Montserrat, Open_Sans, Roboto } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'], display: 'swap', variable: '--font-inter',
});

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const jetBrains = JetBrains_Mono({
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--jet-brains',
});