import '../styles/app.scss';
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../rtl-cache';

function MyApp({ Component, pageProps }) {
  return <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
        emotionCache={rtlCache}
      >
        <Component {...pageProps} />
      </MantineProvider>
}

export default MyApp
