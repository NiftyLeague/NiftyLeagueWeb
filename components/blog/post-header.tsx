import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import Categories from './categories';
import { Author, FeaturedImage } from '../../types/blog';

export default function PostHeader({
  author,
  categories,
  coverImage,
  date,
  title,
}: {
  author: Author['node'];
  coverImage?: FeaturedImage['node'];
  date: string;
  title: string;
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      )}
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
