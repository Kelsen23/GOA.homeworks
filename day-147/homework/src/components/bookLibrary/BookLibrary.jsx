import { useState, useEffect } from 'react'
import "./BookLibrary.css"

const BookLibrary = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const renderData = (books) => {
    const aboutBook = books.map(book => ({
      title: book.volumeInfo.title || 'No Title Available',
      description: book.volumeInfo.description || 'No Description Available',
      image: book.volumeInfo.imageLinks?.thumbnail,
      authors: book.volumeInfo.authors?.join(', ') || 'N/A',
    }))
    setData(aboutBook);
  }

  const fetchBookData = async () => {
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      const result = await res.json();
      renderData(result.items || [])
    } catch(error) {
      console.error(`Something went wrong: ${error}`)
    }
  }

  useEffect(() => {
    fetchBookData();
  }, [searchTerm])

  return (
    <div>
      <input type="text" placeholder='Type In The Name of Book' onChange={e => setSearchTerm(e.target.value)} />

      <div className='books-container'>
       {data.length > 0 ? (data.map((book, index) => {
        return (
          <div key={index} className='book-container'>
            <div className='title-container'>
              <h2 className='book-title'>{book.title}</h2>
            </div>

            <div className='book-info-container'>
              <img src={book.image} style={{ width: '150px' }} className='book-img' />
              <p className='author'><strong>Author(s):</strong> {book.authors}</p>
              <p className='description'><strong>Description:</strong> {book.description}</p>
            </div>
          </div>
        )
       })) : (
        ""
       )}
      </div>
    </div>
  )
}

export default BookLibrary