import { useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import {MoonIcon, SunIcon, IdentificationIcon, HomeIcon, BookOpenIcon, ClipboardCheckIcon} from '@heroicons/react/solid'
import Link from 'next/link';
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { NavLink } from './NavLink'

const Header = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);
    const [active, setActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])


    const handleClick = () => {
        setActive(!active);
    }

    const variants = {
        open: { rotate: [0, -360, 0], transition: { duration: 0.5 } },
        // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
        closed: { y: [0, -0, 0], transition: { repeat: Infinity, repeatDelay: 3 } }
      }

    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                 >
                <SunIcon id='sun' className='w-8 h-8 text-yellow-400' role='button' onClick={() => setTheme('light') + setIsOpen(isOpen => !isOpen)} />
                </motion.div>
            )
        } else {
            return (
                <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                 >
                <MoonIcon id='moon' className='w-8 h-8 text-blue-900' role='button' onClick={() => setTheme('dark') + setIsOpen(isOpen => !isOpen)} />
                </motion.div>
            )
        }
    }

        return(
<header className='w-full flex flex-row justify-between items-center border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-700 sticky top-0 z-50 transition duration-300 shadow'>
    <nav className="container mx-auto mx8 flex items-center justify-between flex-wrap bg-teal-500 py-4 px-4 md:px-0">
    <div className="flex items-center flex-shrink-0 mr-6 w-0 flex-1 flex items-center overflow-y-auto max-w-full">
        <Link href="/" passHref>
            <Image loading="lazy" src="/assets/svg/david.svg" alt="Picture of the author" width={54} height={54} />
        </Link>
        <span className="text-2xl font-semibold text-xl tracking-tight ml-3">David Holleman</span>
        <span className="text-2xl font-semibold text-xl tracking-tight ml-3 hidden md:block">|</span>
        <span className="text-md font-light text-xl tracking-tight ml-3 hidden  md:block">Full stack developer</span>
    </div>
    <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400" onClick={handleClick}>
        <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
    </div>
    <div className={`${
            active ? '' : 'hidden'
          } w-full flex flex-row items-center lg:flex lg:items-center lg:w-auto transition-transform duration-300 ease-in-out`}>
        <div className="text-sm lg:flex-grow">
            <NavLink href='/' title='Home' icon={<HomeIcon id='home' className='w-7 h-7 float-left text-purple-700 dark:text-green-500' />}/>
            <NavLink href='/about' title='About' icon={<IdentificationIcon  id='home' className='w-7 h-7 float-left text-purple-700 dark:text-green-500' />} />
            <NavLink href='/projects' title='Projects' icon={<ClipboardCheckIcon id='home' className='w-7 h-7 float-left text-purple-700 dark:text-green-500' />} />
            <NavLink href='/blog' title='Blog' icon={<BookOpenIcon id='home' className='w-7 h-7 float-left text-purple-700 dark:text-green-500' />}/>
            <button className="border text-black font-bold py-2 px-4 rounded-lg bg-purple-700 text-white dark:bg-gray-700 dark:text-white dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-gray-700">
                <Link href='/contact'>Say Hello</Link>
            </button>
        </div>
        <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none mt-4 lg:mt-0">{renderThemeChanger()}</a>
        </div>
    </div>
    </nav>
</header>
    )
}

export default Header