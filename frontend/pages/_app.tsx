import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalHeader } from "@/components/GlobalHeader";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
