import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals/reset.css';
import '@/styles/globals/globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


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
      <body className={inter.className}>
        <Header
          container={'container'}
        />
        <main className='main'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
