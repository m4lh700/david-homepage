//import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    
      <ThemeProvider enableSystem={true} attribute='class' enableColorScheme={false}  defaultTheme="light">
            <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
