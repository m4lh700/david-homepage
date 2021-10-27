//Imports
import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'
import Script from 'next/script'
import Card from '../Card'
//import styles from '../styles/Layout.module.css'

const Main = ({children, router}) => {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="David's Homepage" />
            <meta name="author" content="David Holleman" />
            <link rel="apple-touch-icon" href="apple-touch-icon.png" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <title>David Holleman - homepage</title>           
        </Head>
        <Header />
        <main className='flex-grow'>
            <div className='container mx-auto px4 mx8'>
                {children}

                <Card />
                <Card />
            <Footer />
            </div>
        </main>
        </>
    )
}

export default Main