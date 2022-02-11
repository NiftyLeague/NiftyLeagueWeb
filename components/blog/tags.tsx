import { PostToTagConnection } from '../../types/generated/graphql';

export default function Tags({ tags }: { tags: PostToTagConnection }) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg fw-bold">
        Tagged
        {tags.edges?.map((tag, index) => (
          <span key={index} className="ml-4 font-normal">
            {tag?.node?.name}
          </span>
        ))}
      </p>
    </div>
  );
}
