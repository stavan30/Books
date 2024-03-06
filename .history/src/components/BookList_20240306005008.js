import React from 'react'
import BookShow from './BookShow'

const BookList = ({Books, onDelete, onEdit}) => {
  const renderedBooks = Books.map((Book)=>{
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={Book.id} Book={Book}/>
  })

  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  )
}

export default BookList