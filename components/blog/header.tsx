import Link from 'next/link';

export default function Header() {
  return (
    <div className="blog-header">
      <Link href="/blog" passHref>
        <h3>⬅️ Blog</h3>
      </Link>
    </div>
  );
}
