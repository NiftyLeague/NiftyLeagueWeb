import { Maybe } from '../../types/generated/graphql';
import styles from './post-body.module.css';

export default function PostBody({ content }: { content?: Maybe<string> }) {
  return content ? (
    <div className="mx-auto" style={{ maxWidth: "900px" }}>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  ) : null;
}
