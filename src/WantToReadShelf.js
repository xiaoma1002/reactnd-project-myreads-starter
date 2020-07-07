import React, { Component } from 'react'
import ListBooks from './ListBooks'

class WantToReadShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        <ListBooks books={this.props.wtrbooks} />
      </div>
    )
  }
}

export default WantToReadShelf