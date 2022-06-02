import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Maybe, MediaItem } from '@types/generated/graphql';

export default function CoverImage({
  alignfull,
  title,
  coverImage,
  slug,
}: {
  alignfull?: boolean;
  title?: Maybe<string>;
  coverImage: MediaItem;
  slug?: Maybe<string>;
}) {
  if (!coverImage.sourceUrl) return null;
  const image = (
    <Image
      width={2000}
      height={1000}
      layout="responsive"
      alt={`Cover Image for ${title}`}
      src={coverImage.sourceUrl}
      className={cn({
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className={cn('cover-image', { ['alignfull']: alignfull })}>
      {slug ? (
        <Link href={`/blog/${slug}`}>
          <a aria-label={title || 'unknown'}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
