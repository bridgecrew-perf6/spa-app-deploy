import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalHeader } from "@/components/GlobalHeader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
