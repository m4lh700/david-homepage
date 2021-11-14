import React from 'react'
import axios from 'axios';
import Main from '../../components/layouts/Main'
import Card from '../../components/Card'
import BlogCTACard from '../../components/blog/BlogCTACard';
import Image from 'next/image';
import PageHeader from '../../components/layouts/PageHeader';
//import SingleBlogCard from '../../components/blog/SingleBlogCard';
import dynamic from 'next/dynamic'

const SingleBlogCard = dynamic(() => import('../../components/blog/SingleBlogCard'))

const Blog = ({posts}) => {
    return (
        <Main seoTitle='Blog - David Holleman'>
          <PageHeader title='BLOG' />
            <div className='container mx-auto px4 mx8 -mt-20'>
                  <div className='flex flex-wrap  lg:-mx-4'>       
                    {posts.map((post) => (
                            <SingleBlogCard key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} url={'/blog/' + (post.slug)} img={post.fimg_url} date={post.date} />
                    ))}
                  </div>
            </div>
        </Main>
    )
}


export async function getStaticProps() {
  const res = await fetch(process.env.apiKey + '/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog





  