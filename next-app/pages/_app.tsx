import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BackgroundContainer } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BackgroundContainer>
      <Component {...pageProps} />
    </BackgroundContainer>
  );
}

export default MyApp;
