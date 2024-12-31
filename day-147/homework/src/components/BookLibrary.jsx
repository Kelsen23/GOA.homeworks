import { useState, useEffect } from 'react'

const BookLibrary = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const renderData = (books) => {
    const aboutBook = books.map(book => ({
      title: book.volumeInfo.title || 'No Title Available',
      description: book.volumeInfo.description || 'No Description Available',
      image: book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
      authors: book.volumeInfo.authors?.join(', ') || 'Unknown Author',
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

      <div>
       {data.length > 0 ? (data.map((book, index) => {
        return (
          <div key={index}>
            <h2>{book.title}</h2>
            <img src={book.image} style={{ width: '150px' }} />
            <p><strong>Author(s):</strong> {book.authors}</p>
            <p><strong>Description:</strong> {book.description}</p>
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