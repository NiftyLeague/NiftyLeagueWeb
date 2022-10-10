import { Post, PostFormatToPostConnection, PostFormatToPostConnectionEdge } from '../types/generated/graphql';

const API_URL = process.env.WORDPRESS_API_URL as string;

async function fetchAPI(query: string, { variables } = { variables: {} }) {
  const headers: { 'Content-Type': string; Authorization?: string } = {
    'Content-Type': 'application/json',
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN)
    headers.Authorization = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPreviewPost(id: string | string[], idType = 'DATABASE_ID'): Promise<Post> {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    },
  );
  return data.post;
}
