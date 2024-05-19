import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import { cn } from '@/lib/utils';
import { fonts } from '@/utils/font';
import { AppWrapper } from '@/components/ui/AppWrapper';
import { Header } from '@/components/ui/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ijele SC',
  description: 'Website for Ijele SC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, fonts.rubik.variable)}>
        <Providers>
          <AppWrapper>
            <Header />
            {children}
          </AppWrapper>
        </Providers>
      </body>
    </html>
  );
}
