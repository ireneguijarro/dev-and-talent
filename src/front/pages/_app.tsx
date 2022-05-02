import type { AppProps } from 'next/app';
import { Card, Container, NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <div>
        <Head>
          <title>dev-and-talent</title>
        </Head>

        <main>
          <Container>
            <h1>dev-and-talent</h1>
            <Component {...pageProps} />
          </Container>
        </main>
      </div>
    </NextUIProvider>
  );
}

export default MyApp;
