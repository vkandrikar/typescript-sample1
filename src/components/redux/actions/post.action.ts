import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Post, PostActionTypes } from './../action-types/post.action.type';

const fetchPostRequest = () => {
  return {
    type: PostActionTypes.FETCH_POST_REQUEST
  }
}

const fetchPostSuccess = (posts: Post[]) => {
  return {
    type: PostActionTypes.FETCH_POST_SUCCESS,
    payload: posts
  }
}

const fetchPostFailure = (error: string) => {
  return {
    type: PostActionTypes.FETCH_POST_FAILURE,
    payload: error
  }
}

export const getAllPosts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPostRequest())

    try {
      await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          dispatch(fetchPostSuccess(response.data));
        })
        .catch((error: any) => dispatch(fetchPostFailure(error.message)))
    } catch (error: any) {
      dispatch(fetchPostFailure(error.message))
    }
  }
}