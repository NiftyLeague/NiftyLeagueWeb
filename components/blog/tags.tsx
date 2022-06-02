import { PostToTagConnection } from '@types/generated/graphql';

export default function Tags({ tags }: { tags: PostToTagConnection }) {
  return (
    <div className="mw-100 mx-auto">
      <p className="mt-5 fw-bold">
        Tagged:{' '}
        {tags.edges?.map((tag, index) => (
          <span key={index} className="ml-4 font-normal">
            {tag?.node?.name}
            {tags.edges?.length && index + 1 < tags.edges?.length ? ', ' : ' '}
          </span>
        ))}
      </p>
    </div>
  );
}
