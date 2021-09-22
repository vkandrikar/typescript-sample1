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

type PostRequestAction = {
  type: PostActionTypes.FETCH_POST_REQUEST;
}

type PostFailureAction = {
  type: PostActionTypes.FETCH_POST_FAILURE;
  payload: string;
}

type PostSuccessAction = {
  type: PostActionTypes.FETCH_POST_SUCCESS;
  payload: Post[];
}

export type PostAction = PostRequestAction | PostFailureAction | PostSuccessAction;