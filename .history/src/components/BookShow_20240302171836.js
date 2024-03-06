import React from 'react'
import { useState } from 'react'

const BookShow = ({Book, onDelete}) => {
  const [showEdit, setShowEdit] = useState([false])

  const handleDeleteClick = ()=>{
    onDelete(Book.id)
  }
  return (
    <div className='book-show'>
      {Book.title}
      <div className='actions'>
        <button>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow