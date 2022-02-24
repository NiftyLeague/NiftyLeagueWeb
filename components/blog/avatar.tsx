import Image from 'next/image';
import { Maybe, User } from '../../types/generated/graphql';

export default function Avatar({ author }: { author?: Maybe<User> }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null;

  return author?.avatar?.url ? (
    <div className="d-flex align-items-center mb-2">
      <Image src={author.avatar.url} width={48} height={48} className="rounded-circle" alt={name || 'unknown'} />
      <div className="text-xl fw-bold mx-3">{name}</div>
    </div>
  ) : null;
}
