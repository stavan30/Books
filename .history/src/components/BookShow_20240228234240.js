import React from 'react'

const BookShow = ({Book}) => {
  return (
    <div className='book-show'>
      {Book.title}
    </div>
  )
}

export default BookShow