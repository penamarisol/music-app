import '$/styles/fonts.css';
import { Layout } from '$/containers/Layouts';
import { PlayListProvider } from '$/context/PlayList';
import client from '$/core/api/apollo-client';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <PlayListProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PlayListProvider>
    </ApolloProvider>
  );
}
