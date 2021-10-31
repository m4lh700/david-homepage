import React from 'react'
import axios from 'axios';
import Main from '../../components/layouts/Main'
import Card from '../../components/Card'


const Data = ({post}) => {
    return (
        <Main>
            <div>

                    <ul>
                    {post.map((post) => (
                            <Card key={post.id} title={post.title.rendered} excerpt={post.excerpt.rendered} img={getMedia(post.featured_media)} />    
                    ))}
                    </ul>
            </div>
        </Main>
    )
}

export default Data;

export const getServerSideProps = async ({ params }) => {
    const { data } =  await axios.get(`https://war-docs.com/wp-json/wp/v2/posts`);
    //console.log(data)
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    const post = data;
    console.log(post);
    return {
      props: {
        post,
      },
    };
  };

  const getMedia = async ({ id }) => {
    console.log(id)
    const { img } =  await axios.get(`https://war-docs.com/wp-json/wp/v2/media/${id}`);
   // console.log(img)
    if (!img) {
      return {
        notFound: true,
      };
    }
  
    const data = img;
    return {
      props: {
        data,
      },
    };
  };





  