import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Maybe, MediaItem } from '../../types/generated/graphql';

export default function CoverImage({
  title,
  coverImage,
  slug,
}: {
  title?: Maybe<string>;
  coverImage: MediaItem;
  slug?: Maybe<string>;
}) {
  if (!coverImage.sourceUrl) return null;
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage.sourceUrl}
      className={cn({
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="mx-sm-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title || 'unknown'}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
