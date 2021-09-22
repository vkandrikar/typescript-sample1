import axios from 'axios'
import { useEffect, useReducer } from 'react'
import { Book, bookInitialState, bookReducer } from './BookReducer';

export const useBookSearch = (query: string, pageNumber: number) => {
  const [state, dispatch] = useReducer(bookReducer, bookInitialState);

  //to reset books data when query changes
  useEffect(() => {
    dispatch({ type: 'success', payload: [] });
  }, [query])

  useEffect(() => {
    dispatch({ type: 'loading' });
    let cancleFunt: any;

    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(executor => cancleFunt = executor)
    })
      .then((result) => {
        const books: Book[] = Array.from(new Set([
          ...state.books,
          ...result.data.docs.map((book: any): Book => {
            return { title: book.title, key: book.key }
          })
        ]));

        dispatch({ type: 'success', payload: books });
        dispatch({ type: 'hasmore', payload: result.data.docs.length > 0 })
      })
      .catch((error) => {
        if (axios.isCancel(error))
          return;

        dispatch({ type: 'error', payload: error });
      })
    return () => cancleFunt();
  }, [query, pageNumber]);

  return state;
}
