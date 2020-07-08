import React, { Component } from 'react'
import CurrentReadingShelf from './CurrentReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import HaveReadShelf from './HaveReadShelf'
import { Link } from 'react-router-dom'

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentReadingShelf crbooks={this.props.crbooks} />
            <WantToReadShelf wtrbooks={this.props.wtrbooks} />
            <HaveReadShelf hrbooks={this.props.hrbooks} />
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
            className='search-book'>Search a book
          </Link>
          {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
        </div>
      </div>
    )
  }
}

export default MainPage