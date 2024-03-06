import React from 'react'
import BookShow from './BookShow'

const BookList = ({Books}) => {
  const renderedBooks = Books.map((Book)=>{
    return <BookShow key={Book.id} Book={Book}/>
  })

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList