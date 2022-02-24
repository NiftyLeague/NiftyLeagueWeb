import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { Maybe, User, MediaItem } from '../../types/generated/graphql';

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
      <div className="mb-8 md:mb-16">
        {coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 mb-md-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }} />
            </Link>
          </h3>
          <div className="mb-4 mb-md-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && <div className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />}
          <Avatar author={author} />
        </div>
      </div>
    </section>
  );
}
