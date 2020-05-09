import React from "react";
import BookShelves from "./BookShelves";

class BookDisplay extends React.Component {
  render() {
    const { id, book } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img
              className="book-cover"
              src={book.imageLinks.smallThumbnail}
              alt="Book Cover img"
            />
          </div>
          <div className="book-title">{book.title}</div>
        </div>
      </li>
    );
  }
}
export default BookDisplay;
