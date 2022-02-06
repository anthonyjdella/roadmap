import '../styles/globals.css'
import Menu from '../components/menu'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from 'next/script'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-S6GPESDD8Q`}
      />

      <Script id="googleAnalytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S6GPESDD8Q');
        `}
      </Script>

      <Menu>
        <Component {...pageProps} />
      </Menu>
    </>
  );
}

export default MyApp
