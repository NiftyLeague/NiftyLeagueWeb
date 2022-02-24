import Head from 'next/head';
import Container from '../components/blog/container';
import MoreStories from '../components/blog/more-stories';
import HeroPost from '../components/blog/hero-post';
import Intro from '../components/blog/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import { Post, PostFormatToPostConnection, PostFormatToPostConnectionEdge } from '../types/generated/graphql';

export default function Index({
  allPosts: { edges },
  preview,
}: {
  allPosts: PostFormatToPostConnection;
  preview: boolean;
}) {
  const heroPost = edges ? edges[0]?.node : ({} as Post);
  const morePosts = edges?.slice(1);

  return (
    <>
      <Layout classes={{ root: 'blog-pg' }}>
        <Head>
          <title>Nifty League | Blog</title>
          <meta name="description" content="Nifty League Blog" />
        </Head>

        <Intro />
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title as string}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date as string}
              author={heroPost.author?.node}
              slug={heroPost.slug as string}
              excerpt={heroPost.excerpt as string}
            />
          )}
          {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts as PostFormatToPostConnectionEdge[]} />}
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
