import React, { useState } from 'react';
import Layout from 'components/Layout';
import 'styles/global.css';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import ErrorBoundary from 'components/ErrorBoundary';

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
      <ErrorBoundary>
        <Component {...pageProps} />

      </ErrorBoundary>
    </Layout>
  );
}
