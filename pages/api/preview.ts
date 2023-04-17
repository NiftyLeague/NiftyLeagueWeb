// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPreviewPost } from '@/lib/api';

type Data = {
  message: string;
};

export default async function preview(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { secret, id, slug } = req.query;

  // Check the secret and next parameters
  // This secret should only be known by this API route
  if (!process.env.WORDPRESS_PREVIEW_SECRET || secret !== process.env.WORDPRESS_PREVIEW_SECRET || (!id && !slug)) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Fetch WordPress to check if the provided `id` or `slug` exists
  const post =
    id || slug ? await getPreviewPost(id || (slug as string | string[]), id ? 'DATABASE_ID' : 'SLUG') : undefined;

  // If the post doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Post not found' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    post: {
      id: post.databaseId,
      slug: post.slug,
      status: post.status,
    },
  });

  // Redirect to the path from the fetched post
  // We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/blog/${post.slug || post.databaseId}` });
  res.end();
}
