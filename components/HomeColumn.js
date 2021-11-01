import React from 'react'

export default function HomeColumn({icon, title, text, skills, tools, middle}) {
    return (
        <div  className={'p-20 bg-white border rounded-lg md:-mt-16 md:-mb-16 text-center overflow-hidden md:overflow-hidden transform transition duration-500 md:hover:scale-110 hover:z-10 scale-100 ' + ( middle ? 'lg:scale-110 z-10' : '')}>
            <div className='text-center text-lg'>{icon}</div>
            <h3 className='text-2xl font-bold dark:text-black'>{title}</h3>
            <div className='font-thin dark:text-black mb-8'>{text}</div>
            <p className='font-semibold dark:text-black'>The skills I use:</p>
            <p className='font-thin dark:text-black mb-8'>{skills}</p>
            <p className='font-semibold dark:text-black'>The tools I use:</p>
            <p className='font-thin dark:text-black'>{tools}</p>
        </div>
    )
}

