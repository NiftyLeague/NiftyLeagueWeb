import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';
import { Maybe, User, MediaItem, PostToCategoryConnection } from '../../types/generated/graphql';

export default function PostHeader({
  author,
  categories,
  coverImage,
  date,
  title,
}: {
  author?: Maybe<User>;
  categories?: Maybe<PostToCategoryConnection>;
  coverImage?: Maybe<MediaItem>;
  date?: Maybe<string>;
  title?: Maybe<string>;
}) {
  return (
    <>
      {title && <PostTitle>{title}</PostTitle>}
      <div className="hidden md:block mb-md-12">
        <Avatar author={author} />
      </div>
      {coverImage && (
        <div className="mb-8 mb-md-16 mx-sm-0">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      )}
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          {categories && <Categories categories={categories} />}
        </div>
      </div>
    </>
  );
}
