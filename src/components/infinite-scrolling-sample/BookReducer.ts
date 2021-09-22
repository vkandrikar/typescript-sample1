export type Book = {
  title: string,
  key: string
}

type BookProps = {
  loading: boolean;
  error: Error | null;
  hasMore: boolean;
  books: Book[]
}

type BookLoadingAction = {
  type: 'loading';
}

type BookErrorAction = {
  type: 'error';
  payload: Error | null;
}

type BookHasMoreAction = {
  type: 'hasmore';
  payload: boolean;
}

type BookSuccessAction = {
  type: 'success';
  payload: Book[];
}

type BookActions = BookLoadingAction | BookErrorAction | BookHasMoreAction | BookSuccessAction;

export const bookInitialState: BookProps = {
  loading: true,
  error: null,
  hasMore: false,
  books: []
}

export const bookReducer = (state: BookProps, action: BookActions): BookProps => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: true,
        error: null,
        hasMore: false
      }
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'hasmore':
      return {
        ...state,
        hasMore: action.payload
      }
    case 'success':
      return {
        ...state,
        loading: false,
        error: null,
        books: action.payload
      }
    default:
      return state
  }
}