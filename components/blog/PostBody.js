import React from 'react'

export default function PostBody({title, content}) {
    return (
        <div className='container mx-auto px4 mx8'> 
            <div className="">
                <h1 className='text-3xl md:text-6xl text-center font-bold py-8' dangerouslySetInnerHTML={{__html: title}}></h1>
            </div>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
      </div>
    )
}
