import Main from '../../components/layouts/Main'
import PostHeader from '../../components/blog/PostHeader'
import PostBody from '../../components/blog/PostBody'

export default function Post({post}) {
    return (
      <Main>
        {post.map((singlepost) => (
          <div key={singlepost.id}>
              <PostHeader img={singlepost.fimg_url} title={singlepost.title.rendered} />
              <PostBody content={singlepost.content.rendered} title={singlepost.title.rendered} />
          </div>   
        ))}
      </Main>
    )
}

  export async function getStaticProps({ params }) {
    const res = await fetch(process.env.apiKey + '/posts?slug=' + params.slug)
    const post = await res.json()

    return { props: { post } }
  }

export async function getStaticPaths() {
    const res = await fetch(process.env.apiKey + '/posts')
    const posts = await res.json()
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))

    return { paths, fallback: false }
  }
  