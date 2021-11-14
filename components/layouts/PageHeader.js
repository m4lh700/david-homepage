import React from 'react'
import Image from 'next/image'

export default function PageHeader({title}) {
    return (
        <div className='relative h-96'>
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none"
          src='/assets/img/home-bg.webp'
          alt='blog index'
          objectFit='cover'
          placeholder='blur'
          blurDataURL='/assets/img/blur.jpg'
      />
      <div className='relative z-1 bg-purple-700 dark:bg-green-700 h-96 opacity-25 flex justify-center'></div>
      <h1 className='text-3xl md:text-6xl text-center font-bold m-auto text-white -mt-56 z-10 relative dark:text-white'>{title}</h1>
    </div>
    )
}
