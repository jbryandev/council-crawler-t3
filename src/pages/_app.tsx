import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import Layout from '@/components/layout';
import { api } from '@/lib/api';
import '@/styles/globals.css';
import { fontSans } from '@/lib/fonts';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-sans: ${fontSans.variable};
          }
        `}
      </style>
      <SessionProvider session={session}>
        <BalancerProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BalancerProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
