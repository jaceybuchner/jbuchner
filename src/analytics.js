import { Analytics } from '@vercel/analytics/react';

function MyA({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyA;