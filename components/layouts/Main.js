//Imports
import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'
import Script from 'next/script'
import Card from '../Card'
//import styles from '../styles/Layout.module.css'
import { motion, AnimatePresence } from "framer-motion"

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

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
        <AnimatePresence exitBeforeEnter>
        <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow"
        >

            <div className=''>
                {children}
            <Footer />
            </div>

        </motion.main>
        </AnimatePresence>
        </>
    )
}

export default Main