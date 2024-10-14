// pages/_app.tsx
import type { AppProps } from 'next/app'
import RootLayout from '../components/RootLayout'
import '../styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}