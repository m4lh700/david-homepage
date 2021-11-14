import React from 'react'
import Image from 'next/image'
import CTAbutton from '../CTAbuton'

export default function SingleBlogCard({id, title, excerpt, img, url, date}) {
    return (
        <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 group z-10'>
            <article className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-700 group-hover:bg-purple-700 transition duration-500 ease-in-out">
            <div className='relative'>
                <a href={url}>
                <Image
                        loading="lazy"
                        src={img}
                        alt={title}
                        width={500}
                        height={300}
                        objectFit='cover'
                        className='group-hover:opacity-75'
                        placeholder='blur'
                        blurDataURL='/assets/img/blur.jpg'
                    />
                    </a>
            </div>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h2 className="text-2xl font-bold">
                        <a className="no-underline text-black dark:text-white group-hover:text-white" href={url}>
                            <div className='uppercase' dangerouslySetInnerHTML={{__html: title}}></div>
                        </a>
                    </h2>
                </header>

                <div dangerouslySetInnerHTML={{__html: excerpt}} className='font-thin flex items-center leading-tight p-2 md:p-4 group-hover:text-white'>
                </div>
                
                <div className='flex items-center leading-tight p-2 md:p-4'>
                 <CTAbutton text='Read more' link={url} />
                </div>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black group-hover:text-white" href="#">
                        <p className="ml-2 text-sm">
                        {date}
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

                </article>
        </div>
    )
}
