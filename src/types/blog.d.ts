type PostCategory = null | 'music' | 'fitness';
type WordpressPost = {
  [key: string]: any
};

type Post = {
  slug: string,
  date: Date,
  modified: Date,
  excerpt: string,
  content: string
}

type BlogPayload = Partial<{
  error: Error,
  loading: true,
  posts: Post[]
}>
