import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header/header";
import { SessionProvider } from "next-auth/react";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Retro Game App</title>
        <meta name="description" content="Retro Game App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default MyApp;
