export enum PostActionTypes {
  FETCH_POST_REQUEST = 'FETCH_POST_REQUEST',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'
}

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostState = {
  loading: boolean;
  error: string
  posts: [] | Post[]
}

export type PostAction = {
  type: PostActionTypes.FETCH_POST_REQUEST | PostActionTypes.FETCH_POST_SUCCESS | PostActionTypes.FETCH_POST_FAILURE;
  payload: Post[] | string;
}