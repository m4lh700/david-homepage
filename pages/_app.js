//import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    
      <ThemeProvider enableSystem={true} attribute='class'>
        <NextSeo
          title="David Holleman - Release your inner nerd"
          description="David's personal websisite, blog and tech friendly place"
          canonical="https://davidholleman.dev"
          openGraph={{
            url: 'https://davidholleman.dev',
            title: 'David Holleman - Release your inner nerd',
            description: "David's personal websisite, blog and tech friendly place",
            images: [
              {
                url: 'https://www.example.ie/og-image-01.jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
                type: 'image/jpeg',
              },
              {
                url: 'https://www.example.ie/og-image-02.jpg',
                width: 900,
                height: 800,
                alt: 'Og Image Alt Second',
                type: 'image/jpeg',
              },
              { url: 'https://www.example.ie/og-image-03.jpg' },
              { url: 'https://www.example.ie/og-image-04.jpg' },
            ],
            site_name: 'DavidHolleman',
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
            <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
