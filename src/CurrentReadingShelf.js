import React, { Component } from 'react'
import ListBooks from './ListBooks'

class CurrentReadingShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <ListBooks books={this.props.crbooks} />
      </div>
    )
  }
}

export default CurrentReadingShelf