// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function exit(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: '/' });
  res.end();
}
