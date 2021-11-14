import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function PostHeader({img, title}) {
    return (
        <div className='relative h-96'>
        <Head><title>{title} - David Holleman</title></Head>
        <Image
            layout="fill"
            className="object-center object-cover pointer-events-none"
            src={img}
            alt={title}
            objectFit='cover'
            placeholder='blur'
            blurDataURL='/assets/img/blur.jpg'
          />
      </div>
    )
}
