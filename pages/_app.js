//import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
//import Layout from '../components/layouts/main'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
