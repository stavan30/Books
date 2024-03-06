import React from 'react'
import BookShow from './BookShow'

const BookList = ({Books, onDelete}) => {
  const renderedBooks = Books.map((Book)=>{
    return <BookShow onDelete={onDelete} key={Book.id} Book={Book}/>
  })

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList