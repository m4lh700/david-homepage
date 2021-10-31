//Imports
import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'
import Script from 'next/script'
import Card from '../Card'
//import styles from '../styles/Layout.module.css'
import { motion, AnimatePresence } from "framer-motion"
import { NextSeo } from 'next-seo'

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Main = ({children, router, seoTitle}) => {
    return (
        <>
            <NextSeo
          title={seoTitle ? seoTitle : "David Holleman - Release your inner nerd"}
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
        <Header />
        <AnimatePresence exitBeforeEnter>
        <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow"
        >

            <div className='dark:bg-gray-900 dark:text-white'>
                {children}
            <Footer />
            </div>

        </motion.main>
        </AnimatePresence>
        </>
    )
}

export default Main