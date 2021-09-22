import { PostActionTypes, PostState, PostAction } from './../action-types/post.action.type';

const initialState: PostState = {
  loading: false,
  error: '',
  posts: []
}

const postReducer = (state: PostState = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case PostActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    case PostActionTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default postReducer;