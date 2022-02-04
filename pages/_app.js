import '../styles/globals.css'
import Menu from '../components/menu'

function MyApp({ Component, pageProps }) {
  return <Menu>
          <Component {...pageProps} />
        </Menu>
}

export default MyApp
