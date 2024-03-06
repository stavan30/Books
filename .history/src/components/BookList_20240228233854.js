import React from 'react'
import BookShow from './BookShow'

const BookList = ({Books}) => {
  const renderedBooks = Books.map((Book)=>{
    return <BookShow id={Book.id} book={Book}/>
  })

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList