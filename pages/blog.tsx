import Head from 'next/head';
import Container from '../components/blog/container';
import MoreStories from '../components/blog/more-stories';
import HeroPost from '../components/blog/hero-post';
import Intro from '../components/blog/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import { Posts } from '../types/blog';

export default function Index({
  allPosts: { edges },
  preview,
}: {
  allPosts: Posts;
  preview: boolean;
}) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  console.log('heroPost', heroPost);
  console.log('morePosts', morePosts);

  return (
    <>
      <Layout header={<Intro />} classes={{ root: 'blog-pg' }}>
        <Head>
          <title>Nifty League | Blog</title>
          <meta name="description" content="Nifty League Blog" />
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
