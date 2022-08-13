import '../styles/app.scss';
import { MantineProvider } from '@mantine/core';
import { rtlCache } from '../rtl-cache';
import {DefaultLayout} from '../components/layouts';

function MyApp({ Component, pageProps }) {
  return <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
        emotionCache={rtlCache}
      >
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </MantineProvider>
}

export default MyApp
