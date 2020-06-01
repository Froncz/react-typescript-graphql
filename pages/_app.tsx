import React from 'react';
import Layout from '../components/Layout';
import '../styles/index.css';

interface Props {
  Component?: React.ElementType,
  pageProps: object,
};

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp