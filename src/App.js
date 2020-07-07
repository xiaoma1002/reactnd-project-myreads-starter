import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentReadingShelf from './CurrentReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import HaveReadShelf from './HaveReadShelf'
//maybe books should be divided into three kinds of books corresponding to three bookshelves
// or, we may add a var in each book to represent this state(shelf) right now
//the formor strategy means we need to change more info(add and delete the whole book element) each time we want to
// change the state of a book, therefore, I personally reckon the latter one is better in this issue
//but if I choose the latter one, it means that I need to iterate all books to put them in corresponding shelves

const crbooks = [
  {
    "id": "To Kill a Mockingbird",
    "bookTitle": "To Kill a Mockingbird",
    "bookAuthors": "Harper Lee",
    "bookCoverUrl": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
    "bookshelfTitle": "Currently Reading" //state
  }
]
const wtrbooks = [
  {
    "id": "1776",
    "bookTitle": "1776",
    "bookAuthors": "David McCullough",
    "bookCoverUrl": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
    "bookshelfTitle": "Want to Read" //state
  }
]
const hrbooks = [
  {
    "id": "The Hobbit",
    "bookTitle": "The Hobbit",
    "bookAuthors": "J.R.R. Tolkien",
    "bookCoverUrl": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
    "bookshelfTitle": "Read" //state 
  }
]
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <CurrentReadingShelf crbooks={crbooks}/>
                  <WantToReadShelf wtrbooks={wtrbooks}/>
                  <HaveReadShelf hrbooks={hrbooks}/>
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
