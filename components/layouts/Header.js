import { useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import {MoonIcon, SunIcon} from '@heroicons/react/solid'
import Link from 'next/link';
import Image from 'next/image'

const Header = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])


    const handleClick = () => {
        setActive(!active);
    }


    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <SunIcon className='w-8 h-8 text-yellow-400' role='button' onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <MoonIcon className='w-8 h-8 text-blue-900' role='button' onClick={() => setTheme('dark')} />
            )
        }
    }

        return(
<header className='w-full flex flex-row justify-between items-center border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-700 sticky top-0 z-50 transition duration-300 shadow'>
    <nav className="container mx-auto px4 mx8 flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 mr-6 w-0 flex-1 flex items-center overflow-y-auto max-w-full">
        <Image
            loading="lazy"
            src="/assets/svg/david.svg"
            alt="Picture of the author"
            width={54}
            height={54}
        />
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
            <Link href='/'>
                <a href="#responsive-header" className="mr-6 sm:mr-8 flex flex-col relative text-xl font-thin block mt-4 lg:inline-block lg:mt-0 lg:text-center text-teal-200 mr-4 hover:underline">
                    Home
                </a>
            </Link>
            <Link href='/about'>
                <a href="#responsive-header" className="mr-6 sm:mr-8 flex flex-col relative text-xl font-thin block mt-4 lg:inline-block lg:mt-0 lg:text-center text-teal-200 mr-4 hover:underline">
                    About
                </a>
            </Link>
            <Link href='/projects'>
            <a href="#responsive-header" className="mr-6 sm:mr-8 flex flex-col relative text-xl font-thin block mt-4 lg:inline-block lg:mt-0 lg:text-center text-teal-200 mr-4 hover:underline">
                Projects
            </a>
          </Link>
          <Link href='/blog'>
            <a href="#responsive-header" className="mr-6 sm:mr-8 flex flex-col relative text-xl font-thin block mt-4 lg:inline-block lg:mt-0 lg:text-center text-teal-200 hover:underline">
                Blog
            </a>
          </Link>
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