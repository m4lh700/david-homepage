import React from 'react'
import Main from '../../components/layouts/Main'

export default function Post({post}) {
  console.log(post)
    return (
      <Main>
      <div className='container mx-auto px4 mx8'>
              <ul>      
              {post.map((singlepost) => (
                <div key={singlepost.id}>
                  <h1 className='text-3xl md:text-6xl text-center font-bold py-8'>{singlepost.title.rendered}</h1>
                  <div dangerouslySetInnerHTML={{__html: singlepost.content.rendered}}></div>
                </div>
                     
              ))}
              </ul>
      </div>
  </Main>
    )
}


  export async function getStaticProps({ params }) {
    const res = await fetch(`https://war-docs.com/wp-json/wp/v2/posts?slug=${params.slug}`)
    const post = await res.json()

    return { props: { post } }
  }


export async function getStaticPaths() {
    const res = await fetch('https://war-docs.com/wp-json/wp/v2/posts')
    const posts = await res.json()
  
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))

    return { paths, fallback: false }
  }
  