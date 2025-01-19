import { useEffect } from "react";
import "./MyLibrary.css";

const MyLibrary = ({ library, setLibrary }) => {

  const handleRemove = (book) => {
    setLibrary((prevBooks) => prevBooks.filter((item) => book.title !== item.title));
  };

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  }, [library]);

  return (
    <div>
      <div className="myLibrary_sector-title-container">
        <h1>My Library</h1>
      </div>

      <div className="library-container">
        {library.length > 0 ? library.map((book, index) => (
          <div key={index} className="myLibrary_book-container">
            <div className="myLibrary_title-container">
              <h2 className="myLibrary_book-title">{book.title}</h2>
            </div>

            <div className="myLibrary_book-info-container">
              <img
                src={book.image}
                style={{ width: "150px" }}
                className="myLibrary_book-img"
                alt={book.title}
              />
              <p className="myLibrary_author">
                <strong>Author(s):</strong> {book.authors}
              </p>
              <p className="myLibrary_description">
                <strong>Description:</strong> {book.description}
              </p>
              <button onClick={() => handleRemove(book)}>Remove</button>
            </div>
          </div>
        )) : <p className="noLibraryData">Your Library Is Empty</p>}
      </div>
    </div>
  );
};

export default MyLibrary;
