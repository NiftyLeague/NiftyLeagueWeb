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
  tags,
  title,
}: {
  author?: Maybe<User>;
  categories?: Maybe<PostToCategoryConnection>;
  coverImage?: Maybe<MediaItem>;
  date?: Maybe<string>;
  tags?: Maybe<string>;
  title?: Maybe<string>;
}) {
  return (
    <>
      {title && <PostTitle>{title}</PostTitle>}
      {coverImage && (
        <div className="mb-4 mx-sm-0">
          <CoverImage alignfull title={title} coverImage={coverImage} />
        </div>
      )}
      <div className="d-flex align-items-center justify-content-between">
        <div className="mb-2">
          <Avatar author={author} />
        </div>
        <div className="mb-4 mt-1">
          Posted <Date dateString={date} />
        </div>
        {categories && (
          <div className="mb-4 mt-1 desktop">
            <Categories categories={categories} />
          </div>
        )}
      </div>
      {categories && (
        <div className="mobile">
          <Categories categories={categories} />
        </div>
      )}
    </>
  );
}
