import Link from 'next/link';

export default function Header() {
  return (
    <div className="blog-header">
      <Link href="/blog" passHref>
        <h5>... /</h5>
      </Link>
    </div>
  );
}
