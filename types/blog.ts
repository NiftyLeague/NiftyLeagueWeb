export interface FeaturedImage {
  node: { sourceUrl: string };
}

export interface Author {
  node: {
    name: string;
    firstName: string | null;
    lastName: string | null;
    avatar: { url: string };
  };
}

export interface Node {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: FeaturedImage | null;
  author: Author;
}

export interface Edge {
  node: Node;
}

export interface Posts {
  edges: Edge[];
}
