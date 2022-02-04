import '../styles/globals.css'
import Menu from '../components/menu'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Menu>
          <Component {...pageProps} />
        </Menu>
}

export default MyApp
