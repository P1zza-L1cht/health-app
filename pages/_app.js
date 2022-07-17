import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return(
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}


