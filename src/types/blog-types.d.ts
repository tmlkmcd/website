type WordpressPost = {
  categories: {
    [key: string]: {
      ID: number,
      description: string,
      meta: Object,
      name: string,
      parent: number,
      post_count: number,
      slug: string
    }
  },
  [key: string]: any
};

type Post = {
  id: number,
  slug: string,
  date: Date,
  modified: Date,
  excerpt: string,
  content: string,
  title: string,
  categories: string[]
}

type BlogPayload = Partial<{
  error: Error,
  loading: true,
  posts: Post[]
}>

type PostPayload = Partial<{
  error: Error,
  loading: true,
  post: Post
}>
