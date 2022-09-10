import React, { useState } from 'react';
import Layout from 'components/Layout';
import 'styles/global.css';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [visitedTime] = useState(new Date());
  return (

    <Layout home={router.pathname === '/'}>
      <div>
        visited:
        {' '}
        {formatDistanceToNow(new Date(visitedTime), { addSuffix: true, includeSeconds: true })}
      </div>
      <Component {...pageProps} />
    </Layout>
  );
}
