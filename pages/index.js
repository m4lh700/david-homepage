import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/layouts/Main'
import HomeColumn from '../components/HomeColumn'
import {TerminalIcon, CodeIcon, DesktopComputerIcon} from '@heroicons/react/solid'

export default function Home() {
  return (
    <Main>
      <div className='container mx-auto px4 mx8'>
        <div className='flex flex-col p-6 md:p-20'>
            <Image loading="lazy" src="/assets/svg/david.svg" alt="Avatar of me" width={120} height={120} />
            <h1 className='text-3xl md:text-6xl text-center font-bold'>Hello there, i'm <span className='text-purple-700 dark:text-green-500'>David!</span></h1>
            <h2 className='text-3xl md:text-6xl  text-center font-bold'>A Full Stack Developer based in the Netherlands and I like to KISS and keep it DRY ;)</h2>
            <h2 className='text-3xl md:text-4xl  text-center font-thin'>(Keep It Simple, Stuid &amp; Dont Repeat Yourself)</h2>
        </div>
      </div>

      <div className='flex bg-purple-700 text-white dark:bg-gray-700 p-6 md:p-20'>
        <div className='container mx-auto px4 mx8'>
          <p className='text-center text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus dapibus quam sagittis elementum sit amet quis ipsum. Maecenas vehicula, tortor et pellentesque vestibulum, risus enim lobortis nibh, bibendum pulvinar orci enim et augue. Integer viverra ultrices pretium. Vestibulum luctus quam rutrum elit mattis, nec dignissim eros sollicitudin. Praesent nulla velit, accumsan eu facilisis non, mattis tempus tellus. Vivamus lobortis semper elit. Phasellus ac suscipit mauris. Nulla feugiat lectus lacus, sed placerat nisl condimentum euismod. Sed augue diam, efficitur quis porta eget, iaculis non sem. Donec vitae ipsum consectetur, molestie orci ac, iaculis dui.</p>
        </div>
      </div>

    <div className='container mx-auto px4 mx8'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <HomeColumn icon={<TerminalIcon id='TerminalIcon' className='text-purple-700 dark:text-green-500 text-center w-24 h-24 mx-auto'/>} title='Backend Development' text='I have a passion for backend development and coding' skills='Linux, Shell scripting, Python, PHP, NodeJs, Laravel, Symfony, MySQL' tools='Command Line Interface, Sublime, Visual Studio Code, NPM, Composer' />
        <HomeColumn icon={<CodeIcon id='CodeIcon' className='text-purple-700 dark:text-green-500 text-center w-24 h-24 mx-auto' />} title='Frontend Development' text='I like to connect the backend with an awesome frontend and user experience.' skills='HTML, CSS/Sass/Less, JavaScript, REACT/Native/NextJS, TailwindCSS, BootStrap' tools='TailwindCSS, Bootstrap, Jquery, React, VIM, Visual code Studio, Sublime' middle={true} />
        <HomeColumn icon={<DesktopComputerIcon id='DesktopComputerIcon' className='text-purple-700 dark:text-green-500 text-center text-base w2-4 h-24 mx-auto' />} title='Learning and teaching' text='I am always working on myself and improving my technical ability.' skills='Autodidactic, Passion, Interests' tools='My Brain :-)' />
      </div>
    </div>

    <div className='flex bg-purple-700 text-white dark:bg-gray-700 p-6 md:p-20'>
        <div className='container mx-auto px4 mx8'>
          <p className='text-center text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus dapibus quam sagittis elementum sit amet quis ipsum. Maecenas vehicula, tortor et pellentesque vestibulum, risus enim lobortis nibh, bibendum pulvinar orci enim et augue. Integer viverra ultrices pretium. Vestibulum luctus quam rutrum elit mattis, nec dignissim eros sollicitudin. Praesent nulla velit, accumsan eu facilisis non, mattis tempus tellus. Vivamus lobortis semper elit. Phasellus ac suscipit mauris. Nulla feugiat lectus lacus, sed placerat nisl condimentum euismod. Sed augue diam, efficitur quis porta eget, iaculis non sem. Donec vitae ipsum consectetur, molestie orci ac, iaculis dui.</p>
        </div>
      </div>

      <div className='container mx-auto px4 mx8'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <HomeColumn icon={<TerminalIcon id='TerminalIcon' className='text-purple-700 dark:text-green-500 text-center w-24 h-24 mx-auto'/>} title='Backend Development' text='I have a passion for backend development and coding.' skills='Linux, Shell scripting, Python, PHP, NodeJs, Laravel, Symfony, MySQL' tools='Command Line Interface, Sublime, Visual Studio Code, NPM, Composer' middle={true} />
        <HomeColumn icon={<CodeIcon id='CodeIcon' className='text-purple-700 dark:text-green-500 text-center w-24 h-24 mx-auto' />} title='Frontend Development' text='I like to connect the backend with an awesome frontend and user experience.' skills='HTML, CSS/Sass/Less, JavaScript, REACT/Native/NextJS, TailwindCSS, BootStrap' tools='TailwindCSS, Bootstrap, Jquery, React, VIM, Visual code Studio, Sublime' middle={false} />
        <HomeColumn icon={<DesktopComputerIcon id='DesktopComputerIcon' className='text-purple-700 dark:text-green-500 text-center text-base w2-4 h-24 mx-auto' />} title='Learning and teaching' text='I am always working on myself and improving my technical ability.' skills='Autodidactic, Passion, Interests' tools='My Brain :-)' middle={true} />
      </div>
    </div>


    </Main>
  )
}
