import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { Maybe, User, MediaItem } from '@types/generated/graphql';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage?: Maybe<MediaItem>;
  date?: Maybe<string>;
  excerpt?: Maybe<string>;
  author?: Maybe<User>;
  slug?: Maybe<string>;
}) {
  return (
    <section>
      <div className="mb-5">{coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}</div>
      <div className="row mb-3 mb-md-5">
        <div className="col-md-6">
          <Link href={`/blog/${slug}`} passHref>
            <h3 className="mb-4 hero-title">{title}</h3>
          </Link>
          <div className="mb-4 mb-md-0">
            <Date dateString={date} />
          </div>
        </div>
        <div className="col-md-6">
          {excerpt && <div className="mb-4 excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />}
          <Avatar author={author} />
        </div>
      </div>
    </section>
  );
}
