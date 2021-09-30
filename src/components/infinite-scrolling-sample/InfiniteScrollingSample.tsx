import React, { useCallback, useRef, useState } from 'react'
import { useBookSearch } from './useBookSearch'

export const InfiniteScrollingSample = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, hasMore, books } = useBookSearch('test', pageNumber);
  const observer = useRef<IntersectionObserver>();
  //storing ref of last element in our page
  const lastBookEleRef = useCallback(node => {
    if (loading) return; // if loading terminate process
    if (observer.current) observer.current.disconnect(); //is observer is available then disconnect  previous one

    //add new observer
    observer.current = new IntersectionObserver(entries => {
      //cheking if last element is visible on screen
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevState => prevState + 1)
      }
    })

    if (node) observer.current.observe(node);
  }, [loading, hasMore])

  //console.log(loading, error, hasMore)
  return (
    <div className="aligner">
      {
        books && books.map((book, index) => {
          if (books.length === index + 1)
            return <h5 ref={lastBookEleRef} key={book.key}>{`${index + 1} - ${book.title}`}</h5>
          else
            return <h5 key={book.key}>{`${index + 1} - ${book.title}`}</h5>
        })
      }
      {loading && <h3>Loading....</h3>}
      {error && <h3>{error.message}</h3>}
    </div>
  )
}
