import { Rubik, Belleza } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

const belleza = Belleza({
  subsets: ['latin'],
  variable: '--font-belleza',
  weight: '400',
});

export const fonts = {
  rubik,
  belleza,
};
