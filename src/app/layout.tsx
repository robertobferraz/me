import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://robertofilho.dev'),
  title: 'Roberto Filho | Engenheiro de Software Backend',
  description:
    'Portfólio profissional de Roberto Filho com experiências em microserviços, Go, arquitetura hexagonal e real-time.',
  openGraph: {
    title: 'Roberto Filho | Engenheiro de Software Backend',
    description:
      'Experiências, projetos e stack técnica com foco em backend, mensageria, observabilidade e performance.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://robertofilho.dev'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const themeBootstrap = `
    (function() {
      try {
        var key = 'roberto-portfolio-theme';
        var stored = localStorage.getItem(key);
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var nextTheme = stored || (prefersDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      } catch (e) {}
    })();
  `;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${sora.variable} bg-surface text-text antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
