import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturedImage } from '../../types/blog';

export default function CoverImage({
  title,
  coverImage,
  slug,
}: {
  title: string;
  coverImage: FeaturedImage['node'];
  slug?: string;
}) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="mx-sm-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
