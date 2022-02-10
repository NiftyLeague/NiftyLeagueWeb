import Head from 'next/head';
import Container from '../components/blog/container';
import MoreStories from '../components/blog/more-stories';
import HeroPost from '../components/blog/hero-post';
import Intro from '../components/blog/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
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
      <Layout header={<div />}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
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
