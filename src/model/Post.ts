export interface Post {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export type CreatePost = Pick<Post, 'username' | 'title' | 'content'>;

export type EditPost = Pick<Post, 'title' | 'content'>;