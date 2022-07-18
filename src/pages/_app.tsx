import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header/header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Retro Game App</title>
        <meta name="description" content="Retro Game App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
