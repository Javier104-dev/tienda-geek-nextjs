import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals/reset.css';
import '@/styles/globals/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tienda Geek',
  description: 'Tienda Geek, created by Javier Villca',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
