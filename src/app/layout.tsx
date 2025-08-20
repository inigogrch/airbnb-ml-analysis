import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Airbnb NYC Analysis | Benjamin Gerochi',
    template: '%s | Airbnb NYC Analysis'
  },
  description: 'Comprehensive machine learning analysis of Airbnb listing popularity in New York City. Predicting reviews per month using advanced ML techniques including LightGBM, achieving R² of 0.6956.',
  keywords: [
    'machine learning',
    'data science',
    'airbnb analysis',
    'python',
    'lightgbm',
    'feature engineering',
    'regression analysis',
    'nyc data',
    'portfolio project',
    'benjamin gerochi'
  ],
  authors: [{ name: 'Benjamin Gerochi', url: 'https://www.linkedin.com/in/benjaminpgerochi/' }],
  creator: 'Benjamin Gerochi',
  publisher: 'Benjamin Gerochi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Airbnb NYC Analysis | Benjamin Gerochi',
    description: 'Comprehensive machine learning analysis of Airbnb listing popularity in NYC. Interactive portfolio showcasing end-to-end ML workflow with 69.6% variance explanation.',
    siteName: 'Airbnb NYC Analysis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb NYC Analysis | Benjamin Gerochi',
    description: 'Comprehensive machine learning analysis of Airbnb listing popularity in NYC. Interactive portfolio showcasing end-to-end ML workflow.',
    creator: '@benjamingerochi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

