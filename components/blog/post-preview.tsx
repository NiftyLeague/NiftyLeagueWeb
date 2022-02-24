import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { Maybe, User, MediaItem } from '../../types/generated/graphql';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title?: string;
  coverImage?: Maybe<MediaItem>;
  date?: string;
  excerpt?: string;
  author?: Maybe<User>;
  slug?: string;
}) {
  return (
    <div>
      <div className="mb-5">{coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}</div>
      <h3 className="text-3xl mb-3 leading-snug">
        {title && (
          <Link href={`/posts/${slug}`}>
            <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }}></a>
          </Link>
        )}
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      {excerpt && <div className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />}
      <Avatar author={author} />
    </div>
  );
}
