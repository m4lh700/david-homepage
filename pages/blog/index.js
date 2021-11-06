import React from 'react'
import axios from 'axios';
import Main from '../../components/layouts/Main'
import Card from '../../components/Card'


const Blog = ({posts}) => {
    return (
        <Main>
            <div className='container mx-auto px4 mx8'>
                    <ul>            
                    {posts.map((post) => (
                            <Card key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} url={'/blog/' + (post.slug)}/>
                    ))}
                    </ul>
            </div>
        </Main>
    )
}


export async function getStaticProps() {
  const res = await fetch('https://war-docs.com/wp-json/wp/v2/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog





  