import React from 'react'
import Image from 'next/image'

export default function HomeBlogCard({src, alt, width, height, title, loading}) {
    return (
        <div className='p-8'>
            <Image src={src} alt={alt} width={width} height={height} title={title} loading={loading}/>
        </div>
    )
}
