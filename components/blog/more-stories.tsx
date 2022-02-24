import PostPreview from './post-preview';
import { Maybe, PostFormatToPostConnectionEdge } from '../../types/generated/graphql';

export default function MoreStories({ posts }: { posts?: Maybe<PostFormatToPostConnectionEdge[]> }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl fw-bold tracking-tighter leading-tight">More Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts?.map(value => {
          const { node } = value;
          return (
            <PostPreview
              key={node?.slug}
              title={node?.title as string}
              coverImage={node?.featuredImage?.node}
              date={node?.date as string}
              author={node?.author?.node}
              slug={node?.slug as string}
              excerpt={node?.excerpt as string}
            />
          );
        })}
      </div>
    </section>
  );
}
