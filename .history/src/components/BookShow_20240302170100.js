import React from 'react'

const BookShow = ({Book, onDelete}) => {
  return (
    <div className='book-show'>
      {Book.title}
      <div className='actions'>
        <button className='delete' onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow