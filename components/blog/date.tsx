import { parseISO, format } from 'date-fns';
import { Maybe } from '@types/generated/graphql';

export default function Date({ dateString }: { dateString?: Maybe<string> }) {
  if (!dateString) return null;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
}
