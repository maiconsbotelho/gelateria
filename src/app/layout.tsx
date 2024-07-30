import Header from '@/components/header';
import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Gelateria',
  description: 'Gelateria',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
