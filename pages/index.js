import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/layouts/Main'
import HomeColumn from '../components/HomeColumn'
import {TerminalIcon, CodeIcon, DesktopComputerIcon} from '@heroicons/react/solid'
import CTAbuton from '../components/CTAbuton'
import HomeBlogCard from '../components/HomeBlogCard'

export default function Home() {
  return (
    <Main>
      <div className='container mx-auto px4 mx8'>
        <div className='flex flex-col p-6 md:p-20'>
            <Image loading="lazy" src="/assets/svg/david.svg" alt="Avatar of me" width={120} height={120} />
            <h1 className='text-3xl md:text-6xl text-center font-bold'>Hello there, i&apos;m <span className='text-purple-700 dark:text-green-500'>David!</span></h1>
            <h2 className='text-3xl md:text-6xl  text-center font-bold'>A Full Stack Developer based in the Netherlands and I like to KISS and keep it DRY ;)</h2>
            <h2 className='text-3xl md:text-4xl  text-center font-thin'>(Keep It Simple, Stupid &amp; Dont Repeat Yourself)</h2>
        </div>
      </div>

      <div className='flex bg-purple-700 text-white dark:bg-gray-700 p-6 md:p-20 md:pb-40'>
        <div className='container mx-auto px4 mx8'>
          <p className='text-center text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus dapibus quam sagittis elementum sit amet quis ipsum. Maecenas vehicula, tortor et pellentesque vestibulum, risus enim lobortis nibh, bibendum pulvinar orci enim et augue. Integer viverra ultrices pretium. Vestibulum luctus quam rutrum elit mattis, nec dignissim eros sollicitudin. Praesent nulla velit, accumsan eu facilisis non, mattis tempus tellus. Vivamus lobortis semper elit. Phasellus ac suscipit mauris. Nulla feugiat lectus lacus, sed placerat nisl condimentum euismod. Sed augue diam, efficitur quis porta eget, iaculis non sem. Donec vitae ipsum consectetur, molestie orci ac, iaculis dui.</p>
          <div className='text-center md:mt-8'> <CTAbuton text='About' link='/about' size='text-2xl' /> </div>
        </div>
      </div>

    <div className='container mx-auto px4 mx8'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <HomeColumn icon={<TerminalIcon id='TerminalIcon' className='text-purple-700 dark:text-green-500 text-center w-24 h-24 mx-auto'/>} title='Backend Development' text='I have a passion for backend development and coding' skills='Linux, Shell scripting, Python, PHP, NodeJs, Laravel, Symfony, MySQL' tools='Command Line Interface, Sublime, Visual Studio Code, NPM, Composer' />
        <HomeColumn icon={<CodeIcon id='CodeIcon' className='text-purple-700 dark:text-green-500 text-center w-24 h-24 mx-auto' />} title='Frontend Development' text='I like to connect the backend with an awesome frontend and user experience.' skills='HTML, CSS/Sass/Less, JavaScript, REACT/Native/NextJS, TailwindCSS, BootStrap' tools='TailwindCSS, Bootstrap, Jquery, React, VIM, Visual code Studio, Sublime' middle={true} />
        <HomeColumn icon={<DesktopComputerIcon id='DesktopComputerIcon' className='text-purple-700 dark:text-green-500 text-center text-base w2-4 h-24 mx-auto' />} title='Learning and teaching' text='I am always working on myself and improving my technical ability.' skills='Autodidactic, Passion, Interests' tools='My Brain :-)' />
      </div>
    </div>

    <div className='flex bg-purple-700 text-white dark:bg-gray-700 p-6 md:p-20 md:pb-40 md:pt-40'>
        <div className='container mx-auto px4 mx8'>
          <p className='text-center text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus dapibus quam sagittis elementum sit amet quis ipsum. Maecenas vehicula, tortor et pellentesque vestibulum, risus enim lobortis nibh, bibendum pulvinar orci enim et augue. Integer viverra ultrices pretium. Vestibulum luctus quam rutrum elit mattis, nec dignissim eros sollicitudin. Praesent nulla velit, accumsan eu facilisis non, mattis tempus tellus. Vivamus lobortis semper elit. Phasellus ac suscipit mauris. Nulla feugiat lectus lacus, sed placerat nisl condimentum euismod. Sed augue diam, efficitur quis porta eget, iaculis non sem. Donec vitae ipsum consectetur, molestie orci ac, iaculis dui.</p>
          <div className='text-center md:mt-8'> <CTAbuton text='Projects' link='/projects' size='text-2xl' /> </div>   
        </div>
      </div>

      <div className='container mx-auto px4 mx8'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <HomeColumn icon={<TerminalIcon id='TerminalIcon' className='text-purple-700 dark:text-green-500 text-center w-24 h-24 mx-auto'/>} title='Backend Development' text='I have a passion for backend development and coding.' skills='Linux, Shell scripting, Python, PHP, NodeJs, Laravel, Symfony, MySQL' tools='Command Line Interface, Sublime, Visual Studio Code, NPM, Composer' middle={true} />
        <HomeColumn icon={<CodeIcon id='CodeIcon' className='text-purple-700 dark:text-green-500 text-center w-24 h-24 mx-auto' />} title='Frontend Development' text='I like to connect the backend with an awesome frontend and user experience.' skills='HTML, CSS/Sass/Less, JavaScript, REACT/Native/NextJS, TailwindCSS, BootStrap' tools='TailwindCSS, Bootstrap, Jquery, React, VIM, Visual code Studio, Sublime' middle={false} />
        <HomeColumn icon={<DesktopComputerIcon id='DesktopComputerIcon' className='text-purple-700 dark:text-green-500 text-center text-base w2-4 h-24 mx-auto' />} title='Learning and teaching' text='I am always working on myself and improving my technical ability.' skills='Autodidactic, Passion, Interests' tools='My Brain :-)' middle={true} />
      </div>
    </div>

    <div className='flex bg-purple-700 text-white dark:bg-gray-700 p-6 md:p-20 md:pb-40 md:pt-40'>
        <div className='container mx-auto px4 mx8'>
          <p className='text-center text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus dapibus quam sagittis elementum sit amet quis ipsum. Maecenas vehicula, tortor et pellentesque vestibulum, risus enim lobortis nibh, bibendum pulvinar orci enim et augue. Integer viverra ultrices pretium. Vestibulum luctus quam rutrum elit mattis, nec dignissim eros sollicitudin. Praesent nulla velit, accumsan eu facilisis non, mattis tempus tellus. Vivamus lobortis semper elit. Phasellus ac suscipit mauris. Nulla feugiat lectus lacus, sed placerat nisl condimentum euismod. Sed augue diam, efficitur quis porta eget, iaculis non sem. Donec vitae ipsum consectetur, molestie orci ac, iaculis dui.</p>
          <div className='text-center md:mt-8'> <CTAbuton text='Blog' link='/blog' size='text-2xl' /> </div>   
        </div>
      </div>

    <div className='container mx-auto px4 mx8'>
      <h3 className='text-center text-2xl'>Latest blog articles</h3>
      <div className='flex flex-col justify-between md:flex-row'>
      <HomeBlogCard src='/assets/img/card-left.jpg' width='300' height='300' alt='blog image' loading='lazy' title='test' />
      <HomeBlogCard src='/assets/img/card-left.jpg' width='300' height='300' alt='blog image' loading='lazy' title='test' />
      <HomeBlogCard src='/assets/img/card-left.jpg' width='300' height='300' alt='blog image' loading='lazy' title='test' />
      <HomeBlogCard src='/assets/img/card-left.jpg' width='300' height='300' alt='blog image' loading='lazy' title='test' />
      <HomeBlogCard src='/assets/img/card-left.jpg' width='300' height='300' alt='blog image' loading='lazy' title='test' />
      </div>
    </div>




    </Main>
  )
}
