import React from 'react'
import { useState } from 'react'

const BookShow = ({Book, onDelete}) => {
  const [showEdit, setShowEdit] = useState([false])

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleDeleteClick = () => {
    onDelete(Book.id)
  }
  return (
    <div className='book-show'>
      {Book.title}
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
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