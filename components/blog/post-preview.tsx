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
      <div className="mb-3">{coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}</div>
      {title && (
        <Link href={`/blog/${slug}`} passHref>
          <h3 className="mb-3 post-preview-title">{title}</h3>
        </Link>
      )}
      <div className="mb-3">
        <Date dateString={date} />
      </div>
      {excerpt && <div className="mb-4 excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />}
      <Avatar author={author} />
    </div>
  );
}
