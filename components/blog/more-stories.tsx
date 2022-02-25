import PostPreview from './post-preview';
import { Maybe, PostFormatToPostConnectionEdge } from '../../types/generated/graphql';

export default function MoreStories({ posts }: { posts?: Maybe<PostFormatToPostConnectionEdge[]> }) {
  return (
    <section>
      <h1 className="mb-4 fw-bold more-stories-title">More Stories</h1>
      <div className="grid mb-5">
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
