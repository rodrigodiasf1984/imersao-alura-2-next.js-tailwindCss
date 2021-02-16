
import {ThemeProvider } from 'styled-components';
import GlobalStyle  from '../../styles/globals';
import api from '@/api/db';
function MyApp({ Component, pageProps }) {
  const {theme}=api;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
