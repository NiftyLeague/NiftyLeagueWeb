import { PostToCategoryConnection, PostToCategoryConnectionEdge } from '../../types/generated/graphql';

export default function Categories({ categories }: { categories: PostToCategoryConnection }) {
  return (
    <span className="ml-1">
      under
      {categories.edges?.length && categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="ml-1">
            {category?.node?.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{(categories.edges as PostToCategoryConnectionEdge)?.node?.name}</span>
      )}
    </span>
  );
}
