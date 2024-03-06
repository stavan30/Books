import React from 'react'
import { useState } from 'react'

const App = () => {
    const[books, setBooks] = useState([]);

    const createBook = (title) => {
        console.log('A book is created')
    }
  return (
    <div>App</div>
  )
}

export default App