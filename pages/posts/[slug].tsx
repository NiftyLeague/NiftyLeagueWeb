import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import Container from '../../components/blog/container';
import Header from '../../components/blog/header';
import Layout from '../../components/layout';
import MoreStories from '../../components/blog/more-stories';
import PostBody from '../../components/blog/post-body';
import PostHeader from '../../components/blog/post-header';
import PostTitle from '../../components/blog/post-title';
import SectionSeparator from '../../components/blog/section-separator';
import Tags from '../../components/blog/tags';
import { Post, PostFormatToPostConnection, PostFormatToPostConnectionEdge } from '../../types/generated/graphql';

export default function PostView({
  post,
  posts,
  preview,
}: {
  post: Post;
  posts: PostFormatToPostConnection;
  preview: boolean;
}) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout classes={{ root: 'post-pg' }}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>Nifty League | {post.title}</title>
                <meta property="og:image" content={post.featuredImage?.node?.sourceUrl as string} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>{post?.tags?.edges && post.tags.edges.length > 0 && <Tags tags={post.tags} />}</footer>
            </article>

            <SectionSeparator />
            {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts as PostFormatToPostConnectionEdge[]} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false, previewData }) => {
  const { slug } = params as IParams;
  const data = await getPostAndMorePosts(slug, preview, previewData as { post: Post });

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  const paths = allPosts.edges?.map(value => (value?.node ? `/posts/${value.node.slug}` : '')) || [];

  return {
    paths,
    fallback: true,
  };
};
