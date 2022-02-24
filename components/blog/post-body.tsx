import { Maybe } from '../../types/generated/graphql';
import styles from './post-body.module.css';

export default function PostBody({ content }: { content?: Maybe<string> }) {
  return content ? (
    <div className="max-w-2xl mx-auto">
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  ) : null;
}
